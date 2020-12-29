import React from 'react';
import {render} from 'react-dom';

import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import reportWebVitals from './reportWebVitals';
import clubsReducer from './reducers/club/App';
import Header2 from './components/common/Header2';
import Table from './containers/club/Table';
import Regist from './containers/club/Regist';


// const books = "JavaBook";

const store = createStore(clubsReducer);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Header2}/>
      <Route exact path="/clubs" component={Table}/>
      <Route exact path="/clubs/new" component={Regist}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
