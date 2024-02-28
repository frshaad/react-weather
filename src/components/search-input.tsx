import { TiLocationArrow } from 'react-icons/ti'
import { useDebounceValue } from 'usehooks-ts'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Button } from './ui/button'
import { Input } from './ui/input'

export default function SearchInput() {
  const [searchQuery, setValue] = useDebounceValue('', 500)

  console.log(searchQuery)

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Search City"
        defaultValue=""
        onChange={e => setValue(e.target.value)}
      />
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
