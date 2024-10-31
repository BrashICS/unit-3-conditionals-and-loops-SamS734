/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user() {
    // The user's age
    let user_age = +prompt(`How old are you?`);
    
    if (user_age >= 60) {
        return `You qualify for the senior discount!`;
    }

    if (user_age < 16) {
        return `You're not old enough to drive yet.`;
    }

    if (user_age == 44) {
        console.log(`So is Mr. Squirrel!`);
    }

    // The user's name
    let user_name = prompt(`What is your name?`);

    if (user_name == `Mr.Squirrel`) {
        console.log(`🐿️`);
    }

    if (user_name.length > 7) {
        console.log(`You have a long name.`);
    }
    
    // User guesses how long their name is
    let user_guess = +prompt(`How long do you think your name is? (characters)`);

    if (user_guess == user_name.length) {
        console.log(`That's correct! ✔️`);
    }

    if (user_guess > user_name.length) {
        console.log(`Too high ✖️`);
    }

    if (user_guess < user_name.length) {
        console.log(`Too low ✖️`);
    }
}

