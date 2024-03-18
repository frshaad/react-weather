import { Link, useNavigate } from 'react-router-dom';
import { DebouncedState } from 'usehooks-ts';

import { Button } from '@/components/ui/button';
import { GeoLocation } from '@/types';

type Props = React.ComponentPropsWithoutRef<'button'> & {
  locationData?: GeoLocation;
  setQueryString: DebouncedState<(value: string) => void>;
};

export default function ListItem({ locationData, setQueryString }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    setQueryString('');
    navigate(`/${locationData?.lat},${locationData?.lon}`);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex w-full justify-start overflow-hidden"
      onClick={handleClick}
      asChild
    >
      <Link to={`/${locationData?.lat},${locationData?.lon}`}>
        <span className="font-semibold">{locationData?.name}</span>
        {!!locationData?.state &&
          locationData.state.length < 9 &&
          `,${locationData.state} `}
        ,{locationData?.country}
      </Link>
    </Button>
  );
}
