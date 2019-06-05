import * as React from 'react';
import {StyledContainer} from 'mobile/styled';
import Utility from 'utility/Utility';
import {IWithExtOpacity} from 'utility/withSmoothAppearance';

const MobileMock = ({extOpacity}: IWithExtOpacity) => (
  <StyledContainer opacity={extOpacity}>Mobile version is under construction...</StyledContainer>
);

export default Utility.withSmoothAppearance(MobileMock);
