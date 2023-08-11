import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='bg-primaryColor px-8'>
      <ul className='m-0 flex h-20 list-none items-center justify-center gap-8  text-xl '>
        <li>
          <a href='#'>
            <Image
              src={'/logo-horizontal.png'}
              alt='FWDP logo'
              width={190}
              height={190}
            />
          </a>
        </li>
        <li className='ml-auto'>
          <a href='#' className='font-semibold tracking-wide text-midnightBlue'>
            TEAM
          </a>
        </li>
        <li>
          <a href='#' className='font-semibold tracking-wide text-midnightBlue'>
            ABOUT
          </a>
        </li>
        <li>
          <a href='#' className='font-semibold tracking-wide text-midnightBlue'>
            PROJECTS
          </a>
        </li>
        <li className='bg-shockingPink px-2 py-[0.45rem]'>
          <a href='#' className='text-xl font-normal tracking-wide text-white'>
            JOIN US
          </a>
        </li>
      </ul>
    </header>
  );
}
