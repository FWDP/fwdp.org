import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className='mx-8 flex w-full flex-nowrap gap-12 overflow-hidden py-16 max-sm:mx-2 sm:mx-4 lg:px-0 2xl:px-16'>
      <div className='flex-1 flex-col'>
        <div className=''>
          <Image
            src={'/fwdpHero.png'}
            alt='fwdpHero'
            width={250}
            height={250}
          />
        </div>

        <div className='mb-2 flex w-max flex-col text-7xl max-sm:text-4xl lg:text-[3.3rem] xl:text-[5rem] 2xl:text-[6rem]'>
          <span className='w-max bg-shockingPink p-3 pr-8 text-[1em] text-white'>
            Filipino Web
          </span>
          <span className='bg-royalBlue p-3 text-[0.75em] text-white'>
            Development Peers
          </span>
        </div>

        <SocialLinks />

        {/* about */}
        <p className='mt-8 overflow-hidden text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum,
          fugit ab molestias officia earum iure, esse consequuntur eaque quis
          nisi alias? Nesciunt eaque officiis recusandae debitis fugit culpa
          rerum?
        </p>
      </div>

      <div className='hidden w-full items-end justify-end lg:flex xl:flex-[1.5]'>
        <div className='right-offset-vw absolute inline-block h-[550px] w-[1000px]'>
          <Image
            priority
            src='/discord-community-ss.png'
            alt='discord-community-ss'
            className=' min-w-[850px] rounded-xl shadow-2xl'
            fill={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
}
