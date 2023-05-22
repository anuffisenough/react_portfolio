import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Projects from './projectlist';

function App() {
  return (
  <div>
    <>
      <Header />
      <Navigation />
    </>
      <Project projects={Projects} />
      <Footer />
  </div>
  );
}

export default App;
