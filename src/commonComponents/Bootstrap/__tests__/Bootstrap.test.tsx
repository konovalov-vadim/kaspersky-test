import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Bootstrap from '../Bootstrap';

describe('Bootstrap.tsx', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bootstrap />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
