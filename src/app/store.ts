import { configureStore } from '@reduxjs/toolkit'

import locationReducer from './features/locations/locationsSlice'
import unitReducer from './features/unit/unitSlice'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    unit: unitReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
