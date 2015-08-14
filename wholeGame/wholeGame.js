$(document).ready(function() {
    console.log("The document is ready!");
});


var ansWer = "";
    $('#quiz-container, #btn-container .submitBtn').hide();
//whenever I get rid of the "(" symbol right before this function the quiz container is visible why???
(function () {
        var i = 0;
        var q = [{
            question: "What does the following expression return? <br> 3 / 'bob';",
            choices: ["undefined", "ReferenceError", "NaN"],
            correctAnswer: "NaN"
        }, {
            question: "What is a method?",
            choices: ["Used to describe an object.", "A function assigned to an object.", "Performs a function on one or more operands or variables."],
            correctAnswer: "A function assigned to an object."
        }, {
            question: "Which company first implemented the JavaScript language?",
            choices: ["Netscape Communications Corp.", "Microsoft Corp.", " Sun Microsystems Corp."],
            correctAnswer: "Netscape Communications Corp."
        }, {
            question: "When was the first release of a browser supporting JavaScript?",
            choices: ["1996", "1995", " 1994"],
            correctAnswer: "1995"
        },
        {
            question: "The original name of JavaScript was?",
            choices: ["LiveScript", "ECMAScript", "WireScript"],
            correctAnswer: "LiveScript"
        }, {
            question: "Which of the following browsers was the first to support JavaScript?",
            choices: ["Microsoft Internet Explorer 2.0 beta", "Netscape Navigator 2.0 beta", "Opera 2.0 beta"],
            correctAnswer: "Netscape Navigator 2.0 beta"
        }, {
            question: "The JavaScript international standard is called?",
            choices: ["DHTML JavaScript Standard", "ISO-262 Standard", "ECMA-262 Standard"],
            correctAnswer: "ECMA-262 Standard"
        }, {
            question: "Applying a function to a value and creating a new value is called what?",
            choices: ["declaration", "projection", "expression"],
            correctAnswer: "projection"
        }, {
            question: "All of the following are used for projection?",
            choices: ["declaration", "projection", "expression"],
            correctAnswer: "projection"
        }

        ];

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
})();



