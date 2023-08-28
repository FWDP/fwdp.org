'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

import LinkRoutes from './LinkRoutes';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuNav = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="sticky left-0 top-0 z-30">
      <div className="relative flex w-full items-center justify-between gap-4 bg-primaryColor px-8 py-4">
        <Link href="/">
          <Image
            src="/assets/logo-horizontal.png"
            loading="lazy"
            alt="FWDP Logo"
            width={190}
            height={190}
          />
        </Link>

        <button type="button" className="md:hidden" onClick={() => toggleMenuNav()}>
          {!toggleMenu ? <RxHamburgerMenu size={28} /> : <IoCloseSharp size={28} />}
        </button>

        <LinkRoutes toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
