import * as React from 'react';
import Icon, {IconName} from 'icons/Icon';

interface IOwnProps {
  size: number;
  color?: string;
}

const SVGLoader = ({size, color}: IOwnProps) => <Icon color={color} name={IconName.Loader} />;

export default SVGLoader;
