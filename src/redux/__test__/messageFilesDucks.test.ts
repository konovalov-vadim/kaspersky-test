import {AnyAction} from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {ADD, addFiles, REMOVE, removeFile, RESET, resetFiles} from 'redux/messageFilesDucks';
import {IAttachedFile} from 'models/IAttachedFile';
import {ADD as SIZE_ADD, REMOVE as SIZE_REMOVE, RESET as SIZE_RESET} from 'redux/totalSizeDucks';

jest.mock('utility/withContext', () => ({}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockFile = {id: 41, file: {size: 5343, name: 'test.png'} as File} as IAttachedFile;

describe('messageFilesDucks.ts', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {} as AnyAction)).toEqual([]);
    });

    it('should handle ADD', () => {
      expect(reducer([], {type: ADD, payload: [mockFile]} as AnyAction)).toEqual([mockFile]);
    });

    it('should handle REMOVE', () => {
      expect(reducer([mockFile], {type: REMOVE, payload: mockFile} as AnyAction)).toEqual([]);
    });

    it('should handle RESET', () => {
      expect(reducer([mockFile, mockFile, mockFile], {type: RESET} as AnyAction)).toEqual([]);
    });

    it('handles adding files', () => {
      let store = mockStore({totalSize: 0});

      store.dispatch(addFiles([mockFile]));

      const actions = store.getActions();

      expect(actions[0].type).toEqual(ADD);
      expect(actions[1].type).toEqual(SIZE_ADD);

      store = mockStore({totalSize: 20});

      store.dispatch(addFiles([mockFile]));

      expect(store.getActions().length).toEqual(0);


    });

    it('handles removing file', () => {
      const store = mockStore({totalSize: 5});

      store.dispatch(removeFile(mockFile));

      const actions = store.getActions();

      expect(actions[0].type).toEqual(REMOVE);
      expect(actions[1].type).toEqual(SIZE_REMOVE);
    });

    it('handles reseting files', () => {
      const store = mockStore({totalSize: 5});

      store.dispatch(resetFiles());

      const actions = store.getActions();

      expect(actions[0].type).toEqual(RESET);
      expect(actions[1].type).toEqual(SIZE_RESET);
    });
  });
});
