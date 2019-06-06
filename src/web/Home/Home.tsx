import * as React from 'react';
import {connect} from 'react-redux';
import IStore from 'models/IStore';
import {IBook} from 'models/IBook';
import BookItem from 'web/BookItem/BookItem';
import SortTools from 'web/SortTools/SortTools';
import {SortType} from 'models/ILocalStorage';
import Utility from 'utility/Utility';
import {orderBy} from 'lodash';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {removeBook} from 'redux/booksDucks';
import {StyledButton, StyledContainer} from 'web/Home/styled';

interface IConnectProps {
  books: IBook[];
  dispatch: ThunkDispatch<any, any, Action>;
}

interface IState {
  titleSort: SortType;
  yearSort: SortType;
}

export type SortProps = keyof IState;

interface ISateExtended extends IState {
  lastSort: SortProps;
}

const initSort: SortProps = Utility.appLocalStorage.get('lastSort') as SortProps;

class Home extends React.PureComponent<IConnectProps, ISateExtended> {
  private getSortType = (type: keyof IState) => (type === 'titleSort' ? 'title' : 'year');

  private sortBooks = () =>
    orderBy(this.props.books, [this.getSortType(this.state.lastSort)], [this.state[this.state.lastSort]]);

  public state = {
    titleSort: Utility.appLocalStorage.get('titleSort') as SortType,
    yearSort: Utility.appLocalStorage.get('yearSort') as SortType,
    lastSort: initSort
  };

  private onEdit = (book: IBook) => null;
  private onRemove = (book: IBook) => this.props.dispatch(removeBook(book));

  private onChangeSort = (type: keyof IState) => {
    let sort: SortType;

    if (this.state.lastSort === type) {
      sort = this.state[type] === 'asc' ? 'desc' : 'asc';
    } else {
      sort = this.state[type];
    }

    this.setState(state => ({[type]: sort, lastSort: type} as Pick<ISateExtended, keyof ISateExtended>));
    Utility.appLocalStorage.set(type, sort);
    Utility.appLocalStorage.set('lastSort', type);
  };

  private onChangeTitleSort = () => this.onChangeSort('titleSort');
  private onChangeYearSort = () => this.onChangeSort('yearSort');

  public render() {
    const {titleSort, yearSort, lastSort} = this.state;

    return (
      <>
        <StyledContainer className="d-flex align-items-center">
          <StyledButton style={{marginRight: '30px'}} to="/book-add">
            Add book
          </StyledButton>
          <SortTools
            yearSort={yearSort}
            titleSort={titleSort}
            changeTitleSort={this.onChangeTitleSort}
            changeYearSort={this.onChangeYearSort}
            sortProp={lastSort}
          />
        </StyledContainer>
        <div className="d-flex align-content-stretch flex-wrap" style={{margin: '-15px -7.5px 0'}}>
          {this.sortBooks().map(el => (
            <BookItem key={el.id} book={el} onEdit={this.onEdit} onRemove={this.onRemove} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({books}: IStore) => ({
  books
});

export default connect(mapStateToProps)(Home);
