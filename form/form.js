$(document).ready(function() {
    console.log("The document is ready!");

$("#formWrapper").hide();

$("#addForm").hide();

}); //DOCUMENT ready


var qBank = [
  {
    category: "JavaScript",
    questions:
      [
        {
        //set1
          question: "What does the following expression return? <br> 3 / 'bob';",
          choices: ["undefined", "ReferenceError", "NaN"],
          answer: "NaN"
        }, {
        //set2
          question: "What is a method?",
          choices: ["Used to describe an object.", "A function assigned to an object.", "Performs a function on one or more operands or variables."],
          answer: "A function assigned to an object."
        }, {
        //set3
          question: "Which company first implemented the JavaScript language?",
          choices: ["Netscape Communications Corp.", "Microsoft Corp.", " Sun Microsystems Corp."],
          answer: "Netscape Communications Corp."
        }
      ]
  }, {
    category: "HTML",
    questions:
      [
        {
          question: "When was the first release of a browser supporting JavaScript?",
          choices: ["1996", "1995", " 1994"],
          answer: "1995"
        }, {
          question: "The original name of JavaScript was?",
          choices: ["LiveScript", "ECMAScript", "WireScript"],
          answer: "LiveScript"
        }, {
          question: "Which of the following browsers was the first to support JavaScript?",
          choices: ["Microsoft Internet Explorer 2.0 beta", "Netscape Navigator 2.0 beta", "Opera 2.0 beta"],
          answer: "Netscape Navigator 2.0 beta"
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
          answer: "projection"
        }
      ]
  }
]


//////////////////////////Question Methods////////////////////////
///////Utilities////////
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

//change innerHTML of btn elements to reflect choices
var test = function() {
  var shuffleQ = shuffle(qBank);

  //iterate through qBank and grab choices from array then shuffle them
  for (var i = 0; i < shuffleQ.length; i++) {
    //grab the choices array within the qBank array
    var qChoices = qBank[i].questions[i].choices;

    console.log(qChoices);

  };

    $('#qBox').append("<h5>"+qBank[0].questions[0].question+"</h5>");
    $('#A').append(qBank[0].questions[0].choices[0]);
    $('#B').append(qBank[0].questions[0].choices[1]);
    $('#C').append(qBank[0].questions[0].choices[2]);
    $('#qBox').append("<div name=" + qBank[0].questions[0].correctAnswer +">"+ "</div>")
}

test();



/////////functions//
///trivia question form
score = 0

$(".btn.choice").on("click", function() {

  var userChoice = $(this).text()
  var answer = qBank[0].questions[0].answer

  console.log(userChoice);
  console.log(answer);

  if (answer == userChoice)  {
    //add point
    score += 1;
    } else {
    //take away point
    score -= 1;
    }
    //delay then hide it
  $("#formWrapper").hide();
  //clear out score
  $("#scoreKeeper").empty();
  //append score to DOM
  $("#scoreKeeper").append("<h2>"+score+"</h2>");
  console.log(score);

});


//once the button "Add Your Own Question" is clicked show the question form
$('#btnAddQ').on("click", function(){
  $("#addForm").show();
});

