import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/35.6892523,51.3896004'); // navigate to Tehran weather page
  }, [navigate]);

  return (
    <>
      <main className="container max-w-5xl space-y-5 pt-5">
        <Header />
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}
