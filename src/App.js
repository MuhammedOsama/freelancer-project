import React from 'react';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import Company from './components/Company';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainCarousel />
      <Company />
    </div>
  );
}

export default App;
