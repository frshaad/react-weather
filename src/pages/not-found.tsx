import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

import NotFoundSVG from '@/components/not-found-svg';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <NotFoundSVG />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        <Button variant="outline" className="mt-8" asChild>
          <Link to="/">
            <Home className="mr-2" size={18} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
