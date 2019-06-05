import {combineReducers} from 'redux';
import messageFilesReducer from 'redux/messageFilesDucks';
import dragDropWarningReducer from 'redux/dragDropWarningDucks';
import booksReducer from 'redux/booksDucks';
import bookCoversReducer from 'redux/bookCoversDucks';
import authorsReducer from 'redux/authorsDucks';
import Utility from 'utility/Utility';

Utility.appLocalStorage.initStorage();

export default combineReducers({
  files: messageFilesReducer,
  showDragDropWarning: dragDropWarningReducer,
  books: booksReducer,
  bookCovers: bookCoversReducer,
  authors: authorsReducer
});
