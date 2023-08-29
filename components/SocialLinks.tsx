import socialLink from '@/constants/socialLinks';

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      {socialLink.map((social) => (
        <a
          key={social.link}
          href={social.link}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
