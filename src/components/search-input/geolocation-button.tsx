import { Navigation } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { Coords } from '@/types'

export default function GeoLocationButton() {
  const navigate = useNavigate()
  const [, setLocation] = useState<Coords | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLocation({ lat: latitude, lon: longitude })
        navigate(`/${latitude},${longitude}`)
      },
      error => setError(error.message)
    )
  }

  if (error) {
    console.log(error)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            type="submit"
            onClick={getLocation}
          >
            <Navigation size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Use your current location</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
