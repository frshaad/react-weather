import { lazy } from 'react'

import { useFetchForecast } from '@/hooks/useFetchForecast'

const UnitToggle = lazy(() => import('@/app/features/unit/toggle-unit'))
const ModeToggle = lazy(() => import('@/components/mode-toggle'))
const SearchInput = lazy(() => import('@/components/search-input'))

export default function App() {
  const { data: forecastWeather, isLoading } = useFetchForecast(
    36.63296126999999,
    52.27092741999998
  )

  if (!isLoading && !!forecastWeather) {
    console.log(forecastWeather)
  }

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
