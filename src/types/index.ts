export type Location = {
  id: string
  name: string
  local_names: { [key: string]: string }
  lat: number
  lon: number
  country: string
  state: string
}

export type Coords = {
  lat: number
  lon: number
}
