'use client';

import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { AiOutlineArrowUp } from 'react-icons/ai';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 400,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <button
      onClick={() => scrollToTop}
      type="button"
      className={`fixed bottom-10 right-10 z-50 cursor-pointer rounded-full bg-shockingPink p-2 text-white ${
        isVisible ? 'opacity-100' : '-z-50 opacity-0'
      } transition-opacity duration-300`}
    >
      <AiOutlineArrowUp size={24} />
    </button>
  );
}

export default ScrollToTopButton;
