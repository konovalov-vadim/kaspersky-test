import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'index.css';
import {BootstrapWithContext} from 'context/appContext';
import {Provider} from 'react-redux';
import store from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BootstrapWithContext />
  </Provider>,
  document.getElementById('root')
);
