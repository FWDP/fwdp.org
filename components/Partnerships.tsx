import Image from 'next/image';

export default function Partnerships() {
  const partnersLogo = [
    { title: 'ACSS', logo: 'acssLogo' },
    { title: 'Aplha', logo: 'alphaLogo' },
    { title: 'BulsuMSC', logo: 'BulsuMSC-LOGO' },
    { title: 'CircUITS', logo: 'CircUITS-LOGO' },
    { title: 'CSSO', logo: 'CSSO-LOGO' },
    { title: 'ICpEP', logo: 'ICpEP-LOGO' },
    { title: 'Laravel', logo: 'Laravel-LOGO' },
    { title: 'MSC', logo: 'MSC-LOGO' },
    { title: 'NU', logo: 'NU-LiteratesLOGO' },
    { title: 'Syntax', logo: 'syntaxLOGO' },
    { title: 'UXPH', logo: 'UXPH-LOGO' },
  ];

  return (
    <section className='flex w-full flex-col items-center pb-16'>
      <h2 className='mb-14 text-center text-5xl font-black tracking-widest'>
        COMMUNITY PARTNERS
      </h2>

      <div className='flex flex-wrap items-center justify-center gap-10 px-4 py-4  md:px-10 '>
        {partnersLogo.map((img, index) => (
          <div className='flex items-center justify-center' key={index}>
            <Image
              src={`/partnersLogo/${img.logo}.png`}
              alt={img.title}
              width={140}
              height={140}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
