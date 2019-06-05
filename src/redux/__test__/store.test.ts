import store from 'redux/store';

jest.mock('utility/withContext', () => ({}));

describe('store.ts', () => {
  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
