import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray } from '@/helper'
import { setCards } from '@/slices/gameSlice'
import { setQuestionsCount } from '@/slices/appSlice'
import chapter1 from '../../database/chapter1.json'
import chapter2 from '../../database/chapter2.json'
import chapter3 from '../../database/chapter3.json'
import chapter4 from '../../database/chapter4.json'
import chapter5 from '../../database/chapter5.json'
import chapter6 from '../../database/chapter6.json'
import chapter7 from '../../database/chapter7.json'
import chapter8 from '../../database/chapter8.json'

function useGame() {
  const [ready, setReady] = useState(false)
  const currentCard = useSelector((state) => state.game.currentCard)
  const chapter = useSelector((state) => state.app.chapter)
  const dispatch = useDispatch()

  useEffect(() => {
    const chapters = {
      chapter1,
      chapter2,
      chapter3,
      chapter4,
      chapter5,
      chapter6,
      chapter7,
      chapter8
    }

    if (!chapter || !chapters[chapter]) return

    const selectedQuestions = chapters[chapter]
    // const shuffledQuestions = shuffleArray(selectedQuestions)
    dispatch(setQuestionsCount(selectedQuestions.length))

    const newCards = selectedQuestions.map(
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
  }, [chapter, dispatch])

  return { ready, currentCard }
}

export default useGame
