var console, window;
// First we create our function constructor:
var quiz = [],
    Question = function questionFunction(question, options, correct) {
        'use strict';
        this.question = question;
        this.options = options;
        this.correctAnswer = correct;
        
    };
// Declaring the push function to add questions to the quiz:
function addQuestion(question, optionsArr, correct) {
    'use strict';
    var questionare = new Question(question, optionsArr, correct);
    quiz.push(questionare);
}
addQuestion('What is my name ? ', ['Mario', 'Kimo', 'Tito'], 'Tito');
addQuestion('What is my age? ', [20, 29, 35], 29);
addQuestion('Where do I live? ', ['Egypt', 'Canada', 'US'], 'Egypt');
//Determiming the random question:
// determine the random index:
var runRandom, runQuestion, answer, correctIndex, correctAnswer, WrongAnswer;

correctAnswer = 0;
WrongAnswer = 0;
(function operation() {
    'use strict';
    
    var i = 1;
    while (i > 0 && answer !== 'exit') {
        runRandom = Math.floor(Math.random() * quiz.length);
// the random question:
        runQuestion = quiz[runRandom].question;
        console.log(runQuestion);
// the random options:
        for (i = 0; i < quiz[runRandom].options.length; i++) {
            console.log(i + ') ' + quiz[runRandom].options[i]);
        }
   // Creating the prompt window:
        answer = window.prompt(runQuestion + 'type "exit" to qiut!');
// comparing result with correct:
// correct index of the options is:
        correctIndex = quiz[runRandom].options.indexOf(quiz[runRandom].correctAnswer);
        if (answer  == correctIndex) {
            console.log('Great, your answer is correct.');
            correctAnswer += 1;
            console.log('Correct answers = ' + correctAnswer + '\nWrong answers  = ' + WrongAnswer);
        } else if (answer !== correctAnswer && answer !== 'exit') {
            console.log('Oops! wrong answer.');
            WrongAnswer += 1;
            console.log('Correct answers = ' + correctAnswer + '\nWrong answers  = ' + WrongAnswer);
        } else {
            break;
        }
        console.log('_____________');
        i++;
    }

    
}());


