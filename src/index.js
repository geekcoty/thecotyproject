import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import {BrowserRouter as Router,Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/blog" component={Blog} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
