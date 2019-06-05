import styled from 'styled-components';
import Typography from 'constants/Typography';

export const StyledContainer = styled.div<{opacity: number}>`
  transition: 0.7s;
  position: absolute;
  width: 100%;
  height: 100%;
  display: fex;
  align-items: center;
  justify-content: center;
  opacity: ${({opacity}) => opacity};
  font-size: ${Typography.size.normal};
`;
