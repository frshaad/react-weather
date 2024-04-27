export type GeoLocation = {
  name: string;
  local_names?: { [key: string]: string };
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type Coords = {
  lat: number;
  lon: number;
};

export type LocationParam = {
  locationCoords: string;
};

export type SavedLocationObject = Coords & { name: string; country: string };
