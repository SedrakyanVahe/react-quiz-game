import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray } from '@/helper'
import { setCards } from '@/slices/gameSlice'
// import historyData from '../../database/history.json'
// import sportData from '../../database/sport.json'
import chapter1 from '../../database/chapter1.json'
// TODO

function useGame() {
  const [ready, setReady] = useState(false)
  const {
    game: { currentCard }
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    // const jsonData = historyData.concat(chapter1)
    const jsonData = chapter1

    const newCards = jsonData.map(
      ({ question, correctAnswer, incorrectAnswers }, index) => {
        if (incorrectAnswers.length > 3) incorrectAnswers.splice(3)

        const answers = [correctAnswer, ...incorrectAnswers]
        shuffleArray(answers)

        return {
          index,
          question,
          answers,
          correctAnswer
        }
      }
    )

    setReady(true)
    dispatch(setCards(newCards))
  }, [])

  return { ready, currentCard }
}

export default useGame
