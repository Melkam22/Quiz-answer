 
//writting 3 functions: getQuestionIndex, isEnded and guess ex: create questions
//first let's start the function by verifying if the questions are finished or not
function ashu(){//populate
    if(quiz.isEnded()){
        showScores();
    } else{
    //else we ll show it at the question container, so we ve to select it below
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //to populate choices by elements from our array list
        let choices = quiz.getQuestionIndex().choices;
        for(let i=0; i< choices.length; i++){
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        ashu();
    }
}

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
    element.innerHTML = gameOverHtml;
}

function showScores(){
    let gameOverHtml = "<h1>Result</h1>";   //creating html element
    gameOverHtml += "<h2 id='score' style='margin-left: 35%'>Your scores: " + quiz.score + "</h2>";
    let element = document.getElementById("quiz"); //replace the entrie html elmt 'quiz' with the below
    element.innerHTML = gameOverHtml;
}


let questions = [ 
    new Question("What is the capital city of Germany?", ["Munick", "Berlin", "Bayer", "Bonn"], "Berlin"),
    new Question("What is the new virus called?", ["Corona","Sars","Covid-19", "Sali"],"Covid-19"),
    new Question("Where is the headquarters of WHO", ["New York", "Addis-Ababa", "Belgium", "Geneva"], "Geneva")
];

let quiz = new Quiz(questions);

ashu();
