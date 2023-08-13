'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import LinkRoutes from './LinkRoutes';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false),
    toggleMenuNav = () => setToggleMenu(!toggleMenu);

  const [screenWidth, setScreenWidth] = useState(0),
    isMobile = screenWidth <= 768 && screenWidth !== 0;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  return (
    <nav className='items-center bg-primaryColor px-8'>
      {!isMobile && <LinkRoutes isMobile={isMobile} />}

      {isMobile && (
        <>
          <div className='flex items-center'>
            <Image
              src={'/fwdpIcon.png'}
              alt='FWDP-logo'
              width={80}
              height={80}
              className='mr-auto'
            />

            {!toggleMenu ? (
              <RxHamburgerMenu
                size={32}
                className='cursor-pointer'
                onClick={() => toggleMenuNav()}
              />
            ) : (
              <IoCloseSharp
                size={40}
                className='cursor-pointer'
                onClick={() => toggleMenuNav()}
              />
            )}
          </div>

          {toggleMenu && <LinkRoutes isMobile={isMobile} />}
        </>
      )}
    </nav>
  );
}
