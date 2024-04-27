import ModeToggle from '@/components/mode-toggle';
import SearchInput from '@/components/search-input';

import SavedLocationsButton from './saved-locations-button';

export default function index() {
  return (
    <header className="flex">
      <SearchInput />
      <div className="flex items-center gap-2">
        <SavedLocationsButton />
        <ModeToggle />
      </div>
    </header>
  );
}
