import styled from 'styled-components';
import ColorPalette from 'constants/ColorPalette';

export const StyledContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledCoverContainer = styled.div`
  width: 250px;
  height: 250px;
`;

export const StyledCover = styled.div<{imageUrl: string; selected?: boolean}>`
  width: 40px;
  height: 40px;
  background: ${({selected}) => (selected ? ColorPalette.blue2 : 'transparent')};
  background-image: url(${({imageUrl}) => imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 2px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.5;
  }
`;
