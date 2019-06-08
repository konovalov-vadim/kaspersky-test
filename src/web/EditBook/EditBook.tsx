import * as React from 'react';
import BookForm from 'web/BookForm/BookForm';
import {IBook} from 'models/IBook';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {updateBook} from 'redux/booksDucks';
import IStore from 'models/IStore';
import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';
import {IFormValues} from 'models/IFormValues';
import {RouteComponentProps} from 'react-router';
import {transformToForm} from 'utility/dataTransformer';

interface IConnectProps {
  books: IBook[];
  authors: IAuthor[];
  bookCovers: IBookCover[];
  dispatch: ThunkDispatch<any, any, Action>;
}

interface IParams {
  id: string;
}

class EditBook extends React.PureComponent<IConnectProps & RouteComponentProps<IParams>> {
  private onSave = (book: IBook) => this.props.dispatch(updateBook(book));

  private getInitialData = () => {
    const {books, authors, bookCovers, match} = this.props;

    return transformToForm(books.find(el => el.id === +match.params.id)!, authors, bookCovers) as IFormValues;
  };

  public render() {
    return <BookForm onSubmit={this.onSave} initialData={this.getInitialData()} />;
  }
}

const mapStateToProps = ({books, authors, bookCovers}: IStore) => ({
  books,
  authors,
  bookCovers
});

export default connect(mapStateToProps)(EditBook);
