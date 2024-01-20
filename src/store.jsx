import { configureStore } from '@reduxjs/toolkit'

import appReducer from '@/slices/appSlice'
import gameReducer from '@/slices/gameSlice'

const combineReducers = {
  reducer: {
    app: appReducer,
    game: gameReducer
  }
}

export const store = configureStore(combineReducers)
