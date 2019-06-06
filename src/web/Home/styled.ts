import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {StyledButtonCSS} from 'commonComponents/styled';
import ColorPalette from 'constants/ColorPalette';

export const StyledContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledButton = styled(Link)`
  color: ${ColorPalette.black1};
  text-decoration: none !important;
  ${StyledButtonCSS}
  
  :hover {
    color: ${ColorPalette.black1} !important;
  }
`;

