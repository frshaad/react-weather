import { Card } from '@/components/ui/card'

export default function SuggestionCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card className="">
      <ul className="flex flex-col p-0">{children}</ul>
    </Card>
  )
}
