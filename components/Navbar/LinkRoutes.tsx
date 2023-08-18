import { useRouter } from 'next/navigation';

type NavLinkType = { name: string; routeName: string };
type ToggleMenuType = { toggleMenu: boolean };

export default function LinkRoutes({ toggleMenu }: ToggleMenuType) {
  const router = useRouter(),
    pageLink = (route: NavLinkType['routeName']) => router.push(route);

  const navLinks: NavLinkType[] = [
    { name: 'TEAM', routeName: '/team' },
    { name: 'ABOUT', routeName: '/about' },
    { name: 'PROJECTS', routeName: '/projects' },
    { name: 'JOIN US', routeName: 'https://github.com/FWDP' },
  ];

  return (
    <ul
      className={`absolute left-0 z-[-1] flex w-full flex-col items-center justify-center gap-4 transition-all duration-[400ms] ease-in-out max-md:bg-primaryColor max-md:p-2 max-md:pb-6 md:static md:z-auto md:w-auto md:flex-row md:gap-6 ${
        toggleMenu ? 'top-[74px]' : 'top-[-490px]'
      }`}
    >
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
