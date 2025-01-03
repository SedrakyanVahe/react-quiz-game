import styles from './Form.module.css'
import { useDispatch } from 'react-redux'
import useClassName from '@/hooks/useClassName'
import { startGame } from '@/slices/appSlice'
import FlyingBox from '@/components/FlyingBox'
import Button from '@/components/Button'
import favicon from '/favicon.svg'
import QuestionsList from '../QuestionsList/QuestionsList'

function Form() {
  const dispatch = useDispatch()

  const handleStartGame = (ev) => {
    ev.preventDefault()
    dispatch(startGame())
  }

  const playClassName = useClassName(styles, ['play'])

  return (
    <form className={styles.main} onSubmit={handleStartGame}>
      <FlyingBox className={styles.base}>
        <div className={styles.header}>
          <object data={favicon} type='image/svg+xml' aria-label='Webpage icon' />
          <h1>ՀՀ սահմանադրություն</h1>
        </div>

        <QuestionsList action={'play'} />
        {/* <div className={playClassName}>
          <Button primary>Սկսել</Button>
        </div> */}
      </FlyingBox>

      {/* <FlyingBox className={styles.base}>
        <div className={styles.header}>
          <object data={favicon} type='image/svg+xml' aria-label='Webpage icon' />
          <h1>Հարցեր</h1>
        </div>

        <QuestionsList />
      </FlyingBox> */}
    </form>
  )
}

export default Form
