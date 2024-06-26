import styles from './Answer.module.css'
import useClassName from '@/hooks/useClassName'
import Button from '@/components/Button'

function Answer({ label, correct, selected, done, onClick }) {
  const className = useClassName(styles, [
    'base',
    done && (correct ? 'correct' : selected && 'wrong')
  ])

  return (
    <Button className={className} onClick={onClick}>
      {label}
    </Button>
  )
}

export default Answer
