import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'initial',
  questionsCount: 0,
  startTime: 0,
  category: null,
  chapter: null
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

    setQuestionsCount: (state, action) => {
      state.questionsCount = action.payload
    },

    showQuestionsList: (state, action) => {
      state.mode = 'showQuestionsList'
      state.category = action.payload
    },

    setChapter: (state, action) => {
      state.chapter = action.payload
    }
  }
})

export const {
  startGame,
  endGame,
  restart,
  setQuestionsCount,
  showQuestionsList,
  setChapter
} = appSlice.actions

export default appSlice.reducer
