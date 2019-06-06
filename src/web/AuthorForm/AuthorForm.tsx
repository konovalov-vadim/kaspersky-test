import * as React from 'react';
import {StyledContainer} from 'web/AuthorForm/styled';
import {StyledButton} from 'web/BookItem/styled';
import {IAuthor} from 'models/IAuthor';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {addAuthor} from 'redux/authorsDucks';
import {Field, Form, FormRenderProps} from 'react-final-form';
import Input from 'commonComponents/Form/Input';
import fieldValidation from 'commonComponents/Form/fieldValidation';
import PrimaryButton from 'commonComponents/Form/PrimaryButton';
import Label from 'commonComponents/Form/Label';

interface IConnectProps {
  dispatch: ThunkDispatch<any, any, Action>;
}

interface IOwnProps {
  onHide: () => void;
  onAdd: (a: IAuthor) => void;
}

interface FormValues {
  name: string;
  surname: string;
}

const {required, composeValidators, validateLength} = fieldValidation;

const formId = 'AuthorForm';

class AuthorForm extends React.PureComponent<IOwnProps & IConnectProps> {
  private onSave = (data: object) => {
    const {onAdd, dispatch} = this.props;
    const {name, surname} = data as FormValues;

    const newAuthor: IAuthor = {
      id: Math.random() * 10000,
      name,
      surname
    };

    dispatch(addAuthor(newAuthor));
    onAdd(newAuthor);
  };

  private renderForm = ({handleSubmit, pristine, invalid}: FormRenderProps) => (
    <form onSubmit={handleSubmit} autoComplete="off" id={formId}>
      <div className="row align-content-stretch">
        <div className="col">
          <Label>Name</Label>
          <Field
            name={'name'}
            component={Input}
            placeholder="Type name here"
            validate={composeValidators(required, validateLength(0, 20))}
          />
        </div>
        <div className="col">
          <Label>Surname</Label>
          <Field
            name={'surname'}
            component={Input}
            placeholder="Type surname here"
            validate={composeValidators(required, validateLength(0, 20))}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-auto d-flex align-items-center">
          <PrimaryButton disabled={invalid || pristine} form={formId}>
            Add
          </PrimaryButton>
        </div>
        <div className="col-auto d-flex align-items-center">
          <StyledButton onClick={this.props.onHide}>Hide</StyledButton>
        </div>
      </div>
    </form>
  );

  public render() {
    return (
      <StyledContainer>
        <Form onSubmit={this.onSave} render={this.renderForm} key={formId} />
      </StyledContainer>
    );
  }
}

export default connect()(AuthorForm);
