import * as React from 'react';
import {connect} from 'react-redux';
import IStore from 'models/IStore';
import {IBook} from 'models/IBook';
import BookItem from 'web/BookItem/BookItem';

interface IConnectProps {
  books: IBook[];
}

class Home extends React.PureComponent<IConnectProps> {
  private onEdit = (book: IBook) => null;
  private onRemove = (book: IBook) => null;

  public render() {
    const {books} = this.props;

    return (
      <div className="d-flex align-content-stretch flex-wrap">
        {books.map(el => (
          <BookItem key={el.id} book={el} onEdit={this.onEdit} onRemove={this.onRemove} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({books}: IStore) => ({
  books
});

export default connect(mapStateToProps)(Home);
