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
    <nav className='relative flex items-center bg-primaryColor max-md:py-5'>
      <div className='flex px-8 max-md:w-full'>
        <Link href='/' className='mr-auto '>
          <Image
            src={'/logo-horizontal.png'}
            alt='FWDP logo'
            width={190}
            height={190}
          />
        </Link>

        <div className='ml-auto flex cursor-pointer items-center  md:hidden'>
          {!toggleMenu ? (
            <RxHamburgerMenu size={32} onClick={() => toggleMenuNav()} />
          ) : (
            <IoCloseSharp size={40} onClick={() => toggleMenuNav()} />
          )}
        </div>
      </div>

      <LinkRoutes toggleMenu={toggleMenu} toggleMenuNav={toggleMenuNav} />
    </nav>
  );
}
