import * as React from 'react';

import {ReactComponent as Loader} from 'icons/SVGLoader.svg';
import {ReactComponent as Attachment} from 'icons/attachment.svg';
import {ReactComponent as TrashBasket} from 'icons/bin-1.svg';
import {styledIcon} from 'icons/styled';

export enum IconName {
  Attachment,
  Loader,
  TrashBasket
}

const IconMap: {[key: number]: any} = {
  [IconName.Attachment]: Attachment,
  [IconName.Loader]: Loader,
  [IconName.TrashBasket]: TrashBasket
};

interface IOwnProps {
  name: IconName;
  color?: string;
  size?: number;
}

export default ({name, size, color}: IOwnProps) => {
  const IconComponent = styledIcon(IconMap[name] as any);

  return <IconComponent {...{[size ? 'width' : '']: size, [size ? 'height' : '']: size}} color={color} />;
};
