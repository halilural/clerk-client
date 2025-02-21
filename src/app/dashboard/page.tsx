import { currentUser } from '@clerk/nextjs/server';
import { checkRole } from '@/utils/roles';
import { redirect } from 'next/navigation';
export default async function Dashboard() {
  // Protect the page from users who are not admins
  const isUser = await checkRole('user');
  if (!isUser) {
    redirect('/');
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  return <div>Welcome, {user?.firstName ?? 'User'}!</div>;
}
