$(document).ready(function() {
    console.log("The document is ready!");

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


});//DOCUMENT READY
