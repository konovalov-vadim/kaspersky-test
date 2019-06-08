import styled from 'styled-components';
import Typography from 'constants/Typography';
import ColorPalette from 'constants/ColorPalette';

export default styled.button`
  border: 0;
  font-size: ${Typography.size.medium};
  color: ${ColorPalette.white1};
  padding: 6px 20px;
  transition: .3s;
  background: ${ColorPalette.blue1};
  border-radius: 7px;
  outline: none !important;
  
  :hover {
    background: ${ColorPalette.blue2};
  }
  
  :disabled {
    background: ${ColorPalette.gray2};
  }
`;
