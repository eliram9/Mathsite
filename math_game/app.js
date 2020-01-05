var playing = false;
var score;
var action;
var time_remaining;
var correct_answer;

// click on start/reset
document.getElementById('start_reset').onclick = function() {
    // if we are playing
    if (playing == true) {
        location.reload(); // reload the page
    }else { 
        playing = true;
        score = 0;
        document.getElementById('score_value').innerHTML = score;
        // hide the "game over" banner 
        hide('game_over');

        // and show the timer
        show('timer');
            time_remaining = 12;
        document.getElementById('clock').innerHTML = 12;

        // and replace "start" with "reset
        document.getElementById('start_reset').innerHTML = 'Reset Game';

        // timer countdown
        startCountdown();

        // generate new Q&A
        generateQA();
    }
}

// functions
startCountdown = () => {
    action = setInterval(function () {
        time_remaining -= 1;
        document.getElementById('clock').innerHTML = time_remaining;
            // red alert
            if(time_remaining <= 10) {
                document.getElementById('timer').style.backgroundColor = 'red';
                document.getElementById('timer').style.color = 'white';
            // game over 
            } if( time_remaining === 0) {
                clearInterval(action);
                show('game_over');
                document.getElementById('game_over').innerHTML = '<p>Game Over!</p><p>YOUR SCORE IS: ' + score + ' </p>'
                hide('timer');
                hide('correct');
                hide('wrong');
                playing = false;
                document.getElementById('start_reset').innerHTML = 'Start Game';
            }
    }, 1000);
}

hide = (id) => {
    document.getElementById(id).style.display = 'none';
}

show = (id) => {
    document.getElementById(id).style.display = 'block';
}

// generate questions and multiple answers. 
generateQA = () => {
    var x = 1 + Math.round(Math.random() * 9);
    var y = 1 + Math.round(Math.random() * 9);
    correct_answer = x * y;
    
    document.getElementById('question').innerHTML = x + ' X ' + y;

    // random box num the correct answer.
    var correct_position = 1 + Math.round(Math.random() * 3);
    document.getElementById('box' + correct_position).innerHTML = correct_answer;

    // fill the other boxes with wrong answers
    for(i = 1; i < 5; i++) {
        if(i != correct_position) {
            var wrong_answer;
            /* we will use the do/while statment to -DO- generate a "wrong_number"  at least once but (if) -WHILE- the 
               number that we got is = to "correct_answer" we will generate a new number once again. */
               do{
                wrong_answer = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9));
               }while(
                   wrong_answer == correct_answer
               )
            // console.log(wrong_answer);
            document.getElementById('box' + i).innerHTML = wrong_answer;
        }
    }
}
