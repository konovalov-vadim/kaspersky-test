import styled, {css} from 'styled-components';
import ColorPalette from 'constants/ColorPalette';
import Typography from 'constants/Typography';
import Utility from 'utility/Utility';

export interface IFormComponentProps {
  right?: boolean;
  left?: boolean;
}

export const commonCss = css<IFormComponentProps>`
  position: relative;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid ${ColorPalette.gray3};
  ${({right}) => (right ? `border-top-right-radius: 0; border-bottom-right-radius: 0;` : '')}
  ${({left}) => (left ? `border-top-left-radius: 0; border-bottom-left-radius: 0; border-left: 0` : '')}
  background: ${ColorPalette.white1};
  width: 100%;
  transition: box-shadow .3s, border-color .4s;
  
  ::placeholder {
    color: ${ColorPalette.black1 + Utility.convertOpacityToCssHex(0.4)};
    font-size: ${Typography.size.medium};
  }
  
  :focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${ColorPalette.blue2};
    z-index: 1;
  }
`;

export const ErrorMessage = styled.div`
  padding: 0 10px;
  color: ${ColorPalette.red1};
  border-radius: 5px;
`;
