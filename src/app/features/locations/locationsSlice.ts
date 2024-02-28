import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { Location } from '@/types'

export type LocationsSlice = {
  locations: Location[]
}

const initialState: LocationsSlice = {
  locations: [],
}

export const locationsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<Location>) => {
      const existingLocation = state.locations.find(
        loc => loc.id === action.payload.id
      )

      if (!existingLocation) {
        state.locations.push(action.payload)
      }
    },

    removeLocation: (state, action: PayloadAction<string>) => {
      const updatedLocations = state.locations.filter(
        loc => loc.id !== action.payload
      )

      state.locations = updatedLocations
    },

    clearAllLocations: state => {
      state.locations = []
    },
  },
})

export const { addLocation } = locationsSlice.actions
export default locationsSlice.reducer
