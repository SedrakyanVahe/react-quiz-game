import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'initial',
  questionsCount: 40,
  startTime: 0,
  category: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startGame: (state) => {
      state.mode = 'game'
      state.startTime = performance.now()
    },

    endGame: (state) => {
      state.mode = 'score'
    },

    restart: (state) => {
      state.mode = 'initial'
    },

    showQuestionsList: (state, action) => {
      state.mode = 'showQuestionsList'
      state.category = action.payload
    }
  }
})

export const { startGame, endGame, restart, showQuestionsList } = appSlice.actions

export default appSlice.reducer
