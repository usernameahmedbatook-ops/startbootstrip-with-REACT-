// ScrollToTop.js with Font Awesome
import React, { useState, useEffect } from 'react';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;