/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Coords, GeoLocation } from '@/types';

export type LocationsSlice = {
  locations: GeoLocation[];
};

const initialState: LocationsSlice = {
  locations: [],
};

export const locationsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<GeoLocation>) => {
      const existingLocation = state.locations.find(
        (loc) =>
          loc.lat === action.payload.lat && loc.lon === action.payload.lon,
      );

      if (!existingLocation) {
        state.locations.push(action.payload);
      }
    },

    removeLocation: (state, action: PayloadAction<Coords>) => {
      const updatedLocations = state.locations.filter(
        (loc) =>
          loc.lat !== action.payload.lat && loc.lon !== action.payload.lon,
      );

      state.locations = updatedLocations;
    },

    clearAllLocations: (state) => {
      state.locations = [];
    },
  },
});

export const { addLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
