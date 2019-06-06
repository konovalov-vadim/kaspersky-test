import * as React from 'react';
import {IBook} from 'models/IBook';
import {StyledButton, StyledContainer, StyledCover, StyledInternalContainer, StyledTable} from 'web/BookItem/styled';
import {connect} from 'react-redux';
import IStore from 'models/IStore';
import {IBookCover} from 'models/IBookCover';
import {IAuthor} from 'models/IAuthor';
import ColorPalette from 'constants/ColorPalette';
import Typography from 'constants/Typography';

interface IConnectProps {
  bookCovers: IBookCover[];
  authors: IAuthor[];
}

interface IOwnProps {
  book: IBook;
  onEdit: (book: IBook) => void;
  onRemove: (book: IBook) => void;
}

const BookItem = ({book, bookCovers, authors, onRemove, onEdit}: IOwnProps & IConnectProps) => {
  const tableItems: Array<{title: string; show: boolean; element: any}> = [
    {title: 'Title', show: true, element: book.title},
    {
      title: `Author${book.authorsId.length > 1 ? 's' : ''}`,
      show: true,
      element: authors
        .filter(el => book.authorsId.includes(el.id))
        .map(el => <div key={el.id}>{el.name + ' ' + el.surname}</div>)
    },
    {title: 'Pages', show: true, element: book.pages},
    {title: 'Publishing house', show: !!book.publishing, element: book.publishing},
    {title: 'Year', show: !!book.year, element: book.year},
    {title: 'Release date', show: !!book.publishingDate, element: book.publishingDate},
    {title: 'ISBN', show: !!book.isbn, element: book.isbn}
  ];

  const onEditClick = () => onEdit(book);
  const onRemoveClick = () => onRemove(book);

  return (
    <StyledContainer className="d-flex flex-column">
      <StyledCover
        className="d-flex align-items-center justify-content-center flex-shrink-0"
        imageUrl={book.bookCoverId ? bookCovers.find(el => el.id === book.bookCoverId)!.data : ''}
      >
        {!book.bookCoverId && (
          <strong style={{color: ColorPalette.gray4, fontSize: Typography.size.large}}>No cover</strong>
        )}
      </StyledCover>
      <StyledInternalContainer className="flex-grow-1">
        <StyledTable className="w-100">
          <tbody>
            {tableItems.map(
              el =>
                el.show && (
                  <tr key={el.title}>
                    <td>
                      <strong>{el.title}</strong>
                    </td>
                    <td className="text-right">{el.element}</td>
                  </tr>
                )
            )}
          </tbody>
        </StyledTable>
      </StyledInternalContainer>
      <StyledInternalContainer className="d-flex justify-content-between align-items-center">
        <StyledButton onClick={onEditClick}>Edit</StyledButton>
        <StyledButton onClick={onRemoveClick}>Remove</StyledButton>
      </StyledInternalContainer>
    </StyledContainer>
  );
};

const mapStateToProps = ({bookCovers, authors}: IStore) => ({
  bookCovers,
  authors
});

export default connect(mapStateToProps)(BookItem);
