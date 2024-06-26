import styles from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Form from '@/components/Form'
import Game from '@/components/Game'
import Score from '@/components/Score'
import useClassName from '@/hooks/useClassName'
import Footer from '@/components/Footer'
import Questions from '@/components/Questions'
import { restart } from '@/slices/appSlice'

const ComponentRendered = { initial: <Form />, game: <Game />, score: <Score /> }

function App() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.app.mode)
  const category = useSelector((state) => state.app.category)
  const currentCard = useSelector((state) => state.game.currentCard)

  const className = useClassName(styles, [
    'base',
    currentCard.category && currentCard.category.replace(/\s/g, '').toLowerCase()
  ])

  const handleRestartGame = () => {
    dispatch(restart())
  }

  return (
    <>
      {mode === 'showQuestionsList' ? <Questions category={category} /> : null}
      <div className={className}>
        {mode === 'initial' ? null : (
          <button className={styles.backBtn} onClick={handleRestartGame}>
            Go back
          </button>
        )}
        {ComponentRendered[mode]}
        <Footer />
      </div>
    </>
  )
}

export default App
