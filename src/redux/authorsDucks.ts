import {Dispatch, Reducer} from 'redux';
import {PREFIX} from 'redux/constants';
import Utility from 'utility/Utility';
import {IAuthor} from 'models/IAuthor';

const ACTION_TYPE = 'authors/';

export const ADD = `${PREFIX}${ACTION_TYPE}/ADD`;
export const REMOVE = `${PREFIX}${ACTION_TYPE}REMOVE`;
export const RESET = `${PREFIX}${ACTION_TYPE}RESET`;

const reducer: Reducer<IAuthor[], {payload: IAuthor; type: string}> = (
  state = Utility.appLocalStorage.get('authors')! as IAuthor[],
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

export const addAuthor = (author: IAuthor) => (dispatch: Dispatch) => dispatch({type: ADD, payload: author});
export const removeAuthor = (author: IAuthor) => (dispatch: Dispatch) => dispatch({type: REMOVE, payload: author});
export const resetAuthors = () => (dispatch: Dispatch) => dispatch({type: RESET});

export default reducer;
