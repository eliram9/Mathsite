$(function(){
    //click on start reset button
    $("#startreset").click(function(){ //we are playing
    if(playing == true){
            //reload page
    location.reload(); }else{
    //we are not playing
    playing = true; //game initiated
    //set score to 0
    score = 0; //set score to 0 $("#scorevalue").html(score);
    //show trials left
    $("#trialsLeft").show(); trialsLeft = 3; addHearts();
            //hide game over box
    $("#gameOver").hide();
    //change button text to reset game
    $("#startreset").html("Reset Game");
            //start sending fruits
            startAction();
        }
    });
    //slice a fruit
    $("#fruit1").mouseover(function(){ score++;
    $("#scorevalue").html(score); //update score // document.getElementById("slicesound").play();
    $("#slicesound")[0].play();//play sound //stop fruit
    clearInterval(action); //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
        //send new fruit
    setTimeout(startAction, 500); })
});
