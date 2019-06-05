import Utility from 'utility/Utility';

jest.mock('utility/withContext', () => ({}));

const mock = [[0, '00'], [1, 'ff']];

const fileMocks = [{size: 2 * 1024 * 1024, name: 'test.js'}, {size: 27844, name: 'test.png'}] as File[];

describe('Utility.ts', () => {
  mock.forEach(el => {
    it('coverts decimal to correct hex', () => {
      expect(Utility.convertOpacityToCssHex(el[0] as number)).toBe(el[1]);
    });
  });

  it('returns correct search query', () => {
    expect(Utility.objectToSearchQuery({test: '123'})).toBe('?test=123');
  });

  it('returns correct file information', () => {
    expect(Utility.fileInfo(fileMocks[0]).sizeMB).toBe(2);
    expect(Utility.fileInfo(fileMocks[0]).fileName).toBe('test');
    expect(Utility.fileInfo(fileMocks[0]).fileExtension).toBe('js');
  });

  it('returns correctly sorted array of files', () => {
    expect(Utility.fileSortAndConvert(fileMocks).length).toBe(1);
  });
});
