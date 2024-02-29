import { Navigation } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function GeoLocationButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" type="submit">
            <Navigation size={22} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Use your current location</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
