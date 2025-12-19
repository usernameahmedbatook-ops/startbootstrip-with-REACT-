import React, { useState } from 'react';

// Define the prop types
interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <button 
            onClick={() => handleNavClick('home')}
            className="logo-button"
          >
            <span className="logo-text"><img src="img/logo/logo.svg"  /></span>
            <span className="logo-dot">.</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
              <span className="link-underline"></span>
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services
              <span className="link-underline"></span>
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
              <span className="link-underline"></span>
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${activeSection === 'pricing' ? 'active' : ''}`}
              onClick={() => handleNavClick('pricing')}
            >
              Pricing
              <span className="link-underline"></span>
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
              <span className="link-underline"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;