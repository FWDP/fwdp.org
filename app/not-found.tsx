import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='absolute top-0 z-[9999] flex h-screen w-full flex-col items-center justify-center gap-4 bg-primaryColor'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <span className='text-7xl font-black tracking-widest'>
          <span className='text-shockingPink'>4</span>0
          <span className='text-shockingPink'>4</span>
        </span>
        <span className='text-4xl font-black'>NOT FOUND</span>
      </div>
      <button className='bg-shockingPink px-4 py-2 font-black text-white'>
        <Link href='/'>Return Home</Link>
      </button>
    </div>
  );
}
