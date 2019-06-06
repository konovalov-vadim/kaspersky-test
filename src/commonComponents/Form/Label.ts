import styled from 'styled-components';
import ColorPalette from 'constants/ColorPalette';
import Utility from 'utility/Utility';

export default styled.div`
  margin-bottom: 5px !important;
  color: ${ColorPalette.black1 + Utility.convertOpacityToCssHex(0.6)};
`;
