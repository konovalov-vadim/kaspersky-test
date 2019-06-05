import * as React from 'react';
import styled from 'styled-components';
import {commonCss, ErrorMessage, IFormComponentProps} from 'commonComponents/Form/styled';
import {FieldRenderProps} from 'react-final-form';

const InternalInput = styled.input`
  ${commonCss}
`;

interface IOwnProps extends IFormComponentProps {
  placeholder?: string;
  type?: string;
}

class Input extends React.PureComponent<IOwnProps & FieldRenderProps<HTMLInputElement>> {
  public render() {
    const {input, meta, ...rest} = this.props;

    return (
      <div style={{width: '100%'}}>
        <div>
          <InternalInput {...input} {...rest} />
        </div>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
    );
  }
}

export default Input;
