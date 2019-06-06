import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';
import {Moment} from 'moment';

export interface IFormValues {
  id: number;
  title: string;
  authors: IAuthor[];
  pages: number;
  publishing?: string;
  year?: number;
  publishingDate?: Moment;
  isbn?: string;
  bookCover?: IBookCover;
}
