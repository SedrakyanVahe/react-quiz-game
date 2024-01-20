import styles from './Questions.module.css'
import sportData from '../../../database/sport.json'
import historyData from '../../../database/history.json'

function Questions({ category }) {
  let data = null

  if (category === 'sport') {
    data = sportData
  }

  switch (category) {
    case 'sport':
      data = sportData
      break
    case 'history':
      data = historyData
      break
    default:
      data = sportData
      break
  }

  return (
    <div className={styles.questionsBox}>
      <h2 className={styles.category} >{category}</h2>
      <div className={styles.questions}>
        {data.map((item) => (
          <div key={item.id} className={styles.questionBox}>
            <h3 className={styles.question}>
              {item.question.text}
            </h3>
            <ul className={styles.answers}>
              <li className={styles.correct}>{item.correctAnswer}</li>

              {item.incorrectAnswers.map((ans) => (
                <li key={ans} className={styles.answer}>{ans}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions
