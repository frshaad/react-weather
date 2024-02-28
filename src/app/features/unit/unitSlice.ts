// actions.ts
import { createSlice } from '@reduxjs/toolkit'

interface UnitState {
  unit: 'metric' | 'imperial' // Supported units by OpenWeatherMap API
}

const initialState: UnitState = {
  unit: 'metric', // Default unit
}

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    toggleUnit: state => {
      state.unit = state.unit === 'metric' ? 'imperial' : 'metric'
    },
  },
})

export const { toggleUnit } = unitSlice.actions
export default unitSlice.reducer
