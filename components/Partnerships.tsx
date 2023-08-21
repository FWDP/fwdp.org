import Image from 'next/image';

export default function Partnerships() {
  return (
    <section className='flex w-full flex-col items-center pb-16'>
      <h2 className='mb-14 text-center text-5xl font-black tracking-widest'>
        COMMUNITY PARTNERS
      </h2>

      <div className='flex flex-wrap items-center justify-center gap-10 px-4 py-4  md:px-10 '>
        {partnersLogo.map((img, index) => (
          <div className='flex items-center justify-center' key={index}>
            <Image src={img.logo} alt={img.title} width={140} height={140} />
          </div>
        ))}
      </div>
    </section>
  );
}

const partnersLogo = [
  { title: 'ACSS', logo: '/partnersLogo/acssLogo.png' },
  { title: 'Aplha', logo: '/partnersLogo/alphaLogo.png' },
  { title: 'BulsuMSC', logo: '/partnersLogo/BulsuMSC-LOGO.png' },
  { title: 'CircUITS', logo: '/partnersLogo/CircUITS-LOGO.png' },
  { title: 'CSSO', logo: '/partnersLogo/CSSO-LOGO.png' },
  { title: 'ICpEP', logo: '/partnersLogo/ICpEP-LOGO.png' },
  { title: 'Laravel', logo: '/partnersLogo/Laravel-LOGO.png' },
  { title: 'MSC', logo: '/partnersLogo/MSC-LOGO.png' },
  { title: 'NU', logo: '/partnersLogo/NU-LiteratesLOGO.png' },
  { title: 'Syntax', logo: '/partnersLogo/syntaxLOGO.png' },
  { title: 'UXPH', logo: '/partnersLogo/UXPH-LOGO.png' },
];
