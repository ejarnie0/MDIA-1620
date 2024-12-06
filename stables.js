//
//                             *           *                  
//                            **          **                  
//                           ***         ***
//                          ****   % %  ****
//                          ****  %%%%  **** 
//                      %%% ***  %%%%%% *** 
//                     %%%%% ###  %%%%%% ####
//                   %%%% ####### %% * % #####
//                 %%% ############# ** ########
//                %%%% ############## *** ########
//               %%% ########### __ ### ** ## __ ##
//              %%% ############ . ##### * ### . ###
//             %%% ############# -- ######### -- ##
//            %%% | ##############################
//           %%%% | ###############################
//          %%%%% | ################################
//         %%%% # | ##################################
//         %%%% # | ###################################
//        %%%%### | #####################################
//       %%%%#### \ ########### / ########################
//      %%%%#####\ \ ######### /   ########################
//      %%%#######\ \ ####### /    ##########################
//     ########### \ ------- /      ##########################
//    ############# \____ ##         ###########################
//    ######################          ###########################
//   #######################           ###########################
//   #######################            ###########################
//   #######################             /-- ##########      ########
//   #######################              \ # _____ ####       #########
//   ######################                 \__ ## \__ ##        #########
//   ######################                   ######## \ ##    #########
//   ######################                     ####### \ ############
//   ######################                       ###### \_____ #####
//   ######################                            ############


//------------------------- Setting up shop -------------------------//

let horses = [ ];
let lateFee = [ ];
let numOfStalls = 7;
let areTheyInside = [ ];
let introMessage = [ ];
const MONTHLY_RENT = 400;

//------------------------- First day -------------------------//

function Horse(name, nickname, faveTreat, age, MONTHLY_RENT, areTheyInside, accessory, tattoo) {
    this.name = name;
    this.nickname = nickname;
    this.faveTreat = faveTreat;
    this.age = age;
    this.MONTHLY_RENT = MONTHLY_RENT;
    this.areTheyInside = areTheyInside;
    this.accessory = accessory;
    this.tattoo = tattoo;

    this.introMessage = function introMessage (){
        console.log(`Welcome to Kenai's stables! My horse is named ${this.name} and they are ${this.age} years old, and they like eating ${this.faveTreat}!`);
        }

    this.letMeIn = function () {
        if (this.areTheyInside === true) {
            this.areTheyInside = false;
            console.log(`${this.name} needs to go outside and play in the mud.`);
        } else {
            this.areTheyInside = true;
            console.log(`${this.name} needs to come inside for a bath.`);
        }
    };
}



const kenis = new Horse("Kenis", "Ken", "warheads", 33, MONTHLY_RENT, true, "scarf", "a dragon on his neck");
const jenis = new Horse("Jenis", "Jen", "penis", 27, MONTHLY_RENT, true, "fedora", "the number 7 on his leg");
const menis = new Horse("Menis", "Men", "acorns", 14, MONTHLY_RENT, true, "high heels", "a fake moustache on her hoof");

horses.push(kenis, jenis, menis);

kenis.introMessage();

var noot = {
    name: "Noot",
    nickname: "Nen",
    faveTreat: "pickled mustard greens",
    age: 10,
    MONTHLY_RENT: MONTHLY_RENT,
    areTheyInside: false,
    accessory: "necklace",
    tattoo: "the lunar phases down their spine",
    letMeIn: function () {
        if (this.areTheyInside === true) {
            this.areTheyInside = false;
            console.log(`${this.name} needs to go outside and play in the mud.`);
        } else {
            this.areTheyInside = true;
            console.log(`${this.name} needs to come inside for a bath.`);
        }
    }
}
horses.push(noot);

kenis.isHungry = true;
jenis.isHungry = false;
menis.isHungry = true;
noot.isHungry = false;

// console.log(horses);

//------------------------- Stable roster -------------------------//

//   [
//     Horse {
//       name: 'Kenis',
//       nickname: 'Ken',
//       faveTreat: 'warheads',
//       age: 33,
//       MONTHLY_RENT: 400,
//       areTheyInside: true,
//       accessory: 'scarf',
//       tattoo: 'a dragon on his neck',
//       introMessage: [Function: introMessage],
//       isHungry: true
//     },
//     Horse {
//       name: 'Jenis',
//       nickname: 'Jen',
//       faveTreat: 'penis',
//       age: 27,
//       MONTHLY_RENT: 400,
//       areTheyInside: true,
//       accessory: 'fedora',
//       tattoo: 'the number 7 on his leg',
//       introMessage: [Function: introMessage],
//       isHungry: false
//     },
//     Horse {
//       name: 'Menis',
//       nickname: 'Men',
//       faveTreat: 'acorns',
//       age: 14,
//       MONTHLY_RENT: 400,
//       areTheyInside: true,
//       accessory: 'high heels',
//       tattoo: 'a fake moustache on her hoof',
//       introMessage: [Function: introMessage],
//       isHungry: true
//     },
//     {
//       name: 'Noot',
//       nickname: 'Nen',
//       faveTreat: 'pickled mustard greens',
//       age: 10,
//       MONTHLY_RENT: 400,
//       areTheyInside: false,
//       accessory: 'necklace',
//       tattoo: 'the lunar phases down their spine',
//       isHungry: false
//     }
//   ]

//---------------------- Growing business ----------------------//

let vacantStalls = (numOfStalls - horses.length);

if (vacantStalls < 2) {
    console.log(`Oops! We need to build more stalls.)`);
} else {
    console.log("We have " + vacantStalls + " stalls available!");
}

const LATE_FEE = 30;
let isRentOnTime = [ ];

kenis.isRentOnTime = true;
jenis.isRentOnTime = true;
menis.isRentOnTime = false;
noot.isRentOnTime = false;

if (isRentOnTime === false) {
    console.log("You paid on time! You only paid " + MONTHLY_RENT + ", thanks for being punctual!");
} else {
    console.log("You were late paying rent! You now owe " + (MONTHLY_RENT + LATE_FEE) + "!");
}

function checkHorses() {
    for (let i = 0; i < horses.length; i++) {
        let horse = horses[i];
        let horseName = horse["name"];
        let favorite = horse["faveTreat"];
        let doesLikesPenis = favorite === "penis";

        if (doesLikesPenis) {
            console.log(horseName + " loves penis!");
            return;  // Exit the function early
        } 
        
        console.log(horseName + " doesn't like penis, only " + favorite + ". Keep checking!");
    }
}
checkHorses();

function spareName(horse) {
    return `This is ${horse.name}, their nickname is ${horse.nickname}!`;
}
console.log(spareName(kenis));

//------------------------- Day to day operations -------------------------//

function areTheyCool(coolTattoo) {
    for (let i = 0; i < horses.length; i++) {
        // let horse = horses[i];

    if (coolTattoo === horses[i].tattoo) {
        console.log(`${horses[i].name} is really cool, they have a tattoo of ${horses[i].tattoo}.`);
    } else {
        console.log(`${horses[i].name} isn't cool at all, they have a tattoo of ${horses[i].tattoo}. Lame.`);
    }
    }
}
areTheyCool("a fake moustache on her hoof");

let morning = "morning";
let night = "night";


function timeOfDay(time) {
    for (let i = 0; i < horses.length; i++) {
        let horse = horses[i]; 
        
        if (time === morning && horse.areTheyInside) {
            horse.areTheyInside = false; 
            console.log(`It's morning! ${horse.name} is going outside to play in the sun!`);
        } else if (time === night && !horse.areTheyInside) {
            horse.areTheyInside = true; 
            console.log(`It's getting dark out! ${horse.name} is tired, they're going back inside.`);
        }
    }
}
timeOfDay("morning");


horses.forEach(function(horses) {
    horses.letMeIn();
}
);


function horsesAreHungry() {
    for (let i = 0; i < horses.length; i++) {
        let horse = horses[i]; 

        if (areTheyInside === true) {
            horse.areTheyInside = false
            console.log(`${horse.name} is bored, they're gonna go outside.`);
        } else {
            horse.areTheyInside = true;
            console.log(`${horse.name} needs to come in and eat. Here take this, it's ${horse.faveTreat}, their favorite thing to eat.`);
            horse.areTheyInside = false;
        }
    }
}
horsesAreHungry(true);


timeOfDay("night");
