import styled from 'styled-components';
import ColorPalette from 'constants/ColorPalette';
import * as React from 'react';

export const styledIcon = (icon: React.ComponentClass<any>) => styled(icon)<{color?: string}>`
  flex-shrink: 0;

  rect {
    fill: ${({color}) => color || ColorPalette.white1};
  }
`;
