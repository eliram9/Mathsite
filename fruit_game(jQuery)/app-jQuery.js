var playing = false;
var score;
var livesLeft;
var step;
var move;
var fruits = ['apple', 'banana', 'cherry', 'grape', 'grenade', 'lemon', 'orange', 'pear', 'pineapple'];


$(document).ready(function() {
    // When a user click on start/reset game button.
    $('#start_reset').click(function() {
        // if we are  playing, reload the page
        if(playing == true) {
            location.reload();
        }else {
            $('#game_over').hide();

            playing = true;
            // set score to 0 
            score = 0; 
            $('#score_value').html(score);

            // change button text to "reset"
            $('#start_reset').html('Reset Game');

            // show user lives
            $('#lives').show();
            livesLeft = 3;
            addLives();   
            
            // start sending fruits
            startAction();
        }
    });

    // slice fruits
    $('#fruit').click(function(){
        score++;
        $('#score_value').html(score);
        clearInterval(move);
        $("#fruit1").hide("explode", 500);
        //send new fruit
        setTimeout(startAction, 500); })
    });

// Main Functions Section
addLives = () => {
    $('#lives').empty();
    for(i = 0; i < livesLeft; i++) {
        
        $('#lives').append(' <img src="images/heart.png" class="heart"> ');
    }
}

startAction = () => {
    $('#fruit').show();
    
    // choose a random fruit
    generateFruit();
    
    // generate a  random number for position between 5 and 545;
    var fruit_position = Math.floor(Math.random() * 545 ) + 5;
    $('#fruit').css({'left': fruit_position, 'top': -40});

    // generating the step (speed) of a random fruit.
    step = Math.floor(Math.random() * 3) + 1;

    // move fruit down one step every 10ms;
    move = setInterval(function() {
        $('#fruit').css('top', $('#fruit').position().top + step);

        // check if the fruit is too low (if the user miss the fruit on the white screen)
        if($('#fruit').position().top > $('#fruitsTarget').height()) {
           
            // if we still have livesLeft
            if(livesLeft > 1) {
                // so, generate a new fruit (lines 49-63)
                $('#fruit').show();
                generateFruit();
                var fruit_position = Math.floor(Math.random() * 545 ) + 5;
                $('#fruit').css({'left': fruit_position, 'top': -40});
                step = Math.floor(Math.random() * 5) + 1;

                //  reduce one heart from livesLeft
                livesLeft --;
                addLives();
                
            } else {
                playing = false;
                $('#start_reset').html('Start Game');
                $('#lives').hide();
                $('#game_over').show();
                $('#game_over').html('<p>GAME OVER!</p> <p>Your Score is: ' + score +' </p>');

                // stopping the setInterval func which applying to the moce variable 
                stopMove();
            }
        }

    }, 10);   
}

// generate a random fruit
generateFruit = () => {
    var fruit_num  = Math.round(Math.random() * 8);
    $('#fruit').attr('src', 'images/' + fruits[fruit_num] + '.png');
}

// stopping moving the fruits down & hide fruits when the game is over.
stopMove = () => {
    clearInterval(move);
    $('#fruit').hide();
}


