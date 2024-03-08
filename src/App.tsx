import { lazy } from 'react'
import { Outlet } from 'react-router-dom'

const UnitToggle = lazy(() => import('@/app/features/unit/toggle-unit'))
const ModeToggle = lazy(() => import('@/components/mode-toggle'))
const SearchInput = lazy(() => import('@/components/search-input'))

export default function App() {
  return (
    <div className="container max-w-5xl space-y-10 pt-10">
      <div className="flex">
        <SearchInput />
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <UnitToggle />
        </div>
      </div>
      <Outlet />
    </div>
  )
}
