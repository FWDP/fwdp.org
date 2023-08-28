import { useRouter } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: 'TEAM', routeName: '/team' },
  { name: 'ABOUT', routeName: '/about' },
  { name: 'PROJECTS', routeName: '/projects' },
  { name: 'JOIN US', routeName: 'https://github.com/FWDP' },
];

type NavLinkType = (typeof navLinks)[number]['routeName'];
type ToggleMenuType = { toggleMenu: boolean };

export default function LinkRoutes({ toggleMenu }: ToggleMenuType) {
  const router = useRouter();
  const pageLink = (route: NavLinkType) => router.push(route);

  return (
    <section
      className={`absolute bottom-0 left-0 flex flex-col items-center gap-6 bg-primaryColor max-md:-z-10 max-md:w-full max-md:py-4 md:static md:h-full md:flex-row ${
        toggleMenu
          ? 'transition-all duration-[400ms] ease-in-out max-md:translate-y-[99%] max-md:shadow-md'
          : 'transition-all duration-[400ms] ease-in-out max-md:translate-y-[-100%]'
      } `}
    >
      {navLinks.slice(0, -1).map((link) => {
        return (
          <Link
            key={link.name}
            onClick={() => pageLink(link.routeName)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') pageLink(link.routeName);
            }}
            role="button"
            tabIndex={0}
            href={link.routeName}
            className="group relative cursor-pointer p-2 font-semibold tracking-wide text-midnightBlue transition-all duration-100 ease-in-out hover:text-shockingPink"
            rel="noopener noreferrer"
          >
            {link.name}
            <div className="bg-blue-500 absolute inset-x-0 bottom-0 h-1 scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100 group-hover:bg-shockingPink"></div>
          </Link>
        );
      })}
      <a
        target="_blank"
        href={navLinks[navLinks.length - 1].routeName}
        className="cursor-pointer border-2 border-shockingPink bg-shockingPink p-[0.4rem] text-xl font-black tracking-wide text-white transition-all duration-100 hover:bg-primaryColor hover:text-shockingPink"
      >
        JOIN US
      </a>
    </section>
  );
}
