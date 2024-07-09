import styles from './QuestionsList.module.css'
import { showQuestionsList } from '@/slices/appSlice'
import { useDispatch } from 'react-redux'

const categories = [
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՍԱՀՄԱՆԱԴՐԱԿԱՆ ԻՐԱՎՈՒՆՔ',
  '«ՄԱՐԴՈՒ ԻՐԱՎՈՒՆՔՆԵՐԻ ԵՎ ՀԻՄՆԱՐԱՐ ԱԶԱՏՈՒԹՅՈՒՆՆԵՐԻ ՊԱՇՏՊԱՆՈՒԹՅԱՆ ՄԱՍԻՆ» ԵՎՐՈՊԱԿԱՆ ԿՈՆՎԵՆՑԻԱ (ՆԵՐԱՌՅԱԼ ՄԱՐԴՈՒ ԻՐԱՎՈՒՆՔՆԵՐԻ ԵՎՐՈՊԱԿԱՆ ԴԱՏԱՐԱՆԻ ՈՐՈՇՈՒՄՆԵՐ)',
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔԱՂԱՔԱՑԻԱԿԱՆ ԻՐԱՎՈՒՆՔ',
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔԱՂԱՔԱՑԻԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ԻՐԱՎՈՒՆՔ',
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔՐԵԱԿԱՆ ԻՐԱՎՈՒՆՔ',
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔՐԵԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ԻՐԱՎՈՒՆՔ',
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՎԱՐՉԱԿԱՆ ԻՐԱՎՈՒՆՔ',
  'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՎԱՐՉԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ԻՐԱՎՈՒՆՔ'
]

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
