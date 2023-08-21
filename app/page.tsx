import Hero from '@/components/Hero';
import Partnerships from '@/components/Partnerships';

export default function Home() {
  return (
    <main className='relative min-h-screen bg-primaryColor p-8 '>
      <Hero />

      <section className='w-full pb-16'>
        <h2 className='mb-14 text-center text-5xl font-black tracking-widest'>
          MISSON AND VISSION
        </h2>
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

      <Partnerships />

      <footer>
        <span>Contacts</span>
      </footer>
    </main>
  );
}
