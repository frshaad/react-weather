import { Outlet } from 'react-router-dom';

import ModeToggle from '@/components/mode-toggle';
import SearchInput from '@/components/search-input';

export default function App() {
  return (
    <div className="container max-w-5xl space-y-10 pt-10">
      <div className="flex">
        <SearchInput />
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  );
}
