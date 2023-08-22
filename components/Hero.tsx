import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className='relative  mb-4 flex w-full gap-12 overflow-hidden px-8 pb-20 pt-6 max-md:px-6 2xl:px-16'>
      <div className='flex-1 flex-col'>
        <div className=''>
          <Image
            src={'/fwdpHero.png'}
            alt='fwdpHero'
            width={250}
            height={250}
          />
        </div>

        <div className='mb-2 flex max-w-[700px] flex-col text-7xl max-sm:text-4xl lg:text-[3.3rem] xl:text-[5rem] 2xl:text-[6rem]'>
          <span className='w-max bg-shockingPink p-3 pr-8 text-[1em] text-white'>
            Filipino Web
          </span>
          <span className='mb-4 w-max bg-royalBlue p-3 text-[0.75em] text-white'>
            Development Peers
          </span>

          <SocialLinks />

          {/* about */}
          <p className='mt-8 w-full max-w-xl break-words text-2xl font-semibold  max-sm:max-w-sm md:max-w-xl lg:max-w-[28rem] xl:max-w-xl 2xl:max-w-2xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum,
            fugit ab molestias officia earum iure, esse consequuntur eaque quis
            nisi alias? Nesciunt eaque officiis recusandae debitis fugit culpa
            rerum?
          </p>
        </div>
      </div>

      <div className='absolute right-offset-vw hidden h-[500px] w-[1000px] items-end justify-end lg:flex xl:flex-[2]'>
        <Image
          priority
          src='/discord-community-ss.png'
          alt='discord-community-ss'
          className='  rounded-xl shadow-2xl'
          fill={true}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </section>
  );
}
