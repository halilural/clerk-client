import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
        404 - Page Not Found
      </h1>
      <p className='mt-4 text-gray-600 dark:text-gray-400'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link className='mt-6' href='/'>
        <span className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>
          Go back to Home
        </span>
      </Link>
    </div>
  );
}
