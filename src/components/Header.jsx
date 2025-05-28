import React from 'react';
import '../styles/Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <>
      <ThemeToggle />
      <header className="main-header">
        <div className="header-content">
          <h1 className="main-title">Jeffery Tolmie</h1>
          <h2 className="subtitle">AUT Student Studying Computer Science</h2>
          <h2 className="subtitle">Major in Software Development | Minor in Arificial Intelligence</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
