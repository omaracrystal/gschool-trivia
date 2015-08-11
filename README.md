#Front End Project Proposal#

##gSchool Trivia##

####Description:####
**gSchool Trivia** game will be similar to Trivia Crack. Trivia Crack is an app game that allows users to submit questions with 3 potential answers and a correct answer. gSchool Trivia will be similar to this strategy by allowing gSchool students and instructors to contribute to the questionnaire pool by selecting a category and inputting the following fields:
  * Category (pick one): HTML, JAVASCRIPT, CSS, JQUERY, DOM
  * Questions: “Is this is where I input a question?”
  * Correct Answer: “Yes that is where you input a question.”
  * Three Wrong Answers: [“first wrong”, “second wrong”, “third wrong”]

This information is screened by the moderator and then approved or rejected to be apart of the trivia questions. One of the main attractions is the spinner for this game. The spinner will be split up into 6 sections to match the categories above. When the player answers correctly he or she wins a point and incorrectly he or she loses a point. He or she can compare their scores with other gSchool students.

The two images below is a quick reference of what is already in code:

![](/images/trivia1.png)

![](/images/trivia2.png)

####Technologies planning to use:####

 * Linking profiles of gSchool students from either facebook, github or slack (whatever seems the easiest per instructor’s recommendation).

####Plans to improve user interface:####
* Place spinner in the center and once the spinner lands on a category the questionnaire form will appear in front of the spinner.
* The questionnaire’s potential answers will be full size buttons instead of being a input selector. This will allow faster answering capabilities
* I hope to have time to implement a timer so that the player answers the questions quickly
* When answer is answered correctly the button will highlight to green. If answered incorrectly the button will turn red.
* I would like to add a flag in the bottom left corner if the player is certain the answer needs improvement or is actually incorrect. This question will then be passed into a “flag” array to be evaluated by the mediator again.
