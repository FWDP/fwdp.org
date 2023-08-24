'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

import LinkRoutes from './LinkRoutes';
import useSetTransparency from '@/hooks/useSetTransparency';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false),
    toggleMenuNav = () => setToggleMenu(!toggleMenu);

  const { isTransparent } = useSetTransparency();

  return (
    <nav
      className={`sticky left-0 top-0 z-20 w-full transition-all duration-200 ease-in-out ${
        !isTransparent && 'shadow-md'
      }`}
    >
      <div
        className={`items-center justify-between px-8 py-4 transition-all duration-200 ease-in-out md:flex ${
          isTransparent ? 'bg-primaryColor' : 'bg-white'
        }`}
      >
        {/* Logo Section */}
        <div className='flex items-center gap-1 text-2xl font-bold'>
          <Link href='/'>
            <Image
              src={'/assets/logo-horizontal.png'}
              loading='lazy'
              alt='FWDP Logo'
              width={190}
              height={190}
            />
          </Link>
        </div>

        {/* Menu Icon */}
        <button
          className='absolute right-8 top-6 cursor-pointer md:hidden'
          onClick={() => toggleMenuNav()}
        >
          {!toggleMenu ? (
            <RxHamburgerMenu size={28} />
          ) : (
            <IoCloseSharp size={28} />
          )}
        </button>

        {/* Routes */}
        <LinkRoutes toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
