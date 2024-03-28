function BellPerson(firstName, age, hasWorkPermit, languages) {
    this.firstName = firstName;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;

    // Create a method for an object
    this.moveSuitcase = function(){
        alert("May I take your suitcase?");
    }
}

var bellPerson1 = new BellPerson("Jason", 38, true, ["English", "Spanish"])

function HouseKeeper(firstName, age, hasWorkPermit, languages, qualifiedJobs) {
    this.firstName = firstName;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.qualifiedJobs = qualifiedJobs;

    // Create a method for an object
    this.clean = function(){
        alert("Cleaning in progress.")
    }    
}

var houseKeeper1 = new HouseKeeper("Geoff", 32, true, ["English", "German"], ["Room Service", "Towel Delivery", "Turndown Service"])

