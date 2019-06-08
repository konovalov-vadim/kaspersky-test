import 'react-datetime/css/react-datetime.css';

import * as React from 'react';
import {ErrorMessage, IFormComponentProps} from 'commonComponents/Form/styled';
import {FieldRenderProps} from 'react-final-form';
import ReactDatetime from 'react-datetime';
import Time from 'constants/Time';

interface IOwnProps extends IFormComponentProps {
  placeholder?: string;
  type?: string;
}

class DatePicker extends React.PureComponent<IOwnProps & FieldRenderProps<HTMLInputElement>> {
  public render() {
    const {input, meta, ...rest} = this.props;

    return (
      <div style={{width: '100%'}}>
        <div>
          <ReactDatetime {...rest} {...input as any} timeFormat={false} dateFormat={Time.displayDateFormat} />
        </div>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
      </div>
    );
  }
}

export default DatePicker;
