//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
    if(num1 > num2){
        return(num1)
    }
    else{
        return(num2)
    }
}

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
    if(score / possible >= .9){
        return("A")
    }
    else if(score / possible >= .8){
        return("B")
    }
    else if(score / possible >= .7){
        return("C")
    }
    else if(score / possible >= .6){
        return("D")
    }
    else if(score / possible <= .6){
        return("F")
    }
    
}


// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
    // you code below
    if(hour <= 4){
        return("good night")
    }
    else if(hour >= 22){
        return("good night")
    }
    else if(hour >= 18){
        return("good evening")
    }
    else if(hour >= 12){
        return("good afternoon")
    }
    else if(hour >= 5){
        return("good morning")
    }
}

//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function isFever(temp) {
    if(temp >= 103){
        return("fever go to hospital")
    }
    else if(temp > 98.6){
        return("fever")
    }
    else{
        return("no fever")
    }
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {
   if(car.moving == true){
       return false;
   } else
    return true;
 
    
}

//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {
    if(dish.yourDish && dish.isDirty ==true){
        return true;
    }
    else{
        return false;
    }
    
}