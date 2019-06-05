import {IBook} from 'models/IBook';
import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';

export interface ILocalStorage {
  books: IBook[];
  authors: IAuthor[];
  covers: IBookCover[];
}
