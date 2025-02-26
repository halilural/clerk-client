import { SignedOut, SignedIn, Waitlist } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='flex flex-1 items-center justify-center bg-white p-4 dark:bg-slate-600'>
        <SignedIn>
          <div>Home Page</div>
        </SignedIn>
        <SignedOut>
          <Waitlist />
        </SignedOut>
      </div>
    </div>
  );
}
