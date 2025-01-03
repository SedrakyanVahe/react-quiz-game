import { useDispatch } from 'react-redux'
import styles from './QuestionsList.module.css'
import { setChapter, showQuestionsList } from '@/slices/appSlice'

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

const QuestionsList = ({ action }) => {
  const dispatch = useDispatch()

  const handleReadQuestions = (category) => {
    dispatch(showQuestionsList(category))
  }

  const handlePlayGame = (category, index) => {
    dispatch(setChapter(`chapter${index + 1}`))
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ulStyle}>
        {categories.map((category, i) => (
          <li className={styles.liStyles} key={category}>
            <button
              className={styles.btn}
              onClick={() =>
                action === 'play'
                  ? handlePlayGame(category, i)
                  : handleReadQuestions(category)
              }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsList
