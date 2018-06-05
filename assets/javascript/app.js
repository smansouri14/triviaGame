//Timer for the quiz after its done it stops the test and gives you your score
var number = 60;
var intervalId;

function run() {
    if (!intervalId)
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;

    $("#show-number").html("<h2>"+ "Time Left " + number + " seconds"+"</h2>");

    if (number === 0) {
        check ();
        stop();
    }
  }
  function stop() {
    clearInterval(intervalId);
  }

  run();

//function that checks users answer with the correct answer
function check () {
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;
var wrong = 0;

//checks answers to questions
    if (question1 == "49") {
        correct++;
    } else if (question1 != "49") {
        wrong++;
    } 

    if (question2 == "226") {
        correct++;
    } else if (question2 != "226") {
        wrong++;
    }  

    if (question3 == "1886") {
        correct++;
    } else if (question3 != "1886") {
        wrong++;
    }    
    
    if (question4 == "1996") {
        correct++;
    } else if (question4 != "1996") {
        wrong++;
    }   

    if (question5 == "Gilberto Silva") {
        correct++;
    } else if (question5 != "Gilberto Silva") {
        wrong++;
    } 

    if (question6 == "Aaron Ramsey") {
        correct++;
    } else if (question6 != "Aaron Ramsey") {
        wrong++;
    }    
    
    if (question7 == "Granit Xhaka") {
        correct++;
    } else if (question7 != "Granit Xhaka") {
        wrong++;
    }     
    
    if (question8 == "6th") {
        correct++;
    } else if (question8 != "6th") {
        wrong++;
    }  
    
    if (question9 == "Unai Emery") {
        correct++;
    } else if (question9 != "Unai Emery") {
        wrong++;
    }     
    
    if (question10 == "All") {
        correct++;
    } else if (question10 != "All") {
        wrong++;
    } 

//picture and message that pop up with your score
    var messages = ["You're an Invincible!", "You're a Legend!", "You need some practice", "You need a lot of help"];
    var picture = ["assets/images/iinvincibles.gif", "assets/images/henry.gif", "assets/images/block.gif", "assets/images/tottenham.gif"];
    var range;
     if (correct < 3) {
         range = 3;
     }
     var range;
     if (correct >= 3 && correct <7) {
         range = 2;
     }
     var range;
     if (correct >= 7 && correct <9) {
         range = 1;
     }
     var range;
     if (correct >= 9) {
         range = 0;
     }

    document.getElementById("afterCheck").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("numberCorrect").innerHTML = "Number Correct= " + correct;
    document.getElementById("numberWrong").innerHTML = "Number Wrong= " + wrong;
    document.getElementById("picture").src = picture[range];
    stop();
}
