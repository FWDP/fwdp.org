import React from 'react';
import Image from 'next/image';

export default function MissionVission() {
  return (
    <section className='flex w-full flex-wrap items-center justify-center gap-8 px-20 pb-16 text-center'>
      <div className='midnightBlue-shadow max-w-xl border-4 border-midnightBlue p-4 shadow-midnightBlue-shadow'>
        <div className='mb-4 flex items-center justify-center gap-4 text-center text-5xl font-black tracking-widest max-sm:text-4xl'>
          <Image src='/dino-blue.png' alt='dino-blue' height={45} width={45} />
          <p>MISSION</p>
        </div>
        <p className='mt-8 text-2xl'>
          To establish a safe and inclusive Filipino learning community with a
          global impact for web development learners and professionals. To
          provide a platform for members to participate in activities
          encapsulating collaboration and camaraderie. To inspire members to
          develop and apply their knowledge and skills beneficial to society.
        </p>
      </div>
      <div className='midnightBlue-shadow max-w-xl border-4 border-midnightBlue p-4 shadow-midnightBlue-shadow'>
        <div className='mb-4 flex items-center justify-center gap-4 text-center text-5xl font-black tracking-widest max-sm:text-4xl'>
          <Image src='/dino-pink.png' alt='dino-pink' height={45} width={45} />
          <p>VISION</p>
        </div>
        <p className='mt-8 text-2xl'>
          Filipino Web Development Peers shall be a community for Filipinos
          advocating collaborative and effective learning on pursuing a career
          in technology, particularly in web development. Filipino Web
          Development Peers shall be a social enterprise with a global reach
          providing accessible academic and freelancing services.
        </p>
      </div>
    </section>
  );
}
