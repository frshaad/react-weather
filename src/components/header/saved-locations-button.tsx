import { Map } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function SavedLocationsButton() {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center gap-2">
        <Button variant="secondary" asChild>
          <div>
            <Map className="mr-2 size-4" size={24} />
            <span className="text-sm">Saved Locations</span>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
