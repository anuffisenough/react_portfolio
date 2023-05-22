import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from '../components/Footer'
import Header from '../components/Header';

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>'
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
