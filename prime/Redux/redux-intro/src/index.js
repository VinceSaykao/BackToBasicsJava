import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';


const myArray = [1,2,3]

// reducer a piece of data!
const count = (state=0,action) => {
  console.log('Im a reducer!');

  if (action.type === 'INCREASE') {
    console.log('You clicked increase')
    // the next value of count will be 1 more than previous value
    return state + 1
  }
  else if (action.type === 'DECREASE') {
    console.log('You clicked Decrease')
  }
  return state - 1;
};

// second reducer 
const elementList = (state=[],action) => {
  if (action.type === 'ADD_ELEMENT') {
    console.log(`The element added was ${action.payload}`)
    // state.push(action.payload)
    // return state;
     return [...state,action.payload];
  }
 
  return state;
};



// store!
const storeInstance = createStore(
  combineReducers (
    {
      count,
      elementList
    }
  ),
  applyMiddleware(
    logger // tell redux we want to use new logger 
  )
);

// the provider lets redux and react talk to eachother

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}> 
    <App />

    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
