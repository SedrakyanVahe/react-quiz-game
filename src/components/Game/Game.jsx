import styles from './Game.module.css'

import Card from '@/components/Card'
import useGame from '@/hooks/useGame'

function Game() {
  const { ready, currentCard } = useGame()

  return <div className={styles.base}>{ready && <Card {...currentCard} />}</div>
}

export default Game
