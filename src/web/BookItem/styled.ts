import styled from 'styled-components';
import ColorPalette from 'constants/ColorPalette';
import Typography from "constants/Typography";

export const StyledContainer = styled.div`
  width: 250px;
  background: ${ColorPalette.gray3};
  font-size: ${Typography.size.small};
  margin: 0 15px 15px 0;
`;

export const StyledCover = styled.div<{imageUrl: string}>`
  width: 100%;
  height: 250px;
  background: ${ColorPalette.gray2};
  background-image: url(${({imageUrl}) => imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledInternalContainer = styled.div`
  padding: 15px;
`;

export const StyledTable = styled.table`
  tr {
    td {
      padding: 0 0 15px 0;
      vertical-align: top;
    }
    
    :last-of-type {
      td {
        padding: 0;
      }
    }
  }
`;

export const StyledButton = styled.div`
  cursor: pointer;
  transition: .3s;
  
  :hover {
    opacity: .4;
  }
`;