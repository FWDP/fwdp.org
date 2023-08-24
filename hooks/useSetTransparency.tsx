'use client';

import { useEffect, useState } from 'react';

export default function useSetTransparency() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const toggleTransparency = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 500 ? setIsTransparent(false) : setIsTransparent(true);
    };

    window.addEventListener('scroll', toggleTransparency);

    return () => window.removeEventListener('scroll', toggleTransparency);
  }, []);

  return { isTransparent };
}
