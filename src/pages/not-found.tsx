import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black">404</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>

        <p className="mt-4">We can&apos;t find that page.</p>
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
