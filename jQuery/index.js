$(document).ready(function() {
    // $("h1").css("color", "red");

    // $("h1").addClass("big-title")
    // $("h1").removeClass("big-title")

    // add multiple classes, using space between classes
    $("h1").addClass("big-title margin-50");

    // Writes to console log, checks if h1 has the class of margin-50 and will return boolean value
    console.log($("h1").hasClass("margin-50"));

    // Allows for adjusting the actual html
    // $("button").html("<em>Hey</em>");

    // Replace text
    // $("button").text("sup");

    // Get an attribute
    console.log($("img").attr("src"));

    // Set an attribute
    $("a").attr("href", "https://www.yahoo.com");

    // Get an attribute, return all classes
    console.log($("h1").attr("class"));

    // Add event listener and toggle to track status
    let h1ClickToggle = 0;
    $("h1").click(function() {
        if (h1ClickToggle === 0) {
            $("h1").css("color", "red");
            h1ClickToggle++;
        } else {
            $("h1").css("color", "yellow");
            h1ClickToggle--;
        }
    });


    // If using JavaScript, adding an event listener would take many more lines. A for each loop would be better though.
    // for (var i=0; i<5; i++) {
    //     document.querySelectorAll("button")[i].addEventListener("click", function() {
    //         document.querySelector("body").style.background = "Black";
    //     });
    // }

    // Using jQuery, add event listener to buttons and toggle background color change
    let buttonToggled = false;
    $("#btn-bg-color").click(() => {
        if (buttonToggled === false) {
            $("body").css("background-color", "grey");
            buttonToggled = true;
        } else {
            $("body").css("background-color", "white");
            buttonToggled = false;
        }
    });

    // Add event listener to an input box, when user types a key
    // $("input").keypress(function(event) {
    //     let currentInputText = $("input").val() + event.key;
    //     $("h1").text(currentInputText);
    //     // console.log(event.key);
    //     console.log(currentInputText);
    // });

    // Modified version that will work if values are deleted in the input and update automatically via keyup
    $("input").on('keypress keyup', function(event) {
        let currentInputText = $(this).val();
        $("h1").text(currentInputText);
        console.log(currentInputText);
    });

    // jQuery will detect mouseover on h1 and change color, then revert when no longer mouseover
    // uses shortform for creating anonymous function "() =>"
    $("h1").on("mouseover", () => {
        $("h1").css("color", "purple");
    })
    // revert the color back to yellow when mouse leaves h1
    $("h1").on("mouseout", () => {
        $("h1").css("color", "yellow");
    })

    
    // Creating elements with jQuery
    $("h1").before("<button>before</button>");
    $("h1").after("<button>after</button>");

    // Prepend puts the elements inside the start of the tag to which it's being attached
    $("h1").prepend("<button>prepend</button>");
    $("h1").append("<button>append</button>");

    // Removes ALL buttons from webpage
    // $("button").remove();

    // Toggle a button, without using toggle()
    // $("#buttonToggle").on("click", () => {
    //     if ($("#dynamicButton").is(":visible")) {
    //         $("#dynamicButton").hide();
    //         $("#buttonToggle").text("Show Button");
    //     } else {
    //         $("#dynamicButton").show();
    //         $("#buttonToggle").text("Hide Button"); 
    //     }
    // });

    // Toggle a button using toggle()
    $("#buttonToggle").on("click", () => {        
        $("#dynamicButton").toggle();

            if ($("#dynamicButton").is(":visible")) {
                $("#buttonToggle").text("Hide Button");
            } else {
                $("#buttonToggle").text("Show Button");
        }               
    });

    // Fade out element, not as jarring as hide
    $("#fadeOutButton").on("click", () => {
        if ($("#fadeOutHeading").is(":visible")) {
            $("#fadeOutHeading").fadeOut();
            $("#fadeOutButton").text("Fade In");
        } else {
            $("#fadeOutButton").text("Fade Out");
            $("#fadeOutHeading").fadeIn();
        }
    });


    // Fade but with the toggle method
    $("#fadeToggleButton").on("click", () => {
        $("#fadeToggleHeading").fadeToggle();
    });

    // Slide button
    $("#slideButton").on("click", function () {
        $("#slideHeading").slideToggle();
    });


    // Animate a heading
    $("#animateButton").on("click", function () {
       // console.log(event); 
        console.log($(this).css("opacity"));
        
        if ($("#animateHeading1").css("opacity") == 0.5) {
            $("#animateHeading1").animate({opacity: 1});
            $("#animateHeading2").animate({opacity: 0.5});
        } else {
            $("#animateHeading2").animate({opacity: 1});
            $("#animateHeading1").animate({opacity: 0.5});
        }

    });
    


    

});



