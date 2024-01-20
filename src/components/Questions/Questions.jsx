import styles from './Questions.module.css'
// import useClassName from '@/hooks/useClassName'
// import Button from '@/components/Button'

function Questions({ category }) {

  return (
    // <h1>aaaaa: {category}</h1>


    <div className="quiz-container">
      <div className="question">
        Which country blew up a Greenpeace ship in New Zealand?
      </div>
      <ul className="answers">
        <li className="answer">France sssssssssssssss</li>
        <li className="answer">Italy</li>
        <li className="answer">China</li>
        <li className="answer">Russia</li>
      </ul>


    </div>
  )
}

export default Questions
