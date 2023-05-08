import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import projects from './projects';

function App() {
  return (
  <div>
      <Header />
      <Project projects={projects} />
      <Footer />
  </div>
  );
}

export default App;
