import styles from './App.module.css'
import { useSelector } from 'react-redux'
import Form from '@/components/Form'
import Game from '@/components/Game'
import Score from '@/components/Score'
import useClassName from '@/hooks/useClassName'
import Footer from '@/components/Footer'
import Questions from '@/components/Questions'

const ComponentRendered = { initial: <Form />, game: <Game />, score: <Score /> }


function App() {
  const mode = useSelector((state) => state.app.mode)
  const category = useSelector((state) => state.app.category)
  const currentCard = useSelector((state) => state.game.currentCard)

  const className = useClassName(styles, [
    'base',
    currentCard.category && currentCard.category.replace(/\s/g, '').toLowerCase()
  ])

  return (
    <div className={className}>
      {mode === 'showQuestionsList' ? <Questions category={category} /> : null}
      {ComponentRendered[mode]}
      <Footer />
    </div>
  )
}

export default App
