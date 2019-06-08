import * as React from 'react';
import BookForm from 'web/BookForm/BookForm';
import {IBook} from 'models/IBook';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {addBook} from 'redux/booksDucks';

interface IConnectProps {
  dispatch: ThunkDispatch<any, any, Action>;
}

class AddBook extends React.PureComponent<IConnectProps> {
  private onSave = (book: IBook) => this.props.dispatch(addBook(book));

  public render() {
    return <BookForm onSubmit={this.onSave} />;
  }
}

export default connect()(AddBook);
