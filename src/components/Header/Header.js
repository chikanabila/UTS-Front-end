import React, { useState, useEffect } from 'react';

function Header(props) {
  const [isNavOpen, setNavOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State untuk dark mode

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  // Efek untuk mengubah tema saat state dark mode berubah
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk mengubah state dark mode saat tombol dark mode diklik
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
      <a href="/" className="nav__logo">
        <span className="logo-text">{props.logoTulisan}</span>
      </a>
        <div className={`nav__menu ${isNavOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#discover" className="nav__link">
                Discover
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link">
                Places
              </a>
            </li>
          </ul>

          {/* Tombol dark mode */}
          <div className="nav__dark" onClick={toggleDarkMode}>
            <span className="change-theme-name">Dark mode</span>
            <i className={`ri-moon-line change-theme ${isDarkMode ? 'dark' : ''}`} id="theme-button"></i>
          </div>

          <i className="ri-close-line nav__close" id="nav-close" onClick={closeNav}></i>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
