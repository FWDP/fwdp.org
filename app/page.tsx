import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';
import Team from './team/page';

export default function Home() {
  return (
    <main className='min-h-screen w-full bg-primaryColor p-8 '>
      <section className=' mx-8 mb-8 flex w-full items-center gap-8 max-sm:mx-2 sm:mx-4'>
        <div className='flex flex-col xl:w-[50%]'>
          <div className=''>
            <Image src={'/fwdpHero.png'} alt='aso' width={250} height={250} />
          </div>

          <div className='mb-2 flex w-max flex-col text-7xl max-sm:text-4xl xl:text-[5.5rem]'>
            <span className='w-max bg-shockingPink p-3 pr-8 text-[1em] text-white'>
              Filipino Web
            </span>
            <span className='bg-royalBlue p-3 text-[0.75em] text-white'>
              Development Peers
            </span>
          </div>

          <SocialLinks />

          <p className='mt-8 overflow-hidden text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum,
            fugit ab molestias officia earum iure, esse consequuntur eaque quis
            nisi alias? Nesciunt eaque officiis recusandae debitis fugit culpa
            rerum?
          </p>
        </div>

        <div className='max-lg:hidden'>
          <Image
            src={'/aso.jpg'}
            alt='aso'
            className='object-cover'
            width={1000}
            height={700}
          />
        </div>
      </section>

      <section className='w-full pb-16'>
        <h2 className='text-center text-4xl'>COMMUNITY PARTNERS</h2>
        <p className='mt-8 text-2xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          dolore nam dolorem quasi, iure ipsum omnis blanditiis, libero nostrum
          explicabo, reiciendis tenetur tempora quibusdam magnam dicta quam
          facilis eius repellendus! Earum nihil, quia consectetur, dolorem quod
          voluptatem similique optio voluptatum maxime quaerat eveniet totam?
          Voluptatem officiis corrupti ab esse iusto, amet nesciunt maiores
          quisquam et debitis. Voluptatum, natus dolore. Repellat. Suscipit
          tempora aperiam fuga laboriosam perferendis ducimus omnis asperiores
          porro sapiente laborum vitae maiores illum in quisquam autem dolorem,
          iure ipsa provident harum. Quas, rerum ea magnam nemo et quaerat!
          Veritatis, odit perferendis obcaecati dolore natus esse voluptas id
          odio velit corrupti ab. Autem nam aliquam nulla ipsa qui rem
          voluptatem quas possimus quidem quibusdam adipisci nemo ratione,
          laboriosam eveniet.
        </p>
      </section>

      <section className='pb-16'>
        <h2 className='text-center text-4xl'>SECTION 3</h2>
        <p className='mt-8 text-2xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          dolore nam dolorem quasi, iure ipsum omnis blanditiis, libero nostrum
          explicabo, reiciendis tenetur tempora quibusdam magnam dicta quam
          facilis eius repellendus! Earum nihil, quia consectetur, dolorem quod
          voluptatem similique optio voluptatum maxime quaerat eveniet totam?
          Voluptatem officiis corrupti ab esse iusto, amet nesciunt maiores
          quisquam et debitis. Voluptatum, natus dolore. Repellat. Suscipit
          tempora aperiam fuga laboriosam perferendis ducimus omnis asperiores
          porro sapiente laborum vitae maiores illum in quisquam autem dolorem,
          iure ipsa provident harum. Quas, rerum ea magnam nemo et quaerat!
          Veritatis, odit perferendis obcaecati dolore natus esse voluptas id
          odio velit corrupti ab. Autem nam aliquam nulla ipsa qui rem
          voluptatem quas possimus quidem quibusdam adipisci nemo ratione,
          laboriosam eveniet.
        </p>
      </section>
    </main>
  );
}
