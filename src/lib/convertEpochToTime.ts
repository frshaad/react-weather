import { format } from 'date-fns'

function convertEpochToLocalTimeString(
  epoch: number,
  timezone: number
): string {
  // Create a Date object from the unix timestamp (epoch) in milliseconds
  const date = new Date((epoch - timezone) * 1000)

  // Adjust the date based on the timezone offset (in minutes)
  date.setTime(date.getTime())

  // Format the date in the desired format using date-fns
  return format(date, 'HH:mm')
}

export function epochToHhMm(
  sunrise: number,
  sunset: number,
  timezone: number
): { sunriseTime: string; sunsetTime: string } {
  const sunriseTime = convertEpochToLocalTimeString(sunrise, timezone)
  const sunsetTime = convertEpochToLocalTimeString(sunset, timezone)

  return { sunriseTime, sunsetTime }
}
