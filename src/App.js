import React from 'react';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import AsUsedBy from './components/AsUsedBy';
import NeedWorkDone from './components/NeedWorkDone';
import GreatAboutIt from './components/GreatAboutIt';
import Favorite from './components/Favorite';
import Categories from './components/Categories';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainCarousel />
      <AsUsedBy />
      <NeedWorkDone />
      <GreatAboutIt />
      <Favorite />
      <Categories />
    </div>
  );
}

export default App;
