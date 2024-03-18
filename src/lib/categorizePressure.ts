export default function categorizePressure(
  pressure: number,
): 'low' | 'moderate' | 'high' {
  const seaLevel = 1013.25; // Average sea level pressure in hPa (hectopascals)

  const pressureDifference = Math.abs(pressure - seaLevel);

  if (pressureDifference < 10) {
    return 'low';
  }
  if (pressureDifference < 20) {
    return 'moderate';
  }
  return 'high';
}
