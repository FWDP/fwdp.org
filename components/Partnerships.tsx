import Image from 'next/image';
import { partnersLogo } from '@/constants/partnersLogo';

export default function Partnerships() {
  return (
    <section className='flex w-full flex-col items-center px-8 pb-16'>
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
