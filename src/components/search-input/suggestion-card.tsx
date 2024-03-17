import { Card } from '@/components/ui/card'

export default function SuggestionCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card>
      <ul className="flex flex-col p-0">{children}</ul>
    </Card>
  )
}
