import {PREFIX} from 'redux/constants';
import {Dispatch, Reducer} from 'redux';
import {IAttachedFile} from 'models/IAttachedFile';
import IStore from 'models/IStore';
import {MAX_SIZE_MB} from 'constants/common';

export const ADD = `${PREFIX}message-files/ADD`;
export const REMOVE = `${PREFIX}message-files/REMOVE`;
export const RESET = `${PREFIX}message-files/RESET`;

const reducer: Reducer<IAttachedFile[]> = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, ...action.payload];
    case REMOVE:
      return state.filter(el => el.id !== action.payload.id);
    case RESET:
      return [];
    default:
      return state;
  }
};

export const addFiles = (files: IAttachedFile[]) => (dispatch: Dispatch, getState: () => IStore) => {
  const filesTotalSize = files.reduce((a: number, v: IAttachedFile) => a + v.file.size, 0) / 1024 / 1024;
  const {totalSize} = getState();
  const condition = totalSize + filesTotalSize < MAX_SIZE_MB;

  if (totalSize + filesTotalSize < MAX_SIZE_MB) {
    dispatch({type: ADD, payload: files});
  }

  return condition;
};

export const removeFile = (file: IAttachedFile) => (dispatch: Dispatch) => {
  dispatch({type: REMOVE, payload: file});
};

export const resetFiles = () => (dispatch: Dispatch) => {
  dispatch({type: RESET});
};

export default reducer;
