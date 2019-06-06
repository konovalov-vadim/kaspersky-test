import styled from 'styled-components';
import Typography from "constants/Typography";
import ColorPalette from "constants/ColorPalette";

export const StyledContainer = styled.div<{opacity: number}>`
  margin: 40px auto;
  width: calc(100% - 400px);
  min-width: 780px;
  transition: 0.7s;
  opacity: ${({opacity}) => opacity};
`;

export const StyledAppTitle = styled.div`
  font-size: ${Typography.size.large};
  color: ${ColorPalette.gray4};
`;

export const StyledInnerContainer = styled.div`
  margin-top: 30px;
`;