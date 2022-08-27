import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom'
import {Route , Switch} from 'react-router-dom';
import Search from './components/Search';
import Title from './components/Title';

function App() {
  return (
    <>
    <Title />
    <Search />
    <Category />
    <Pages />
    </>
  );
}

export default App;
