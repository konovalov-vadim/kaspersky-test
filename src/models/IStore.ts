import {IAttachedFile} from 'models/IAttachedFile';
import {IBook} from 'models/IBook';
import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';

export default interface IStore {
  files: IAttachedFile[];
  totalSize: number;
  showDragDropWarning: boolean;
  books: IBook[];
  authors: IAuthor[];
  bookCovers: IBookCover[];
}
