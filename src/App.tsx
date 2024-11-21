import './App.css';
import QuestionDetail from './pages/QuestionDetailPage';
import QuestionPage from './pages/QuestionPage';
import HomePage from '../src/pages/HomePage';
import React from 'react';

function App() {
  return (
    <div>
      <QuestionPage/>
      <QuestionDetail/>
      <HomePage/>
    </div>
  );
}

export default App;
