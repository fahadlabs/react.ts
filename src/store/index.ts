import { connectRouter } from 'connected-react-router';
import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';

import app from './app'

const history = createBrowserHistory()

export default createStore(
  combineReducers({
    app,
    router: connectRouter(history)
  })
)
