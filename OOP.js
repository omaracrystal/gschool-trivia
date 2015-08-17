//////////////////////////Question contructor//////////////////////////
function QuestionBank (category) {
  this.category = category
}

function QuestionGenerator(category, question, choices, answer) {
    this.category = category,
    this.question = question,
    this.choices = choices,
    this.correctAnswer = answer
}
