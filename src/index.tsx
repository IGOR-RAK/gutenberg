import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router 
} from "react-router-dom";
import './styles/index.scss';
import App from './App';
import booksStore from './store/books'

interface State {
  books: booksStore}

export const books = new booksStore();

export const Context = createContext<State>({
  books
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{books}}>
  <Router>
      <App />
  </Router>
</Context.Provider>,
);


