import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cards: [],
  currentCard: {},
  lastCard: false,
  results: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
      state.currentCard = state.cards[0]
      state.lastCard = false
      state.results = []
    },
    answerCard: (state, action) => {
      const result = {
        card: state.currentCard,
        answer: action.payload,
        correct: action.payload === state.currentCard.correctAnswer
      }
      state.results.push(result)

      if (state.lastCard) return

      const index = state.currentCard.index
      const newCard = state.cards[index + 1]
      state.currentCard = newCard

      if (index === state.cards.length - 2) state.lastCard = true
    }
  }
})

export const { setCards, answerCard } = gameSlice.actions

export default gameSlice.reducer
