import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col gap-8 bg-primaryColor px-8 py-6 xl:flex-row-reverse'>
      <div className='relative h-[200px] xl:h-[750px] xl:w-[55%]'>
        <Image src={'/aso.jpg'} alt='aso' fill className='object-cover' />
      </div>

      <div className='flex flex-col xl:w-[45%]'>
        <div className='mt-8 xl:mt-16'>
          <Image src={'/fwdpHero.png'} alt='aso' width={250} height={250} />
        </div>

        <div className=' mb-2 flex w-[500px] flex-col'>
          <span className='w-[77%] bg-shockingPink p-3 text-6xl text-white'>
            Filipino Web
          </span>
          <span className='bg-royalBlue p-3 text-5xl text-white'>
            Development Peers
          </span>
        </div>

        <SocialLinks />

        <p className='mt-8 text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          et? Dicta perferendis consequuntur exercitationem vero. Porro in animi
          perferendis ducimus asperiores, optio accusamus odit minima aliquam
          fuga veritatis error magni?
        </p>
      </div>
    </main>
  );
}
