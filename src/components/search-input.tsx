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
        <div className="absolute w-fit">
          {isLoading && searchQuery.length > 0
            ? 'Loading'
            : !isError &&
              results &&
              results.map((result, i) => (
                <p key={i}>
                  {result.name}, {result.country}
                </p>
              ))}
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
