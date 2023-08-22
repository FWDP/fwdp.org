import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='absolute top-0 z-[9999] flex h-screen w-full flex-col items-center justify-center bg-primaryColor'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
