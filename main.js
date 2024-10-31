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
document.getElementById("game_button").addEventListener("click", start_game);


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

// SPOOKY ADVENTURE GAME!!!
function start_game() {
    // Intro
    let player_name = prompt(`It's dark, and you're lost. You have no clue where you are and wonder if you're even in Canada. You wander around aimlessly, and stumble upon... an abandoned building? Suddenly, a mysterious figure approaches you and asks, "What is your name?"👻👻`);
    alert(`"Welcome, ${player_name}. This is my domain expansion!😈 By the way, if you want your phone back, you're gonna have to find me in the building."😝`);

    // First choice
    let first_choice = +prompt(`The figure dissapears into fog. You check your pockets frantically, but the "thing" was right. Your phone is gone, but how could this be?! You have so many precious photos of your cat, and you NEED to get them back. Do you (1) Run away and sacrifice the cat photos🏃💨, (2) Run into the building for your cat photos!!!🐈‍⬛🐈‍⬛`);

    if (first_choice == 1) {
        
    }
}