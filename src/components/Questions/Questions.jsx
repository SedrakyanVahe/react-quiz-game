import styles from './Questions.module.css'
import chapter1 from '../../../database/chapter1.json'
import chapter2 from '../../../database/chapter2.json'
import chapter3 from '../../../database/chapter3.json'
import chapter4 from '../../../database/chapter4.json'
import chapter5 from '../../../database/chapter5.json'
import chapter6 from '../../../database/chapter6.json'
import chapter7 from '../../../database/chapter7.json'
import chapter8 from '../../../database/chapter8.json'

function Questions({ category }) {
  const dataMap = {
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՍԱՀՄԱՆԱԴՐԱԿԱՆ ԻՐԱՎՈՒՆՔ': chapter1,
    '«ՄԱՐԴՈՒ ԻՐԱՎՈՒՆՔՆԵՐԻ ԵՎ ՀԻՄՆԱՐԱՐ ԱԶԱՏՈՒԹՅՈՒՆՆԵՐԻ ՊԱՇՏՊԱՆՈՒԹՅԱՆ ՄԱՍԻՆ» ԵՎՐՈՊԱԿԱՆ ԿՈՆՎԵՆՑԻԱ (ՆԵՐԱՌՅԱԼ ՄԱՐԴՈՒ ԻՐԱՎՈՒՆՔՆԵՐԻ ԵՎՐՈՊԱԿԱՆ ԴԱՏԱՐԱՆԻ ՈՐՈՇՈՒՄՆԵՐ)':
      chapter2,
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔԱՂԱՔԱՑԻԱԿԱՆ ԻՐԱՎՈՒՆՔ': chapter3,
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔԱՂԱՔԱՑԻԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ԻՐԱՎՈՒՆՔ': chapter4,
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔՐԵԱԿԱՆ ԻՐԱՎՈՒՆՔ': chapter5,
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՔՐԵԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ԻՐԱՎՈՒՆՔ': chapter6,
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՎԱՐՉԱԿԱՆ ԻՐԱՎՈՒՆՔ': chapter7,
    'ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅԱՆ ՎԱՐՉԱԿԱՆ ԴԱՏԱՎԱՐՈՒԹՅԱՆ ԻՐԱՎՈՒՆՔ': chapter8
  }

  const data = dataMap[category] || chapter1

  return (
    <div className={styles.questionsBox}>
      <h2 className={styles.category}>{category}</h2>
      <div className={styles.questions}>
        {data.map((item) => (
          <div key={item.id} className={styles.questionBox}>
            <h3 className={styles.question}>{item.question}</h3>
            <ul className={styles.answers}>
              <li className={styles.correct}>{item.correctAnswer}</li>

              {item.incorrectAnswers.map((ans) => (
                <li key={ans} className={styles.answer}>
                  {ans}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions
