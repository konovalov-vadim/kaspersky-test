import {Dispatch, Reducer} from 'redux';
import {PREFIX} from 'redux/constants';
import Utility from 'utility/Utility';
import {IBookCover} from 'models/IBookCover';

const ACTION_TYPE = 'bookCovers/';

export const ADD = `${PREFIX}${ACTION_TYPE}/ADD`;
export const REMOVE = `${PREFIX}${ACTION_TYPE}REMOVE`;
export const RESET = `${PREFIX}${ACTION_TYPE}RESET`;

const reducer: Reducer<IBookCover[], {payload: IBookCover; type: string}> = (
  state = Utility.appLocalStorage.get('covers')! as IBookCover[],
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

export const addBookCover = (bookCover: IBookCover) => (dispatch: Dispatch) =>
  dispatch({type: ADD, payload: bookCover});
export const removeBookCover = (bookCover: IBookCover) => (dispatch: Dispatch) =>
  dispatch({type: REMOVE, payload: bookCover});
export const resetBookCovers = () => (dispatch: Dispatch) => dispatch({type: RESET});

export default reducer;
