import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='bg-midnightBlue px-8'>
      <ul className='m-0 flex h-20 list-none items-center justify-center gap-8  text-xl text-white'>
        <li>
          <a href='#'>
            <Image
              src={'/logo-horizontal.png'}
              alt='FWDP logo'
              width={160}
              height={160}
            />
          </a>
        </li>
        <li className='ml-auto'>
          <a href='#' className='tracking-widest'>
            TEAM
          </a>
        </li>
        <li>
          <a href='#' className='tracking-widest'>
            ABOUT
          </a>
        </li>
        <li>
          <a href='#' className='tracking-widest'>
            PROJECTS
          </a>
        </li>
        <li>
          <a href='#' className='tracking-wide'>
            JOIN US
          </a>
        </li>
      </ul>
    </header>
  );
}
