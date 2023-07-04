import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// import Project from './components/ProjectContainer';
import Project from './components/Project';
import PortfolioContainer from './components/ProjectContainer';

function App() {
  return (
  <div>
    <>
      <Header />
      <Navigation />
    </>
      <Project />
      <Footer />
  </div>
  );
}

export default App;
