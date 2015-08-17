/////////functions//
///trivia question form
var userChoice = $($(".btn.choice")[0]).text();

userChoice.on("click", function answerTrivia (e) {
  e.stopPropagation();
  score = 0
  answer = qBank[this].questions[this].correctAnswer
  console.log(userChoice);
  console.log(answer);
  if (answer == userChoice {
    //add point
    score += 1;

    //delay from then hide it
    //delay
    $("#formWrapper").hide();

    //append score to DOM
    $().append(score);

  } else {
    //take away point
    score -= 1;

    //form hides
    //delar
    $("#formWrapper").hide();

    //append score to DOM
    $().append(score);
  }
  console.log(score);
});


//once the button "Add Your Own Question" is clicked show the question form
$('#btnAddQ').on("click", function(){
  $("#addForm").show();
});
