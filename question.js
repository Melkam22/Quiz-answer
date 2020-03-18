//3 elements to target, for the multiple question choice

function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}