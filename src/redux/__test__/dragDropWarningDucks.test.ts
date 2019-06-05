import reducer, {HIDE, hideWarning, SHOW, showWarning} from 'redux/dragDropWarningDucks';
import {AnyAction} from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('dragDropWarningDucks.ts', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {} as AnyAction)).toEqual(false);
    });

    it('should handle SHOW', () => {
      expect(reducer(undefined, {type: SHOW} as AnyAction)).toEqual(true);
    });

    it('should handle HIDE', () => {
      expect(reducer(undefined, {type: HIDE} as AnyAction)).toEqual(false);
    });

    it('handles showing warning ', () => {
      const store = mockStore();

      store.dispatch(showWarning());

      const actions = store.getActions();

      expect(actions[0]).toEqual({type: SHOW});
    });

    it('handles showing warning ', () => {
      const store = mockStore();

      store.dispatch(hideWarning());

      const actions = store.getActions();

      expect(actions[0]).toEqual({type: HIDE});
    });
  });
});
