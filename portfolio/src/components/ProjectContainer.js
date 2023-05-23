import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectList from './ProjectList';
import Footer from '../components/Footer'
import Header from '../components/Header';

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
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
      {renderPage()}
      <Footer />
    </div>
  );
}
