function allTheBeers() {
    numOfBeerBottles = 99;
    while (numOfBeerBottles <= 99) {
        console.log(numOfBeerBottles + " + bottles of beer on the wall, " + numOfBeerBottles + " bottles of beer. Take one down, pass it around, " + --numOfBeerBottles + " bottles of beer on the wall")

        if (numOfBeerBottles < 1) {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
            break;
        }
    }
}

allTheBeers();
