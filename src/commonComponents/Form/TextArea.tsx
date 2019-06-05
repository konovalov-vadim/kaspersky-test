import * as React from 'react';
import styled from 'styled-components';
import {commonCss, ErrorMessage, IFormComponentProps} from 'commonComponents/Form/styled';
import {FieldRenderProps} from 'react-final-form';

const InternalTextArea = styled.textarea`
  ${commonCss}
`;

interface IOwnProps extends IFormComponentProps {
  placeholder?: string;
}

class TextArea extends React.PureComponent<IOwnProps & FieldRenderProps<HTMLTextAreaElement>> {
  public render() {
    const {input, meta, ...rest} = this.props;

    return (
      <div style={{width: '100%'}}>
        <div>
          <InternalTextArea {...input} {...rest} />
        </div>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
    );
  }
}

export default TextArea;
