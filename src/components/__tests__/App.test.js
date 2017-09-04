import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from '../App';
import reducers from '../../reducers';

describe('<App />', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>, div);
  });

  it('shallow renders without crashing', () => {
    shallow(<App />);
  });
});
