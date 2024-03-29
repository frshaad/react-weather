import { RiCompasses2Line } from 'react-icons/ri';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { selectUnit, setImperial, setMetric } from './unitSlice';

export default function UnitToggle() {
  const currentUnit = useAppSelector(selectUnit);
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">
          <RiCompasses2Line className="mr-2" size={17} />
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
