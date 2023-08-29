import { IoLogoGithub } from 'react-icons/io5';
import { TbBrandFacebookFilled } from 'react-icons/tb';
import { PiDiscordLogoFill, PiLinkedinLogoFill, PiYoutubeLogoFill } from 'react-icons/pi';

const socialLink = [
  {
    name: 'github',
    link: 'https://github.com/FWDP',
    label: "link to fwdp's github page",
    icon: <IoLogoGithub size={40} />,
  },
  {
    name: 'discord',
    link: 'https://discord.com/servers/filipino-web-development-peers-996276138588524624',
    label: "link to fwdp's discord server",
    icon: <PiDiscordLogoFill size={40} />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/fwdp',
    label: "link to fwdp's linkedin page",
    icon: <PiLinkedinLogoFill size={40} />,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/fwdpeers',
    label: "link to fwdp's facebook page",
    icon: <TbBrandFacebookFilled size={40} />,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/@filipinowebdevelopmentpeers',
    label: "link to fwdp's youtube channel",
    icon: <PiYoutubeLogoFill size={40} />,
  },
];

export default socialLink;
