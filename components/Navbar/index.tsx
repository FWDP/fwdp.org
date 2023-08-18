'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

import LinkRoutes from './LinkRoutes';
import Link from 'next/link';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false),
    toggleMenuNav = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='sticky left-0 top-0 z-20 w-full shadow-md'>
      <div className='items-center justify-between bg-white px-8 py-4 md:flex'>
        {/* Logo Section */}
        <div className='flex cursor-pointer items-center gap-1 text-2xl font-bold'>
          <Link href='/'>
            <Image
              src={'/logo-horizontal.png'}
              alt='FWDP logo'
              width={190}
              height={190}
            />
          </Link>
        </div>

        {/* Menu Icon */}
        <div
          className='absolute right-8 top-6 cursor-pointer md:hidden'
          onClick={() => toggleMenuNav()}
        >
          {!toggleMenu ? (
            <RxHamburgerMenu size={28} />
          ) : (
            <IoCloseSharp size={28} />
          )}
        </div>

        {/* Routes */}
        <LinkRoutes toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
