// import Article from './components/article/Article';
// import Brand from './components/brand/Brand';
// import CTA from './components/cta/CTA';
// import Feature from './components/feature/Feature';
// import Navbar from './components/navbar/Navbar';

//            directly do
import { CTA, Brand, Navbar } from './components';

import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;