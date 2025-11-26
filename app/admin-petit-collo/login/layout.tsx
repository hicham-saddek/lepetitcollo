import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  // If already logged in, redirect to dashboard
  if (user) {
    redirect('/admin-petit-collo');
  }

  return <>{children}</>;
}

