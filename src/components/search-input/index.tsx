import { TiLocationArrow } from 'react-icons/ti'
import { useDebounceValue } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useSearchLocation } from '@/hooks/useSearchLocation'

import ListItem from './list-item'
import SuggestionCard from './suggestion-card'

export default function SearchInput() {
  const [searchQuery, setValue] = useDebounceValue('', 500)

  const { data: results, isError, isLoading } = useSearchLocation(searchQuery)

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
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
            </SuggestionCard> // Loading skeleton component
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" type="submit">
              <TiLocationArrow size={22} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Use your current location</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
