import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type DateTabProps = React.ComponentPropsWithoutRef<'button'> & {
  selected?: boolean;
};

export default function DateTab({
  selected,
  children,
  ...restProps
}: DateTabProps) {
  return (
    <li>
      <Button
        variant="outline"
        className={cn({
          'bg-sky-100 text-sky-600 hover:bg-sky-100 hover:text-sky-600':
            selected,
        })}
        {...restProps}
      >
        {children}
      </Button>
    </li>
  );
}
