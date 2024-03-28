function isLeap(year) {
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year."
            } else {
                return "Not leap year."
            }
        }  
    return "Leap year."      
    } else {
      return "Not leap year."
    }
}


function isLeap(year) {    
    if (year % 4 === 0 && (year % 100 > 0 || year % 400 === 0)) {
        return "Leap year."
    } else {
        return "Not leap year."
    }        
}