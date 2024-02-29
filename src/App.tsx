import { UnitToggle } from '@/app/features/unit/toggle-unit'
import { ModeToggle } from '@/components/mode-toggle'
import SearchInput from '@/components/search-input'

export default function App() {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl">
      <SearchInput />
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <UnitToggle />
      </div>
    </div>
  )
}
