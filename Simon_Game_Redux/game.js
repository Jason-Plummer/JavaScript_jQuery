// alert("Test"); // Test if JS file is connected
// $("h2").text("Test"); // Test if jQuery is connected

// $(document).ready(function() {

    var buttonColors = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var randomChosenColor;
    var audio;
    var userClickedPattern = [];
    let level = 0;
    var gameStarted = false;

    $(document).on("keydown", function() {
        if (!gameStarted) {
            $('h1').text('Level ' + level);
            nextSequence();
            started = true;
        }
    });
    

    $('.btn').on("click", function() {
        var colorSelected = this.id;
        userClickedPattern.push(colorSelected);
        
        playSound(colorSelected);
        animateColor(colorSelected);
      
        // console.log(userClickedPattern + "while loopa");   
        checkAnswer(userClickedPattern.length - 1); 

        

        console.log("User Pattern: " + userClickedPattern);
        console.log("Game Pattern: " + gamePattern);

    });

    function nextSequence() {
        userClickedPattern = [];
        level++;
        $('h1').text('Level ' + level);

        var randomNumber = Math.floor(Math.random() * 4);
        randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        animateColor(randomChosenColor);
        playSound(randomChosenColor);
        // console.log(gamePattern);
        
        

        
    }

    function playSound(chosenColor) {
        audioPath = "./sounds/";
        var audio = new Audio(audioPath + chosenColor + ".mp3");
        // console.log(chosenColor);
        audio.play();
    }

    function animateColor(randomChosenColor) {
        $('#' + randomChosenColor).animate({ opacity: .5}, 100);
        $('#' + randomChosenColor).animate({ opacity: 1}, 100);

    }

    function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            console.log("correct");

            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function() {
                    nextSequence();
                }, 1000);
            }
        } else {
            console.log("wrong");
            playSound("wrong");
            gameOver();
            startOver();
        }
    }

    function gameOver(){
        $('body').addClass("game-over");
        $('h1').text("Game Over, Press Any Key to Restart")
        setTimeout(function() {
            $('body').removeClass("game-over");
        }, 200);
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        gameStarted = false;
    }
    




    


    
// });



    

