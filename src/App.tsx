import './App.css';
import QuestionDetail from './pages/QuestionDetailPage';
import QuestionPage from './pages/QuestionPage';
import HomePage from '../src/pages/HomePage';
import React from 'react';
import Article from './pages/Article';

function App() {
  return (
    <div>
      <QuestionPage/>
      <QuestionDetail/>
      <HomePage/>
      <Article/>
    </div>
  );
}

export default App;
