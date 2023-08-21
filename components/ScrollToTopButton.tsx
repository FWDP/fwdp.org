'use client';

import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 400,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 cursor-pointer rounded-full bg-shockingPink p-2 text-white  ${
        isVisible ? 'opacity-100' : '-z-50 opacity-0'
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp size={24} />
    </div>
  );
};

export default ScrollToTopButton;
