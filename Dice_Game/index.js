function rollDice() {

    var rollArray = [];
    var numPlayers = 2;


    // Randomize the winner
    for (let i = 0; i < numPlayers; i++) {
        rollArray.push(Math.floor((Math.random() * 6) + 1));
    }

    document.querySelector(".img1").setAttribute("src", "images/dice" + rollArray[0] + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + rollArray[1] + ".png");

    if (rollArray[0] > rollArray[1]) {
        document.querySelector("h1").textContent = "🚩 PLAYER 1 WINS!";
    } else if (rollArray[0] < rollArray[1]) {
        document.querySelector("h1").textContent = "PLAYER 2 WINS! 🚩";
    } else {
        document.querySelector("h1").textContent = "DRAW!";
    }     
}    
