import MobileDetector from 'utility/MobileDetector';

const mobileUserAgentMock = ['BlackBerry', 'Android', 'Opera Mini', 'IEMobile'];

const mockUserAgent = (userAgent: string) => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: userAgent,
    configurable: true
  });
};

describe('MobileDetector.ts', () => {
  it('detects no mobile device', () => {
    mockUserAgent('Sorry but it\'s WEB');
    expect(!!MobileDetector.none()).toBe(true);
  });

  mobileUserAgentMock.forEach(el => {
    it(`detects any mobile device, if it\'s ${el}`, () => {
      mockUserAgent(el);
      expect(!!MobileDetector.none()).toBe(false);
    });
  });
});
