// TODO, REMOVE THIS FILE
const questions = []

// const lis = document.querySelectorAll('#l1 > li:nth-child(-n+2)');
const lis = document.querySelectorAll('#l1 > li');

let id = 1

lis.forEach((li) => {
  const questionTextElements = li.querySelectorAll('.s1')
  const correctAnswerElement = li.querySelectorAll('.s2')
  const incorrectAnswerElements = Array.from(li.querySelectorAll('ul[id^="l"] > li > p'))

  if (questionTextElements && correctAnswerElement && incorrectAnswerElements.length > 0) {
    let questionText, correctAnswer

    questionTextElements.forEach((q) => {
      if (!!q.textContent) {
        questionText += q.textContent
      }
    })

    questionTextElements.forEach((a) => {
      if (!!a.textContent) {
        correctAnswer += a.textContent
      }
    })

    const incorrectAnswers = incorrectAnswerElements
      .filter((answer) => answer !== correctAnswerElement && !answer.querySelector('.s2'))
      .map((p) => p.textContent)

    const question = {
      id: id++,
      correctAnswer: correctAnswer,
      incorrectAnswers: incorrectAnswers,
      question: {
        text: questionText
      }
    }

    questions.push(question)
  }
})

console.log(JSON.stringify(questions, null, 2))