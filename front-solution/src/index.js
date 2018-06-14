import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './RootContainer';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // react-deftool

const rootReducer = combineReducers({
   // here will be reducers soon
}); 


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();