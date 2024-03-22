import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  title: string;
  data: string | number;
  children?: React.ReactNode;
};

export default function ConditionInfo({
  data,
  icon: Icon,
  title,
  children,
}: Props) {
  return (
    <div className="flex h-full cursor-default select-none items-center gap-10 rounded-lg border p-5 transition duration-200 hover:scale-[1.02] hover:shadow-md">
      <Icon className="size-10 text-[#2193b0]/70" />
      <div className="space-y-2">
        <p className="text-base font-semibold capitalize text-secondary-foreground/70">
          {title}
        </p>
        <p className="inline-block bg-gradient-to-bl from-[#6dd5ed] to-[#2193b0] bg-clip-text text-xl font-bold text-transparent">
          {data}
        </p>
      </div>
      {!!children && children}
    </div>
  );
}
