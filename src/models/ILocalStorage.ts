import {IBook} from 'models/IBook';
import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';
import {SortProps} from 'web/Home/Home';

export type SortType = 'asc' | 'desc';

export interface ILocalStorage {
  books: IBook[];
  authors: IAuthor[];
  covers: IBookCover[];
  titleSort: SortType;
  yearSort: SortType;
  lastSort: SortProps;
}
