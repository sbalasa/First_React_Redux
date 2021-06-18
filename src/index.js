import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Comment from "./components/Comment";
import CheckBox from "./components/CheckBox";
import Movie from "./components/Movie";
import reportWebVitals from './reportWebVitals';
import Board from "./components/Board";
import { createStore } from 'redux';
import {Provider} from "react-redux";
import allReducers from "./reducers";
import User from "./components/User";

const store = createStore(allReducers);
console.log(store);

ReactDOM.render(
    <React.StrictMode>
        <Movie title="Titanic" genre="romance" />
        <Comment>This is my First React.js repo</Comment>
        <CheckBox/>
        <Board />
        <Provider store={store}>
            <User />
        </Provider>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
