const STABLE_MONTHLY_FEE = 2000 // uppercase is preferred for constants

let horseName = "Jenis";
let horseNickName = "Jen";
let horseAge = 37;
let isHorseInside = false;

let horseNames = [horseName, "Kenis", "Meep", "Beep"];
let horseNickNames = [horseNickName, "Ken", "Men", "Ben"];
let horseAges = [36, horseAge, 38, 39];
let areHorsesInside = [isHorseInside, true, true, true];

let stableIntroduction = `Welcome to ${horseName}' stables!`;
let HorseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, and ${horseNames[3]}!`;

function getHorseLocations(horse) {
if (areHorsesInside[horse]) {
    return horseNames[horse] + "is inside.";
}
return horseNames[horse] + "is outside.";
}

function getHorseNickNames(horse, friend) {
    let string = `${horseNames[horse]}'s nickname is ${horseNickNames[horse]}, and they have a friend named ${horseNames[friend]}, who is nicknamed ${horseNickNames[friend]}!`;
return string;
}
