import {Dispatch, Reducer} from 'redux';
import {PREFIX} from 'redux/constants';
import {IBook} from 'models/IBook';
import Utility from 'utility/Utility';

const ACTION_TYPE = 'books/';

export const ADD = `${PREFIX}${ACTION_TYPE}/ADD`;
export const REMOVE = `${PREFIX}${ACTION_TYPE}REMOVE`;
export const RESET = `${PREFIX}${ACTION_TYPE}RESET`;

const reducer: Reducer<IBook[], {payload: IBook; type: string}> = (
  state = Utility.appLocalStorage.get('books')! as IBook[],
  action
) => {
  switch (action.type) {
    case ADD:
      return [action.payload, ...state];
    case REMOVE:
      return state.filter(el => el.id !== action.payload.id);
    case RESET:
      return [];
    default:
      return state;
  }
};

export const addBook = (book: IBook) => (dispatch: Dispatch) => dispatch({type: ADD, payload: book});
export const removeBook = (book: IBook) => (dispatch: Dispatch) => dispatch({type: REMOVE, payload: book});
export const resetBooks = () => (dispatch: Dispatch) => dispatch({type: RESET});

export default reducer;
