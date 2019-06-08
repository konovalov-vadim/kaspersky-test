import * as React from 'react';
import {IBookCover} from 'models/IBookCover';
import {connect} from 'react-redux';
import {StyledContainer, StyledCoverContainer} from 'web/BookCoverForm/styled';
import {StyledCover} from 'web/BookItem/styled';
import {StyledCover as STC} from 'web/BookCoverForm/styled';
import IStore from 'models/IStore';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import Utility from 'utility/Utility';
import {addBookCover} from 'redux/bookCoversDucks';

interface IOwnProps {
  cover?: IBookCover;
  onSet: (cover: IBookCover) => void;
}

interface IConnectProps {
  bookCovers: IBookCover[];
  dispatch: ThunkDispatch<any, any, Action>;
}

class BookCoverForm extends React.PureComponent<IOwnProps & IConnectProps> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  private onInputClick = () => this.inputRef.current!.click();

  private onSet = (cover: IBookCover) => () => this.props.onSet(cover);

  private onInputChange = async () => {
    const {dispatch, onSet} = this.props;
    const file = this.inputRef.current!.files![0]!;
    const data = (await Utility.fileToBase64Converter(file)) as string;
    const newCover: IBookCover = {
      id: ~~(Math.random() * 10000),
      data
    };

    dispatch(addBookCover(newCover));
    onSet(newCover);
  };

  public render() {
    const {cover, bookCovers} = this.props;

    return (
      <>
        <StyledContainer className="d-flex">
          <StyledCoverContainer className="flex-shrink-0x">
            <StyledCover imageUrl={cover ? cover.data : '***'} />
          </StyledCoverContainer>
          <div className="d-flex flex-grow-1 flex-wrap overflow-auto">
            {bookCovers.map(el => (
              <STC key={el.id} imageUrl={el.data} selected={el.id === (cover && cover.id)} onClick={this.onSet(el)} />
            ))}
            <STC
              imageUrl="***"
              className="d-flex align-items-center justify-content-center"
              onClick={this.onInputClick}
            >
              Add
            </STC>
          </div>
        </StyledContainer>
        <input ref={this.inputRef} type="file" hidden={true} accept="image/*" onChange={this.onInputChange} />
      </>
    );
  }
}

const mapStateToProps = ({bookCovers}: IStore) => ({
  bookCovers
});

export default connect(mapStateToProps)(BookCoverForm);
