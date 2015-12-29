import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/App';
import {CommentBoxContainer} from './components/example';
import {Provider} from 'react-redux';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    commentList: [ 
      {
        "id": 1,
        "author": "Batman",
        "text": "I am Batman."
      },
      {
        "id": 2,
        "author": "Aquaman",
        "text": "I am Aquaman."
      }
    ] // End commentList
  }   // End state
});

const routes = <Route component={App}>
  <Route path="/" component={CommentBoxContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
