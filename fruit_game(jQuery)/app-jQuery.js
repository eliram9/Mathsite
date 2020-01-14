var playing = false;
var score;
var livesLeft;
var fruits = ['apple', 'banana', 'cherry', 'grape', 'grenade', 'lemon', 'orange', 'pear', 'pineapple'];


$(document).ready(function() {
    // When a user click on start/reset game button.
    $('#start_reset').click(function() {
        // if we are  playing, reload the page
        if(playing == true) {
            location.reload();
        }else {
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






});

// Main Functions
addLives = () => {
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

}

// generate a random fruit
generateFruit = () => {
    var fruit_num  = Math.round(Math.random() * 8);
    $('#fruit').attr('src', 'images/' + fruits[fruit_num] + '.png');
}


