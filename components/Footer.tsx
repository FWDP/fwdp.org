import { IoLogoGithub } from 'react-icons/io5';
import { TbBrandFacebookFilled } from 'react-icons/tb';
import { PiDiscordLogoFill, PiLinkedinLogoFill, PiYoutubeLogoFill } from 'react-icons/pi';
import socialLink from '../constants/socialLinks';

const Icons = [
  <IoLogoGithub key={0} />,
  <PiDiscordLogoFill key={1} />,
  <PiLinkedinLogoFill key={2} />,
  <TbBrandFacebookFilled key={3} />,
  <PiYoutubeLogoFill key={4} />,
];

export default function Footer() {
  return (
    <footer className="flex min-h-[12.5rem] w-full flex-col items-center gap-2 bg-royalBlue px-4 py-6 text-white">
      <span>SOCIALS</span>
      <div className="my-auto flex flex-wrap justify-center gap-2">
        {socialLink.map((link, index) => (
          <button
            type="button"
            key={link.label}
            className="flex items-center justify-center gap-1 border border-white px-2 py-1 font-semibold uppercase tracking-wider"
          >
            {Icons[index]} {link.name}
          </button>
        ))}
      </div>

      <div className="mx-12 my-2 mt-auto h-1 w-full border-t-2 border-[#fff]" />
      <p className="text-center tracking-wide">
        Copyright <strong>&copy;</strong> 2023 Filipino Web Development Peers. All Rights Reserved
      </p>
    </footer>
  );
}
