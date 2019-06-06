import * as React from 'react';
import {ErrorMessage, IFormComponentProps} from 'commonComponents/Form/styled';
import {FieldRenderProps} from 'react-final-form';
import ReactSelect from 'react-select';

interface IOwnProps extends IFormComponentProps {
    placeholder?: string;
}

class Select extends React.PureComponent<IOwnProps & FieldRenderProps<HTMLElement>> {
    public render() {
        const {input, meta, ...rest} = this.props;

        return (
            <div style={{width: '100%'}}>
                <div>
                    <ReactSelect {...input} {...rest} />
                </div>
                {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
            </div>
        );
    }
}

export default Select;
