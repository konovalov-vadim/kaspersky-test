import styled from 'styled-components';
import ColorPalette from 'constants/ColorPalette';

export const StyledTool = styled.div<{active: boolean}>`
  margin-right: 20px;
  transition: 0.3s;
  cursor: pointer;
  ${({active}) => active && `color: ${ColorPalette.blue1} !important;`}

  :hover {
    color: ${ColorPalette.blue2};
  }
`;
