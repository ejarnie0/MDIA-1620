    //Lesson-123 Code
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



    // Lesson-6 Code
    // Horse = ["name", age, isInside, ]
let word = "Rainbow";
console.log(word.charAt(4));
    // Answer consoles out as "b" because it starts counting at "0" not "1"

let horseNames = [horseName, "Kenis", "Meep"];
let horseAges = [36, horseAge, 39];
let horseLocations = [true, true, true, true];
let crazyArray = [isHorseInside, "hi", "there", [[1, 2, 3, 2, 3]]]; 
console.log(horseNames.length);
console.log(horseNames);
horseNames.push("Beep");
console.log(horseNames);
horseAges.splice(2, 0, 38); 
    // we don't need to know splice (first number is the start position, second number is what you're doing with the number (0 = insert, 1 = replace), third number is what you're adding (a number, or "text"))
console.log(horseAges);
console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here! Their names are: ${horseNames}`);
console.log("Welcome to my stables! There are " + horseNames.length + " horses staying here");
console.log(horseNames[1] + " is");
console.log(horseAges[1]);

if(horseLocations);{
    console.log(horseNames[2] + " is outside!");
}

if(horseNames[0] === "Jenis") {
console.log("Hi Charlie!");
}

if(horseNames.length < 5){
    console.log("These stables are unpopular");
}


// LAB for lesson-6
console.log(`Welcome to Jenis' stables! There are ${horseNames.length} horses staying here! Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, and, ${horseNames[3]}`);

if(horseLocations[0] && horseLocations[1] && horseLocations[2] && horseLocations[3] === true) {
    console.log(horseNames + " are all chilling inside!");
} else {console.log(horseNames + " went for a run.");}

