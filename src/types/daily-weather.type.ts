export type DailyWeather = {
  city: City
  cod: string
  message: number
  cnt: number
  list: List[]
}

export type City = {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
}

export type Coord = {
  lon: number
  lat: number
}

export type List = {
  dt: number
  sunrise: number
  sunset: number
  temp: Temp
  feels_like: FeelsLike
  pressure: number
  humidity: number
  weather: Weather[]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain: number
}

export type FeelsLike = {
  day: number
  night: number
  eve: number
  morn: number
}

export type Temp = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export type Weather = {
  id: number
  main: string
  description: string
  icon: string
}
