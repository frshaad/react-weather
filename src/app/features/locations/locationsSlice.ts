/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import type { SavedLocationObject } from '@/types';

export type LocationsSlice = {
  locations: SavedLocationObject[];
};

const initialState: LocationsSlice = {
  locations: [],
};

export const locationsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<SavedLocationObject>) => {
      const existingLocation = state.locations.find(
        (loc) =>
          loc.name === action.payload.name &&
          loc.country === action.payload.country,
      );

      if (!existingLocation) {
        state.locations.push(action.payload);
      }
    },

    removeLocation: (state, action: PayloadAction<SavedLocationObject>) => {
      const updatedLocations = state.locations.filter(
        (loc) =>
          loc.name !== action.payload.name &&
          loc.country !== action.payload.country,
      );

      state.locations = updatedLocations;
    },

    clearAllLocations: (state) => {
      state.locations = [];
    },
  },
});

export const selectAllLocations = (state: RootState) =>
  state.location.locations;
export const { addLocation, removeLocation, clearAllLocations } =
  locationsSlice.actions;
export default locationsSlice.reducer;
