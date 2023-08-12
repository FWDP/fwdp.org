import Image from 'next/image';
import Link from 'next/link';
import LinkRoutes from './LinkRoutes';

export default function Navbar() {
  return (
    <nav className='bg-primaryColor px-8'>
      <ul className='m-0 flex h-20 list-none items-center justify-center gap-8 text-xl '>
        <Link href='/' className='mr-auto'>
          <Image
            src={'/logo-horizontal.png'}
            alt='FWDP logo'
            width={190}
            height={190}
          />
        </Link>
        <LinkRoutes />
      </ul>
    </nav>
  );
}
