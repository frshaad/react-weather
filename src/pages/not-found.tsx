import { GoHome } from 'react-icons/go'
import { Link, useRouteError } from 'react-router-dom'

import { Button } from '../components/ui/button'

export default function NotFound() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Not Found</i>
      </p>
      <Button variant="outline" asChild>
        <Link to="/">
          <GoHome className="mr-2" size={18} />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
