import MobileDetector from 'utility/MobileDetector';
import {withContext} from 'utility/withContext';
import {withSmoothAppearance} from 'utility/withSmoothAppearance';
import {IAttachedFile} from 'models/IAttachedFile';
import AcceptableFileExtensions from 'constants/AcceptableFileExtensions';
import fileToBase64Converter from 'utility/fileToBase64Converter';
import appLocalStorage from 'utility/appLocalStorage';

const convertOpacityToCssHex = (opacity: number) => {
  const subOpacity = opacity >= 1 ? 1 : opacity <= 0 ? 0 : opacity;

  // tslint:disable-next-line:no-bitwise
  return `0${(~~((isNaN(subOpacity) ? 0.5 : subOpacity) * 255)).toString(16)}`.slice(-2);
};

const objectToSearchQuery = (data: {}) =>
  `?${Object.entries(data)
    .map(el => `${el[0]}=${el[1]}`)
    .join('&')}`;

const fileInfo = (file: File) => {
  const sizeMB = file.size / 1024 / 1024;
  const splittedFileName = file.name.split('.');
  const fileExtension = splittedFileName.pop();

  return {
    sizeMB,
    fileExtension,
    fileName: splittedFileName.join('.')
  };
};

const fileSortAndConvert = (files: File[]) => {
  const convertedFiles: IAttachedFile[] = [];

  files.forEach((el: File) => {
    const currentFileInfo = fileInfo(el);

    if (currentFileInfo.sizeMB < 5 && AcceptableFileExtensions.includes(currentFileInfo.fileExtension || '*')) {
      convertedFiles.push({
        file: el,
        id: ~~(Math.random() * 10000000)
      } as IAttachedFile);
    }
  });

  return convertedFiles;
};

export default {
  MobileDetector,
  convertOpacityToCssHex,
  objectToSearchQuery,
  withContext,
  withSmoothAppearance,
  fileInfo,
  fileSortAndConvert,
  fileToBase64Converter,
  appLocalStorage
};
