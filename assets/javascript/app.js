// GLOBAL VARIABLES
//-------------------------------------------------------------

// How many user got correct
var correct = 0;
// How many user got wrong
var wrong = 0;
// How many user left unanswered
var unanswered = 0;
// Timer ammount of time in seconds
var number = 20;
// Where the jQuery game will be displayed in html game-content
var game = $('.game-content');
// Number of questions answered
var questionCounter = 0;

// FUNCTIONS
//-------------------------------------------------------------

// Start function that contains the start button
function start() {
    // Adding a button inside of the game-content div
    $('.game-content').html('<button></button>');
    // Adding a class to the button
    $('button').addClass('btn btn-lg btn-block');
    // Labe of the button
    $('button').html('Start');
}

// Initiate start function
start();

// When button is clicked do the following
$('.btn').click (function() {
    // Start a timer that decrements by 1 second
    startTime = setInterval(decrement, 1000);
    // Console.log when the button is clicked
    console.log("you have clicked");

    // What to display after the start button is clicked
    game.html("<b><h3>What is 5+5?</b></h3>");
    game.append("<br/>")
    game.append("   10   " + '<input type="radio" class="demo userInput" name="answers1" value="true">').addClass('text-center');
    game.append("   12   " + '<input type="radio" class="demo userInput" name="answers1" value="false">').addClass('text-center');
    game.append("   2   "  + '<input type="radio" class="demo userInput" name="answers1" value="false">').addClass('text-center');

    game.append("<b><h3>What is 55+5?</b></h3>");
    game.append("<br/>")
    game.append("   80   " + '<input type="radio" class="demo userInput" name="answers2" value="false">').addClass('text-center');
    game.append("   36   " + '<input type="radio" class="demo userInput" name="answers2" value="false">').addClass('text-center');
    game.append("   60   " + '<input type="radio" class="demo userInput" name="answers2" value="true">').addClass('text-center');

    game.append("<b><h3>What is 20*5?</b></h3>");
    game.append("<br/>")
    game.append("   100   " + '<input type="radio" class="demo userInput" name="answers3" value="true">').addClass('text-center');
    game.append("   120   " + '<input type="radio" class="demo userInput" name="answers3" value="false">').addClass('text-center');
    game.append("   20   " + '<input type="radio" class="demo userInput" name="answers3" value="false">').addClass('text-center');
 
 $("input[type='radio']").click(function(){
    console.log(this.value);
            var radioValue = $("input[name='answers1']:checked").val();
            if(radioValue === true){
                console.log(this.value);
                correct++
            } else {
                wrong++
            }
        });
            var radioValue = $("input[name='answers2']:checked").val();
            if(radioValue === true){
                console.log(this.value);
                correct++
            } else {
                wrong++
            }

            var radioValue = $("input[name='answers3']:checked").val();
            if(radioValue === true){
                console.log(this.value);
                correct++
            } else {
                wrong++
            }

});


function decrement() {

    number--

    $("h2").html("Time Remaining: " + number);


    if (number === 0) {

        stop();

        console.log("Time Up!");
    }
}


function stop() {
    clearInterval(startTime);
    $('.game-content').html('<h1>All Done!</h1>').addClass('text-center');
    $('.game-content').append('<p>Correct Answers: ' + correct + '</p>').addClass('text-center');
    $('.game-content').append('<p>Incorrect Answers: ' + wrong + '</p>').addClass('text-center');
    $('.game-content').append('<p>Unanswered: ' + unanswered + '</p>').addClass('text-center');

}





//    $("button").on("click", function() {
//   //  Set the button alert's timeout to run three seconds after the function's called.
//   startTime = setTimeout(function() {

//   }, 4000);
// });





// CALLING FUNCTIONS
//-------------------------------------------------------------
