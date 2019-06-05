import * as React from 'react';
import SVGLoader from 'commonComponents/SVGeLoader/SVGLoader';
import {StyledContainer} from 'commonComponents/Coverloader/styled';

interface IOwnProps {
  loaderSize: number;
  loaderColor?: string;
  bgColor?: string;
  bgOpacity?: number;
  zIndex?: number;
}

const CoverLoader = ({loaderSize, loaderColor, bgColor, bgOpacity, zIndex}: IOwnProps) => (
  <StyledContainer background={bgColor} bgOpacity={bgOpacity} zIndex={zIndex}>
    <SVGLoader size={loaderSize} color={loaderColor} />
  </StyledContainer>
);

export default CoverLoader;
