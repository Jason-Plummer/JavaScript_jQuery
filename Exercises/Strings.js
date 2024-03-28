//Slice

// An alert will display a shortened version of the text entered into the prompt
alert(prompt("Write your tweet").slice(0,256)) ;



//Format name
var name = prompt("What is your name?");
alert("Hello " + name.slice(0,1).toUpperCase() + name.slice(1, name.length).toLowerCase());


// Count number of characters and inform user how many are left
var a = prompt(); 
const maxLength = 256;
alert("You have written " + a.length + " characters and you have " + (maxLength - a.length) + " characters remaining.");

