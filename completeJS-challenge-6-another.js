//Made with function constructor and functions on prototype property

//using IIFE for privacy and avoiding name space collision
(function() {



function Question (question, answers, correct) {
  this.question = question,
  this.answers = answers,
  this.correct = correct
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for(index in this.answers) {
    console.log(`${index}: ${this.answers[index]}`);
  }
}

Question.prototype.checkAnswer = function (ans, callback) {
  ans === this.correct
  ? console.log('Correct! Score: ' + callback(true))
  : console.log('Wrong! Score: '+ callback(false));
}

const questions = [
  new Question('How are you doing?', ['Well', 'So so', 'Poorly'], 0),
  new Question('Is JavaScript the best programming language ever known to man?', ['Maybe', 'Certainly', 'No!'], 1),
  new Question('How many things one function should do?', ['As many as you like', 'Few', 'One'], 2),
]

const trackScore = () => {
  let score = 0;
  return (isCorrect) => {
    isCorrect && score++;
    return score
  }
}
const score = trackScore();


const nextQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const draftedQuestion = questions[randomIndex];
  draftedQuestion.displayQuestion()
  
  const answer = prompt('Enter your answer or type "exit"');

  if(answer !== 'exit') {
    //prompt by default returns a string 
    // + converts it to a number 
    draftedQuestion.checkAnswer(+answer, score)

    //recursion
    nextQuestion();
  }
}

nextQuestion();



})();






