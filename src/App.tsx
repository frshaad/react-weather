import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import ModeToggle from '@/components/mode-toggle';
import SearchInput from '@/components/search-input';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/35.6892523,51.3896004'); // navigate to Tehran weather page
  }, [navigate]);

  return (
    <div className="container max-w-5xl space-y-5 pt-5">
      <div className="flex">
        <SearchInput />
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  );
}
