import {AnyAction, applyMiddleware, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import IStore from 'models/IStore';
import reducers from 'redux/reducers';

const middlewares = [thunk as ThunkMiddleware<IStore, AnyAction>];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
