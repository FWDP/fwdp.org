import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavLink {
  name: string;
  routeName: string;
}

export default function LinkRoutes({ isMobile }: { isMobile: boolean }) {
  const router = useRouter(),
    pageLink = (route: NavLink['routeName']) => router.push(route);

  const navLinks: NavLink[] = [
    { name: 'TEAM', routeName: '/team' },
    { name: 'ABOUT', routeName: '/about' },
    { name: 'PROJECTS', routeName: '/projects' },
    { name: 'JOIN US', routeName: 'https://github.com/FWDP' },
  ];

  return (
    <ul
      className={`${
        isMobile ? 'flex-col gap-6 pb-4' : 'h-20 gap-8'
      } m-0 flex  list-none items-center justify-center text-xl`}
    >
      {!isMobile && (
        <Link href='/' className='mr-auto'>
          <Image
            src={'/logo-horizontal.png'}
            alt='FWDP logo'
            width={190}
            height={190}
          />
        </Link>
      )}

      {navLinks.map((link) => {
        const isJoinUs = link.name === 'JOIN US';
        const bgColor = isJoinUs ? 'bg-shockingPink px-2 py-[0.45rem]' : '';
        const textColorClass = isJoinUs
          ? 'text-xl font-normal tracking-wide text-white cursor-pointer'
          : 'font-semibold tracking-wide text-midnightBlue cursor-pointer';

        return (
          <li
            key={link.name}
            className={bgColor}
            onClick={() => pageLink(link.routeName)}
          >
            {isJoinUs ? (
              <a
                href={link.routeName}
                target='_blank'
                className={textColorClass}
              >
                {link.name}
              </a>
            ) : (
              <div className={textColorClass}>{link.name}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
