import React from 'react';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import AsUsedBy from './components/AsUsedBy';
import NeedWorkDone from './components/NeedWorkDone';
import GreatAboutIt from './components/GreatAboutIt';
import Favorite from './components/Favorite';
import Categories from './components/Categories';
import API from './components/API';
import JobCategories from './components/JobCategories';
import FooterSection from './components/FooterSection';

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
      <API />
      <JobCategories />
      <FooterSection />
    </div>
  );
}

export default App;