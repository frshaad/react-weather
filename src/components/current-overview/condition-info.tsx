import { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  data: string
}

export default function ConditionInfo({ data, icon: Icon, title }: Props) {
  return (
    <div className="flex h-full items-center gap-10 rounded-lg border bg-secondary p-4">
      <Icon className="size-10" />
      <div className="space-y-2">
        <p className="text-lg capitalize text-secondary-foreground/80">
          {title}
        </p>
        <p className="text-2xl font-medium">{data}</p>
      </div>
    </div>
  )
}
