import { useDebounceValue } from 'usehooks-ts'

import { Input } from '@/components/ui/input'
import { useSearchLocation } from '@/hooks/useSearchLocation'

import GeoLocationButton from './geolocation-button'
import ListItem from './list-item'
import SuggestionCard from './suggestion-card'

export default function SearchInput() {
  const [searchQuery, setValue] = useDebounceValue('', 500)

  const { data: results, isError, isLoading } = useSearchLocation(searchQuery)

  return (
    <div className="flex w-full items-center space-x-2">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search City"
          defaultValue=""
          onChange={e => setValue(e.target.value)}
        />
        <div className="absolute mt-2 w-full">
          {isLoading && searchQuery.length > 0 ? (
            <SuggestionCard>
              <ListItem isSkeleton />
              <ListItem isSkeleton />
              <ListItem isSkeleton />
              <ListItem isSkeleton />
              <ListItem isSkeleton />
            </SuggestionCard>
          ) : (
            !isError &&
            results && (
              <SuggestionCard>
                {results.map((result, i) => (
                  <ListItem key={i}>
                    {result.name}, {result.country}
                  </ListItem>
                ))}
              </SuggestionCard>
            )
          )}
        </div>
      </div>
      <GeoLocationButton />
    </div>
  )
}