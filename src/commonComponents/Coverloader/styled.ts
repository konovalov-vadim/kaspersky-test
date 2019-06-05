import styled from 'styled-components';
import ColorPalette from '../../constants/ColorPalette';
import Utility from '../../utility/Utility';

export const StyledContainer = styled.div<{background?: string; bgOpacity?: number; zIndex?: number}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({zIndex}) => zIndex || 1};
  background: ${({background, bgOpacity}) =>
    (background || ColorPalette.white1) + Utility.convertOpacityToCssHex(bgOpacity || 0)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
