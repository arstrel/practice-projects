//Made using class
class Question {
  constructor(question, answersArr, correct) {
    this.question = question,
    this.answers = answersArr,
    this.correct = correct
  }
}

const questions = [
  new Question('How are you doing?', ['Well', 'So so', 'Poorly'], '0'),
  new Question('Is JavaScript the best programming language ever known to man?', ['Maybe', 'Certainly', 'No!'], '1'),
  new Question('How many things one function should do?', ['As many as you like', 'Few', 'One'], '2'),
]

const askQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const draftedQuestion = questions[randomIndex];
  console.log(draftedQuestion.question);
  draftedQuestion.answers.map((eachA, i) => {
    console.log(`${i}: ${eachA}`);
  })

  handleAnswer(draftedQuestion)
}

const trackScore = () => {
  let score = 0;
  return (isCorrect) => {
    isCorrect && score++;
    return score
  }
}
const score = trackScore();

function handleAnswer (draftedQuestion) {
  let answer = prompt('Enter your answer or type "exit"');
  switch (answer){
    case draftedQuestion.correct:
      console.log('Correct!')
      console.log('Score: ' + score(true) )
      console.log('=-=-=-=-=-=-=');
      askQuestion()
      break;
    case 'exit':
      console.log('You fought well!');
      console.log('Final score ' + score(false));
      break;
    default:
      console.log('Not correct, try again');
      console.log('Score ' + score(false));
      console.log('=-=-=-=-=-=-=');

      askQuestion()
  }
  
}

document.getElementById('play').addEventListener('click', askQuestion)