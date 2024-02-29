import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import thunk from 'redux-thunk'
import locationReducer from './features/locations/locationsSlice'
import unitReducer from './features/unit/unitSlice'

const rootPersistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  location: locationReducer,
  unit: unitReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk] ,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
