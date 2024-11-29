import './App.css';
import QuestionDetail from './pages/QuestionDetailPage';
import QuestionPage from './pages/QuestionPage';
import HomePage from '../src/pages/HomePage';
import React from 'react';
import './App.css';
import Aboutus from './pages/Aboutus';
import Article from './pages/Article';
import SearchPage from './pages/search/SearchPage';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <HomePage/>
      <Article/>
      <Aboutus/>
      <QuestionPage/>
      <QuestionDetail/>
      <SearchPage />
      <Login/>
    </div>
  );
}

export default App;
