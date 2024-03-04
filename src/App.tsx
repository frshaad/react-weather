import { lazy } from 'react'

const UnitToggle = lazy(() => import('@/app/features/unit/toggle-unit'))
const ModeToggle = lazy(() => import('@/components/mode-toggle'))
const SearchInput = lazy(() => import('@/components/search-input'))

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
