import {PREFIX} from 'redux/constants';
import {Dispatch, Reducer} from 'redux';

export const SHOW = `${PREFIX}drag-n-drop-warning/SHOW`;
export const HIDE = `${PREFIX}drag-n-drop-warning/HIDE`;

const reducer: Reducer<boolean> = (state = false, action) => {
  switch (action.type) {
    case SHOW:
      return true;
    case HIDE:
      return false;
    default:
      return state;
  }
};

export const showWarning = () => (dispatch: Dispatch) => {
  dispatch({type: SHOW});
};
export const hideWarning = () => (dispatch: Dispatch) => {
  dispatch({type: HIDE});
};

export default reducer;
