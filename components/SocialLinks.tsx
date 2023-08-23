import { socialLink } from '@/constants/socialLinks';

export default function SocialLinks() {
  return (
    <div className='flex gap-2'>
      {socialLink.map((social) => {
        return (
          <a
            key={social.link}
            href={social.link}
            aria-label={social.label}
            target='_blank'
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
}
