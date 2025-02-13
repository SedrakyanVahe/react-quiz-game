import { useDispatch, useSelector } from 'react-redux'
import styles from './Score.module.css'

import useClassName from '@/hooks/useClassName'
import { restart } from '@/slices/appSlice'
import Button from '@/components/Button'
import FlyingBox from '@/components/FlyingBox'

function Score() {
  const dispatch = useDispatch()
  const {
    app: { questionsCount, startTime },
    game: { results }
  } = useSelector((state) => state)

  const correctAnswer = results.filter(({ correct }) => correct).length
  const wrongAnswer = results.filter(({ correct }) => !correct).length

  const elapsedTime = (performance.now() - startTime) / 1000
  // let score = (correctAnswer / results.length) * (results.length * 10 - elapsedTime)
  // score = score >= 0 ? score : correctAnswer / results.length

  const handleRestartGame = () => {
    dispatch(restart())
  }

  return (
    <FlyingBox className={styles.base}>
      {/* <h1>Score: {score.toFixed(1)}</h1> */}
      <h3>Հարցերի քանակ: {questionsCount}</h3>
      <h3>Ճիշտ պատասխանները: {correctAnswer}</h3>
      <h3>Սխալ պատասխանները: {wrongAnswer}</h3>

      <h3>Ժամանակ: {elapsedTime.toFixed(1)}s</h3>
      <div className={styles.results}>
        {wrongAnswer == 0 ? (
          <h3>Դուք չունեք սխալ պատասխաններ ✅</h3>
        ) : (
          results.map(({ correct, answer, card }, i) => (
            <Result key={i} number={i + 1} correct={correct} answer={answer} {...card} />
          ))
        )}
      </div>
      <div className={styles.restart}>
        <Button primary onClick={handleRestartGame}>
          Փորձել կրկին
        </Button>
      </div>
    </FlyingBox>
  )
}

function Result({ question, number, answer, correctAnswer, correct }) {
  const className = useClassName(styles, ['result', correct && 'correct'])

  return (
    <>
      {!correct && (
        <div className={className}>
          <div>
            <b>Հարց {number}:</b> {question}
          </div>
          <div className={styles.answer}>
            <b>Ձեր պատասխանը:</b> <span>{answer}</span>
          </div>

          <div>
            <b>Ճիշտ պատասխանը:</b> {correctAnswer}
          </div>
        </div>
      )}
    </>
  )
}

export default Score
