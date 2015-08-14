// $(document).ready(function() {
//     console.log("The document is ready!");

// layout qBank = [   { category:"category1", questions:[{set1},{set2},{set3}...] }, { category:"category2", questions:[{set1},{set2},{set3}...] }    ]
var qBank = [
              {
                category: "JavaScript",
                questions:
                  [
                    {
                    //set1
                      question: "What does the following expression return? <br> 3 / 'bob';",
                      choices: ["undefined", "ReferenceError", "NaN"],
                      correctAnswer: "NaN"
                    }, {
                    //set2
                      question: "What is a method?",
                      choices: ["Used to describe an object.", "A function assigned to an object.", "Performs a function on one or more operands or variables."],
                      correctAnswer: "A function assigned to an object."
                    }, {
                    //set3
                      question: "Which company first implemented the JavaScript language?",
                      choices: ["Netscape Communications Corp.", "Microsoft Corp.", " Sun Microsystems Corp."],
                      correctAnswer: "Netscape Communications Corp."
                    }
                  ]
              }, {
                category: "HTML",
                questions:
                  [
                    {
                      question: "When was the first release of a browser supporting JavaScript?",
                      choices: ["1996", "1995", " 1994"],
                      correctAnswer: "1995"
                    }, {
                      question: "The original name of JavaScript was?",
                      choices: ["LiveScript", "ECMAScript", "WireScript"],
                      correctAnswer: "LiveScript"
                    }, {
                      question: "Which of the following browsers was the first to support JavaScript?",
                      choices: ["Microsoft Internet Explorer 2.0 beta", "Netscape Navigator 2.0 beta", "Opera 2.0 beta"],
                      correctAnswer: "Netscape Navigator 2.0 beta"
                    }
                  ]
              }, {
                category: "CSS",
                questions:
                  [
                    {
                      question: "Applying a function to a value and creating a new value is called what?",
                      choices: ["declaration", "projection", "expression"],
                      answer: "projection"
                    }, {
                      question: "Applying a function to a value and creating a new value is called what?",
                      choices: ["declaration", "projection", "expression"],
                      answer: "projection"
                    }, {
                      question: "All of the following are used for projection?",
                      choices: ["declaration", "projection", "expression"],
                      correctAnswer: "projection"
                    }
                  ]
              }
            ]



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

//////////////////////////Question Methods//////////////////////////

//change innerHTML of btn elements to reflect choices
var test = function() {
  var shuffleQ = shuffle(qBank);
  //iterate through qBank and grab choices from array then shuffle them
  for (var i = 0; i < shuffleQ.length; i++) {
    //grab the choices array within the qBank array
    var qChoices = qBank[i].questions[i].choices;

    console.log(qChoices);
    console.log(qBank);
  };
    $('#qBox').append("<h5>"+qBank[0].questions[0].question+"</h5>");
    $('#A').append(qBank[0].questions[0].choices[0]);
    $('#B').append(qBank[0].questions[0].choices[1]);
    $('#C').append(qBank[0].questions[0].choices[2]);
}

test();

//
// Question.prototype.form = function(){

// };

//////////////////////////Utilities//////////////////////////
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function generateQuestions() {
    console.log(q[i].choices);
    $('#quiz-container, #btn-container .submitBtn').fadeIn('slow');
    var txt = "<h3>" + q[i].question + "</h3><br>";
    $(q[i].choices).each(function (idx, value) {
        console.log(value);
        txt += "<input type='radio' name='choice' value='" + value + "' />" + " " + value + "<br><br>";
    });
    ansWer = q[i].correctAnswer;
    $('.quiz').html(txt);
    i = ++i % q.length;
}

$('.getStarted').on('click', function () {
    $(this).parent().fadeOut(200);
    generateQuestions();
});

$('.submitBtn').on('click', function (e) {
    e.stopPropagation();
    console.log($('.quiz input:checked').val());
    if (ansWer == $('.quiz input:checked').val()) generateQuestions();

});



// });



// }); //DOCUMENT ready
