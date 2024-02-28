import { TiLocationArrow } from 'react-icons/ti'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Button } from './ui/button'
import { Input } from './ui/input'

export default function SearchInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search City" />
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
