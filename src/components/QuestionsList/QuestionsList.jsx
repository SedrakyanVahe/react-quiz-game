import styles from './QuestionsList.module.css'
import { showQuestionsList } from '@/slices/appSlice'
import { useDispatch } from 'react-redux'

const categories = ['history', 'sport', '333']

const QuestionsList = () => {
  const dispatch = useDispatch()

  const handleReadQuestions = (category) => {
    dispatch(showQuestionsList(category))
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ulStyle}>
        {categories.map((category) => (
          <li className={styles.liStyles} key={category}>
            <button className={styles.btn} onClick={() => handleReadQuestions(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsList

