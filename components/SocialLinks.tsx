import { IoLogoGithub } from 'react-icons/io5';
import { TbBrandFacebookFilled } from 'react-icons/tb';
import {
  PiDiscordLogoFill,
  PiLinkedinLogoFill,
  PiYoutubeLogoFill,
} from 'react-icons/pi';

const socialLink = [
  { link: 'https://github.com/FWDP', icon: <IoLogoGithub size={40} /> },
  {
    link: 'https://discord.com/servers/filipino-web-development-peers-996276138588524624',
    icon: <PiDiscordLogoFill size={40} />,
  },
  {
    link: 'https://www.linkedin.com/company/fwdp',
    icon: <PiLinkedinLogoFill size={40} />,
  },
  {
    link: 'https://www.facebook.com/fwdpeers',
    icon: <TbBrandFacebookFilled size={40} />,
  },
  {
    link: 'https://www.youtube.com/@filipinowebdevelopmentpeers',
    icon: <PiYoutubeLogoFill size={40} />,
  },
];

export default function SocialLinks() {
  return (
    <div className='flex gap-2'>
      {socialLink.map((social) => {
        return (
          <a key={social.link} href={social.link} target='_blank'>
            {social.icon}
          </a>
        );
      })}
    </div>
  );
}
