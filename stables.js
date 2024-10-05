let horseName = "Jenis";
console.log(horseName);
let secondHorseName = "Kenis";
console.log(secondHorseName);
let horseAge = 37;
console.log(horseAge);
let isHorseInside = false;
console.log(isHorseInside);


//Lesson-4 Code
console.log(typeof horseAge)
const STABLE_MONTHLY_FEE = 2000 // uppercase is preferred for constants
console.log(STABLE_MONTHLY_FEE); 

console.log(STABLE_MONTHLY_FEE + STABLE_MONTHLY_FEE); // adds numbers (works because they're variables)
console.log(STABLE_MONTHLY_FEE - 20); //subtracts
console.log(34/5); //divides 
// *strings will print out as a different colour from *numbers in the terminal
console.log("hi" + " there"); //adding two strings together
console.log("hi" - " there") //can't subtract/divide/multiply strings (things that aren't numbers)
console.log(80085 + "teehee"); //type corcion
console.log("2" + "turnt");
console.log(420000/1000);
console.log(`My horses' names are ${horseName} and ${secondHorseName} and they're both ${horseAge * 3}`); //concatenation


//LAB for lesson_04
let horseNickname = "Jen";
console.log(`My horses' names are ${horseNickname} and he is ${horseAge * 3}`);
console.log(`If you stay at our stable for 3 months you would save ${(STABLE_MONTHLY_FEE * 3) * .1} dollars!`);


// LESSON-5 Code
if(isHorseInside) {
console.log (horseName + " is inside");
} else {
    console.log (horseName + " is outside");
}

if (horseAge == 37) {
    console.log ("Our horse is old asf!");
} else if(horseAge == 38) {
    console.log ("Our horse has one foot in the grave.");
} else if (horseAge == 36) {
    console.log ("Our horse is still pretty young.");
}

horseName2 = "Meep";
if(horseName2 !== "Jenis") {
    console.log (horseName2 + " has come to visit the stables!");
} else {
    console.log (horseName + " is lonely.");
}

if (horseName === "Jenis") {
    console.log (horseName + " is lonely");
} else {
    console.log (horseName2 + " has come to visit!")
}

if (horseName === "Jenis" && horseAge === 37) {
     console.log(horseName + " has one foot in the grave");
} else {
    console.log (horseName + " is pretty young");
}


// Lab 5a goes here
if(isHorseInside) {
    console.log (horseName + " is inside");
    } else {
        console.log (horseName + " is outside");
    }