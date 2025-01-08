import styles from './Card.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Answer from '@/components/Answer'
import FlyingBox from '@/components/FlyingBox'
import useClassName from '@/hooks/useClassName'
import { answerCard, setCurrentCard } from '@/slices/gameSlice'
import { endGame } from '@/slices/appSlice'
import { playSound } from '@/helper'
import successSound from '../../../public/audio/success.mp3'
import failSound from '../../../public/audio/fail.mp3'
import Button from '../Button'

function Card({ index, category, question, correctAnswer, answers = [] }) {
  const dispatch = useDispatch()
  const [done, setDone] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState()
  const [editMode, setEditMode] = useState(false)
  const [tempIndex, setTempIndex] = useState(index + 1)
  const { lastCard } = useSelector(({ game }) => game)
  const { questionsCount } = useSelector(({ app }) => app)
  const className = useClassName(styles, ['base', done && 'done'])

  const handleAnswer = (label) => {
    if (done) return

    label === correctAnswer ? playSound(successSound) : playSound(failSound)

    setDone(true)
    setSelectedAnswer(label)

    setTimeout(() => {
      dispatch(answerCard(label))
      setDone(false)

      if (lastCard) dispatch(endGame())
    }, 1000)
  }

  const finishGame = () => {
    dispatch(endGame())
  }

  const handleIndexClick = () => {
    setEditMode(true)
  }

  const handleIndexChange = (e) => {
    if (e.target.value > questionsCount - 1) {
      e.target.value = questionsCount - 1
    }

    setTempIndex(e.target.value)
  }

  const handleIndexBlur = () => {
    const newIndex = parseInt(tempIndex, 10)

    if (!isNaN(newIndex) && newIndex > 0 && newIndex <= questionsCount) {
      dispatch(setCurrentCard(newIndex - 1))
    }

    setEditMode(false)
  }

  const handleIndexKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleIndexBlur()
    }
  }

  return (
    <FlyingBox className={className}>
      <div className={styles.number}>
        {editMode ? (
          <input
            type='number'
            className={styles.indexInput}
            value={tempIndex}
            max={questionsCount - 1}
            onChange={handleIndexChange}
            onBlur={handleIndexBlur}
            onKeyDown={handleIndexKeyDown}
            autoFocus
          />
        ) : (
          <span
            className={styles.index}
            id='currentQuestionIndex'
            onClick={handleIndexClick}
          >
            {index + 1}
          </span>
        )}
        <span className={styles.slash}>/</span>
        <span className={styles.total}>{questionsCount}</span>
      </div>
      <div className={styles.category}>{category}</div>
      <div className={styles.question}>
        <h3>{question}</h3>
      </div>

      <div className={styles.answers}>
        {answers.map((label, i) => (
          <Answer
            key={i}
            label={label}
            correct={correctAnswer === label}
            selected={selectedAnswer === label}
            done={done}
            onClick={() => handleAnswer(label)}
          />
        ))}
      </div>

      <div className={styles.finish}>
        <Button primary onClick={finishGame}>
          Ավարտել
        </Button>
      </div>
    </FlyingBox>
  )
}

export default Card
