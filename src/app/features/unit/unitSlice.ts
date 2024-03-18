/* eslint-disable no-param-reassign */
// actions.ts
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

interface UnitState {
  unit: 'metric' | 'imperial'; // Supported units by OpenWeatherMap API
}

const initialState: UnitState = {
  unit: 'metric', // Default unit
};

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    setMetric: (state) => {
      state.unit = 'metric';
    },
    setImperial: (state) => {
      state.unit = 'imperial';
    },
  },
});

export const selectUnit = (state: RootState) => state.unit.unit;
export const { setMetric, setImperial } = unitSlice.actions;
export default unitSlice.reducer;
