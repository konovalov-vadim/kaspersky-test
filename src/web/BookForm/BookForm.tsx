import * as React from 'react';
import {Field, Form, FormRenderProps} from 'react-final-form';
import {FormApi} from 'final-form';
import Label from 'commonComponents/Form/Label';
import Input from 'commonComponents/Form/Input';
import fieldValidation from 'commonComponents/Form/fieldValidation';
import PrimaryButton from 'commonComponents/Form/PrimaryButton';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import IStore from 'models/IStore';
import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';
import Select from 'commonComponents/Form/Select';
import AuthorForm from 'web/AuthorForm/AuthorForm';
import {StyledButton} from 'web/BookItem/styled';
import {IFormValues} from 'models/IFormValues';
import DatePicker from 'commonComponents/Form/DatePicker';
import {transformToApi} from 'utility/dataTransformer';
import {IBook} from 'models/IBook';
import BookCoverForm from 'web/BookCoverForm/BookCoverForm';

interface IConnectProps {
  authors: IAuthor[];
  bookCovers: IBookCover[];
  dispatch: ThunkDispatch<any, any, Action>;
}

interface IOwnProps {
  onSubmit: (book: IBook) => void;
  initialData?: IFormValues;
}

interface IState {
  showAuthorForm: boolean;
}

const {
  required,
  composeValidators,
  validateISBN,
  validateLength,
  validatePages,
  validateYear,
  validateReleaseDate
} = fieldValidation;

const getOptionLabel = (value: IAuthor) => `${value.name} ${value.surname}`;
const getOptionValue = (value: IAuthor) => value.id;

const formId = 'BookForm';

class BookForm extends React.PureComponent<IConnectProps & IOwnProps, IState> {
  public state = {
    showAuthorForm: false
  };

  private showAuthorForm = () => this.setState({showAuthorForm: true});
  private hideAuthorForm = () => this.setState({showAuthorForm: false});

  private onNewAuthorAdd = (form: FormApi, values: IFormValues) => (a: IAuthor) => {
    form.change('authors', [a, ...(values.authors || [])]);
  };

  private onNewCoverSet = (form: FormApi, values: IFormValues) => (c: IBookCover) => {
    form.change('bookCover', c);
  };

  private renderForm = ({handleSubmit, pristine, invalid, form, values}: FormRenderProps) => (
    <form onSubmit={handleSubmit} autoComplete="off" style={{width: '600px'}} id={formId}>
      <div className="row">
        <div className="col-12">
          <Label>Title</Label>
          <Field
            name="title"
            component={Input}
            placeholder="Type title here"
            validate={composeValidators(required, validateLength(0, 30))}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label className="d-flex justify-content-between">
            Authors <StyledButton onClick={this.showAuthorForm}>Add new</StyledButton>
          </Label>
          {this.state.showAuthorForm && (
            <AuthorForm onHide={this.hideAuthorForm} onAdd={this.onNewAuthorAdd(form, values as IFormValues)} />
          )}
          <Field
            name="authors"
            component={Select}
            placeholder="Select author"
            validate={required}
            options={this.props.authors}
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            isMulti={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label>Pages</Label>
          <Field name="pages" component={Input} type="number" validate={composeValidators(required, validatePages())} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label>ISBN</Label>
          <Field name="isbn" component={Input} placeholder="Type code here" validate={validateISBN} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label>Release date</Label>
          <Field name="publishingDate" component={DatePicker} validate={validateReleaseDate} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label>Publishing house</Label>
          <Field name="publishing" component={Input} validate={validateLength(0, 30)} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label>Year</Label>
          <Field name="year" component={Input} type="number" validate={validateYear()} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Label>Cover</Label>
          <BookCoverForm
            cover={(values as IFormValues).bookCover}
            onSet={this.onNewCoverSet(form, values as IFormValues)}
          />
        </div>
      </div>
      <Field name="bookCover" render={() => null}/>
      <div className="row">
        <div className="col-12">
          <PrimaryButton disabled={invalid || pristine} form={formId}>
            Save
          </PrimaryButton>
        </div>
      </div>
    </form>
  );

  private onSubmit = async (data: any, form: FormApi) => {
    const {onSubmit} = this.props;

    onSubmit(transformToApi(data));
    form.reset();
  };

  public render() {
    return <Form onSubmit={this.onSubmit} render={this.renderForm} initialValues={this.props.initialData} />;
  }
}

const mapStateToProps = ({authors, bookCovers}: IStore) => ({
  authors,
  bookCovers
});

export default connect(mapStateToProps)(BookForm);
