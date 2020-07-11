import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {createStore} from "redux";


const intial = {
  totalOrder : 0
}
// Reducer
const rootReducer = (state = intial,action) => {
  if(action.type === "ADD_CHANGE") {
    return {
      ...state,
      totalOrder : state.totalOrder + 1
    }
  }
  if(action.type === "CHANGE_VALUE") {
    let totalOrder = 0;
    if(state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1
    }
    return {
      ...state,
      totalOrder : totalOrder
    }
  }
  return state;
}
//store
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
