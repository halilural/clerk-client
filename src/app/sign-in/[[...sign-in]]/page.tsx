import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='md:flex-grow-2 flex flex-1 items-center justify-center bg-white p-4 dark:bg-slate-600'>
        <SignIn />
      </div>
      <div className='hidden items-center justify-center bg-gray-200 p-4 md:flex md:flex-grow'>
        <h1 className='text-3xl font-bold'>Welcome to Our Service</h1>
      </div>
    </div>
  );
}
