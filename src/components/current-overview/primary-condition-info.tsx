import { Calendar, LocateIcon, Sun } from 'lucide-react'

export default function PrimaryConditionInfo() {
  return (
    <div className="h-full space-y-4 rounded-lg border p-8 shadow-lg backdrop-blur-md transition duration-200 hover:scale-[1.02]">
      <Sun className="mb-7 size-20 text-[#2193b0]/70" />
      <p className="inline-block bg-gradient-to-bl from-[#6dd5ed] to-[#2193b0] bg-clip-text text-4xl font-bold text-transparent">
        26.8°C
      </p>
      <p className="text-sm">Clear Sky</p>
      <div className="w-full border-y" />
      <p className="flex items-center text-sm">
        <LocateIcon className="mr-2 size-5" /> Tehran, IR
      </p>
      <p className="flex items-center text-sm">
        <Calendar className="mr-2 size-5" /> 28 August Monday
      </p>
    </div>
  )
}
