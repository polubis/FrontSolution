import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './RootContainer';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';

import 'font-awesome/css/font-awesome.min.css';

import TestReducer from './store/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // react-devtool

const rootReducer = combineReducers({
  TestReducer: TestReducer
}); 


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();