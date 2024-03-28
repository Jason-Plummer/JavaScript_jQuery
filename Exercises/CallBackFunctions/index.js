// Callback function: a function that is passed as an argument to another function

// Add event listener to the document that listens for a keydown
// Upon keydown, run the respondToKey function, essentially the event listener is calling back to another method
document.addEventListener("keydown", respondToKey);

function respondToKey(event) {
    console.log("Key Pressed.");
}

// Add an event listener to the h1 tag via the element ID
// The callback function isn't called by us, it's call by the object that experiences the click
// The event (e) will be sent to the console log
document.getElementById("mainHeading").addEventListener("click", function(e) {
    console.log(e);
});


function anotherAddEventListener(typeOfEvent, callback) {
    const eventThatHappened = {
        eventType: "keydown",
        key: "p",
        durationOfKeydown: 2
    }    
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}


document.addEventListener("keydown", function(event) {
    console.log(event);
})


function callOnMeee(callback) {
    console.log("Call on meee");


    setTimeout(() => {
        callback();
      }, 5000);    
}

function callOnYou() {
    console.log("Call on you?")

}

