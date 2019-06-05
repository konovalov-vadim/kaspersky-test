import {ILocalStorage} from 'models/ILocalStorage';
import {INITIAL_AUTHORS, INITIAL_BOOK_COVERS, INITIAL_DATA} from 'constants/common';

const localStorageName = 'kaspersky-test-app';

const getStorage = (): ILocalStorage | null => {
  const appStorage = localStorage.getItem(localStorageName);

  if (appStorage) {
    return JSON.parse(appStorage);
  } else {
    return null;
  }
};

const initStorage = () => {
  if (!getStorage()) {
    const initializedStorage: ILocalStorage = {
      books: INITIAL_DATA,
      authors: INITIAL_AUTHORS,
      covers: INITIAL_BOOK_COVERS
    };

    localStorage.setItem(localStorageName, JSON.stringify(initializedStorage));
  }
};

const get = (type: keyof ILocalStorage) => {
  const appStorage = getStorage();

  if (appStorage) {
    return appStorage[type];
  } else {
    return appStorage;
  }
};

const set = (type: keyof ILocalStorage, value: ILocalStorage[keyof ILocalStorage]) => {
  const appStorage = getStorage();

  if (appStorage) {
    appStorage[type] = value;
  }
};

export default {initStorage, get, set};
