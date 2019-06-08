import {IFormValues} from 'models/IFormValues';
import {IBook} from 'models/IBook';
import Time from 'constants/Time';
import {IAuthor} from 'models/IAuthor';
import {IBookCover} from 'models/IBookCover';
import Moment from 'moment';

export const transformToApi = (data: IFormValues): IBook => ({
  id: data.id || ~~Math.random() * 10000,
  title: data.title,
  authorsId: data.authors.map(el => el.id),
  pages: data.pages,
  [data.publishing ? 'publishing' : '']: data.publishing,
  [data.isbn ? 'isbn' : '']: data.isbn,
  [data.year ? 'year' : '']: data.year,
  [data.bookCover ? 'bookCoverId' : '']: data.bookCover && data.bookCover.id,
  [data.publishingDate ? 'publishingDate' : '']:
    data.publishingDate && data.publishingDate.format(Time.displayDateFormat)
});

export const transformToForm = (data: IBook, authors: IAuthor[] = [], covers: IBookCover[] = []): IFormValues => ({
  id: data.id,
  title: data.title,
  pages: data.pages,
  authors: authors.filter(el => data.authorsId.includes(el.id)),
  [data.publishing ? 'publishing' : '']: data.publishing,
  [data.isbn ? 'isbn' : '']: data.isbn,
  [data.year ? 'year' : '']: data.year,
  [data.bookCoverId ? 'bookCover' : '']: covers.find(el => data.bookCoverId === el.id),
  [data.publishingDate ? 'publishingDate' : '']: data.publishingDate
    ? Moment(data.publishingDate, Time.displayDateFormat)
    : undefined
});
