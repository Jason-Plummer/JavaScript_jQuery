
// Add event listener to the button, when it's clicked the function handleClick() will run
function addListeners () {

    // Get the number of drums by looking at how many child elements belong to the div holding the buttons
    //var numOfDrums = document.getElementById("buttons").childElementCount;

    // Alternative solution to get length the number of drums, more future proof if there are other types of buttons on page
    var numDrumButtons = document.querySelectorAll(".drum").length;

    // Add event listeners that use an anonymous function
    for (let i = 0; i < numDrumButtons; i++) {
        document.getElementsByClassName("drum")[i].addEventListener("click", function() {
            
            //this.style.color = "white";

            switch (this.textContent) {
                case "w": 
                    new Audio("./sounds/tom-1.mp3").play();
                    break;

                case "a":
                    new Audio("./sounds/tom-2.mp3").play();
                    break;

                case "s": 
                    new Audio("./sounds/tom-3.mp3").play();
                    break;

                case "d":
                    new Audio("./sounds/tom-4.mp3").play();
                    break;

                case "j": 
                    new Audio("./sounds/snare.mp3").play();
                    break;

                case "k":
                    new Audio("./sounds/crash.mp3").play();
                    break;

                case "l":
                    new Audio("./sounds/kick-bass.mp3").play();
                    break;
                    
                default:                
                    console.log(this.textContent);

            } 
        });

        //document.querySelector("button").addEventListener("click", handleClick);
    }
}


addListeners();

