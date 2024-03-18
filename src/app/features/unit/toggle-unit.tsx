import { DraftingCompass } from 'lucide-react';

import { selectUnit, setImperial, setMetric } from './unitSlice';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function UnitToggle() {
  const currentUnit = useAppSelector(selectUnit);
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          <DraftingCompass className="mr-2" size={17} />
          {currentUnit}
          <span className="sr-only">Toggle unit</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch(setMetric())}>
          Metric
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(setImperial())}>
          Imperial
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
