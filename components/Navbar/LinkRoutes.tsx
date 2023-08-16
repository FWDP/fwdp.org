import { useRouter } from 'next/navigation';

type NavLink = { name: string; routeName: string };

export default function LinkRoutes({
  toggleMenu,
  toggleMenuNav,
}: {
  toggleMenu: boolean;
  toggleMenuNav: () => void;
}) {
  return (
    <>
      {toggleMenu && (
        <div className='absolute top-20 z-50 h-52 w-full bg-primaryColor md:hidden'>
          <ul className='flex flex-col items-center justify-center gap-3 py-4 text-xl'>
            <NavRoutes toggleMenuNav={toggleMenuNav} />
          </ul>
        </div>
      )}

      <ul className='ml-auto flex h-20 list-none items-center justify-center  gap-8 pr-8 text-xl max-md:hidden'>
        <NavRoutes toggleMenuNav={toggleMenuNav} />
      </ul>
    </>
  );
}

function NavRoutes({ toggleMenuNav }: { toggleMenuNav: () => void }) {
  const router = useRouter(),
    pageLink = (route: NavLink['routeName']) => router.push(route);

  const navLinks: NavLink[] = [
    { name: 'TEAM', routeName: '/team' },
    { name: 'ABOUT', routeName: '/about' },
    { name: 'PROJECTS', routeName: '/projects' },
    { name: 'JOIN US', routeName: 'https://github.com/FWDP' },
  ];

  return (
    <>
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
                onClick={() => toggleMenuNav()}
              >
                {link.name}
              </a>
            ) : (
              <div className={textColorClass}>{link.name}</div>
            )}
          </li>
        );
      })}
    </>
  );
}
