import * as React from 'react';
import {ErrorMessage, IFormComponentProps, StyledInput} from 'commonComponents/Form/styled';
import {FieldRenderProps} from 'react-final-form';

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
          <StyledInput {...input} {...rest} />
        </div>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
    );
  }
}

export default Input;
