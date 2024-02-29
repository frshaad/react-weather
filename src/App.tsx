import { ModeToggle } from './components/mode-toggle'
import SearchInput from './components/search-input'

export default function App() {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl border">
      <SearchInput />
      <ModeToggle />
    </div>
  )
}
