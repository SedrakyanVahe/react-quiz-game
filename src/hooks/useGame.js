import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray } from '@/helper'
import { setCards } from '@/slices/gameSlice'
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
  const {
    game: { currentCard }
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const shuffleAndSelectQuestions = (chapter, count) => {
      if (!Array.isArray(chapter)) {
        console.error('Invalid chapter data:', chapter)
        return []
      }
      const shuffledChapter = shuffleArray([...chapter])
      return shuffledChapter.slice(0, count)
    }

    const chapter1Questions = shuffleAndSelectQuestions(chapter1, 5)
    const chapter2Questions = shuffleAndSelectQuestions(chapter2, 5)
    const chapter3Questions = shuffleAndSelectQuestions(chapter3, 5)
    const chapter4Questions = shuffleAndSelectQuestions(chapter4, 5)
    const chapter5Questions = shuffleAndSelectQuestions(chapter5, 5)
    const chapter6Questions = shuffleAndSelectQuestions(chapter6, 5)
    const chapter7Questions = shuffleAndSelectQuestions(chapter7, 5)
    const chapter8Questions = shuffleAndSelectQuestions(chapter8, 5)

    const allQuestions = [
      ...chapter1Questions,
      ...chapter2Questions,
      ...chapter3Questions,
      ...chapter4Questions,
      ...chapter5Questions,
      ...chapter6Questions,
      ...chapter7Questions,
      ...chapter8Questions
    ]

    const newCards = allQuestions.map(
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
  }, [dispatch])

  return { ready, currentCard }
}

export default useGame
