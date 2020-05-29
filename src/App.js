import React from 'react';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import AsUsedBy from './components/AsUsedBy';
import NeedWorkDone from './components/NeedWorkDone';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainCarousel />
      <AsUsedBy />
      <NeedWorkDone />
    </div>
  );
}

export default App;
