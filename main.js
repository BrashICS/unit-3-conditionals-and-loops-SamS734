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
document.getElementById("menu_button").addEventListener("click", menu);
document.getElementById("guess").addEventListener("click", guess_10);

/*** Functions ***/

/// Unit 3.1

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
    let player_name = prompt(`It's dark, and you're lost. You have no clue where you are and wonder if you're even in Canada. You wander around aimlessly, and stumble upon... an abandoned building? Suddenly, a mysterious figure approaches you and asks, 👻"What is your name?"👻`);
    alert(`"Welcome, ${player_name}. This is my domain expansion!😈 By the way, if you want your phone back, you're gonna have to find me in the building."😝`);

    alert(`The figure dissapears into fog. You check your pockets frantically, but the "thing" was right. Your phone is gone, but how could this be?! You have so many precious photos of your cat, and you NEED to get them back.`)

    // First choice
    let first_choice = +prompt(`Do you (1) Run away and sacrifice the cat photos🏃💨 or (2) Run into the building for your cat photos!!!🐈‍⬛🐈‍⬛`);

    if (first_choice == 1) {
        run_away();
    } else if (first_choice == 2) {
        building();
    } else {
        bruh();
    }
}

// First Choice, Option 1
function run_away() {
    alert(`You decide to run away and sacrifice the cat photos. However, the figure suddenly appears before you again! 👻"Trying to run away huh? TOO BAD!!!"👻\n\nTHE END`);
}

// First Choice, Option 2
function building() {
    alert(`You chose to chase after the ghost for your cat photos. You enter the dark building and find yourself at a crossway. To the left is an absolutely pitch black hallway, there are stairs in front of you and to the right is a corner that leads to someplace you don't know.`)
    // Second choice
    let second_choice = +prompt(`Do you (1) Go to the left ⬛⬅️ (2) Go upstairs ⬆️⬆️ or (3) Go to the right ➡️⤴️`);

    if (second_choice == 1) {
        dark_left();
    } else if (second_choice == 2) {
        upstairs()
    } else if (second_choice == 3) {
        corner_right();
    } else {
        bruh();
    }
}

// Second Choice, Option 1
function dark_left() {
    alert(`You chose to go into the dark and immeidately find yourself lost.`);
    let fake_choice = +prompt(`Do you (1) Try and run back to where you came from or (2) Continue running into the dark`);

    if (fake_choice == 1) {
        alert(`Unfortunately, you ran too deep and can't find your way out.\n\nTHE END`);
    } else if (fake_choice == 2) {
        alert(`Great idea! You run into the dark and get stuck there forever.\n\nTHE END`);
    } else {
        bruh();
    }
}

// Second Choice, Option 2
function upstairs() {
    alert(`You sprint upstairs only to find out that you aren't going up, but falling! There was a hole under you that was too dark to see, and you plummet down.\n\nTHE END`);
}

// Second Choice, Option 3
function corner_right() {
    alert(`You turn the corner and see the ghost playing Block Blast on your phone. 👻"Oh! Congrats on finding me! Here's your phone."👻\n\nTHE GOOD END`);
}

// If they didn't choose an option
function bruh() {
    alert(`Uhh, you didn't choose an option correctly. Please make sure you ONLY put the number and refresh the page to try again!`);
}



/// Unit 3.2

function menu() {
    // Setup the menu
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    // Difficulty choices
    let difficulty = `Choose a Difficulty:
    1 - Easy
    2 - Medium
    3 - Hard
    `

    // Prompt with the menu
    let selection = +prompt(message);

    if (selection == 1) {
        alert(`Let's play!`);
        let difficulty_choice = +prompt(difficulty);
    
        if (difficulty_choice == 1) {
            alert(`You selected the easy route.`);
        } else if (difficulty_choice == 2) {
            alert(`Most people selected medium.`);
        } else if (difficulty_choice == 3) {
            alert(`I see you like a challenge!`);
        } else {
            alert(`...You didn't choose an option, make sure you input a number!`);
        }
    } else if (selection == 2) {
        alert(`You selected Options.`);
    } else if (selection == 3) {
        alert(`No new DLC at this time.`);
    } else if (selection == 4) {
        alert(`Everything is up to date.`);
    } else if (selection == 5) {
        alert(`Bye!`);
    }
}


// Unit 3.2 Part 2
function greeting(hour) {
    if ((hour >= 0) && (hour <= 11)) {
        return `Good morning!`;
    } else if ((hour >= 12) && (hour <= 17)) {
        return `Good afternoon!`;
    } else if ((hour >= 18) && (hour <= 23)) {
        return `Good evening!`;
    } else {
        return `Invalid hour!`;
    }
} 

// // Unit 3.2 Optional
// function two_digit() {
//     let random_2d = randInt(10, 99);

//     if (random_2d == 0) {
//         return `0`;
//     }

//     else if () {
//     }
// }

/// Unit 3.3 Part 1
function is_number(num) {
    if (typeof num == "number") {
        return true;
    } else {
        return false;
    }
}

// Unit 3.3 Part 2
function which_day(n) {
    if (is_number(n) == false) {
        return`Invalid type`;
    } else if (n == 1) {
        return `Sunday`;
    } else if (n == 2) {
        return `Monday`;
    } else if (n == 3) {
        return `Tuesday`;
    } else if (n == 4) {
        return `Wednesday`;
    } else if (n == 5) {
        return `Thursday`;
    } else if (n == 6) {
        return `Friday`;
    } else if (n == 7) {
        return `Saturday`;
    } else {
        return `Invalid value`;
    }
}

// Unit 3.3 Part 3
function guess_10() {
    let secret_n = randInt(1, 10);
    let user_guess = +prompt(`Select a number from 1-10`);

    if (user_guess == secret_n) {
        alert(`Nice, you guessed the correct number!`);
    } else if (user_guess > 10 || user_guess < 1) {
        alert(`Your guess was not from 1-10. The secret number was ${secret_n}.`);
    } else if (user_guess < secret_n) {
        alert(`Your guess was too low! The secret number was ${secret_n}.`);
    } else if (user_guess > secret_n) {
        alert(`Your guess was too high! The secret number was ${secret_n}.`);
    } else {
        alert(`ERROR`);
    }
}


/// Unit 3.4 Practice

// Countdown

function countdown(start, stop) {
    let loop_amount = 1;
    
    if (start < stop) {
        return -1;
    }
    else {
    } while (start != stop) {
        console.log(start);
        start--;
        loop_amount++;
    }

    return loop_amount;
}

// Random Until Stop

function random_until(min, max, stop) {
    if (max <= min || stop < min || stop > max) {
        return -1;
    } else {
        let rnd_number = randInt(min, max);
        
        while (rnd_number != stop) {
            console.log(rnd_number);
            rnd_number = randInt(min, max);
        }
    }
    
    return stop;
}

// Average

function average(n) {
    let avg = 0;
    let count = 1;

    while (count <= n) {
        avg += +prompt(`Please enter value ${count}/${n}`);
        count++;
    }

    console.log(`The average is ${round(avg / n, 1)}`);
}


/// Unit 3.5 Part 1

function print_reverse(str) {
    let last = str.length - 1;
    let reversed = "";

    while (last >= 0) {
        reversed += (str[last])
        last--
    }

    console.log(reversed);
}

// Unit 3.5 Part 2

function dragons_and_goblins(str) {
    let char = 0;
    let d_count = 0;
    let g_count = 0;

    while (char < str.length) {
        let d_or_g = (str[char]);

        if (d_or_g == "d") {
            d_count++;
        } if (d_or_g == "g") {
            g_count++;
        }

        char++;
    }

    console.log(`Dragons: ${d_count} Goblins ${g_count}`);
}

// Unit 3.5 Part 3

function add(str) {
    let char = 0;
    let sum = 0;

    while (char < str.length) {
        let digit = +(str[char]);
        sum += digit;
        char++;
    }

    return sum;
}

// Unit 3.5 Part 4

function add_subtract(str) {
    let char = 0;
    let sum = 0;

    while (char < str.length) {
        let digit = (str[char]);
        
        if (digit == "-") {
            char++;
            digit = +(str[char]);
            sum -= digit;
        } else {
            sum += digit;
            char++;
        }
    }

    return sum;
}


/// Unit 3.6 Practice

// Parrot

function parrot() {
    let input;
    let output = "";

    do {
        input = prompt(`Please enter some text or the word "quit" to exit: `);
        output = input.toUpperCase();

        if (input.toLowerCase() != "quit") {
            console.log(output)
        }

    } while (input.toLowerCase() != "quit");

    console.log(`GOODBYE! 🦜`);
}

// Negative Only

function negative_only() {
    let input;

    do {
        input = +prompt(`Please enter a negative number: `);
    } while (isNaN(input) || input >= 0)

    return input;
}


/// Unit 3.7 Practice

// Unit 3.7 Part 1

function count_up(start, stop) {
    for (let n = start; n <= stop; n++) {
        console.log(n)
    }
}

function count_down(start, stop) {
    for (let n = start; n >= stop; n--) {
        console.log(n)
    }
}

function print_chars(str, step) {
    for (let chars = 0; chars < str.length; chars += step) {
        console.log(str[chars]);
    }
}

// Unit 3.7 Part 2

function sum(n) {
    let answer = 0;

    for (let add_by = 0; add_by <= n; add_by++) {
        answer += add_by
    }

    return answer;
}

function count4(begin, end) {
    let quotient_count = 0;

    for (let start = begin; start <= end; start++) {
        if (start % 4 == 0) {
            quotient_count++
        }
    }

    return quotient_count;
}

function sum_divisible(n, x) {
    let answer = 0;

    for (let add_by = 0; add_by <= n; add_by++) {
        if (add_by % x == 0) {
            answer += add_by
        }
    }
 
    return answer;
}


/// More Practice

function count_char(str, char) {
    let char_count = 0;

    for (let current_char = 0; current_char < str.length; current_char++) {
        if (str[current_char] == char) {
            char_count++
        } 
    }

    if (char_count > 0) {
        return char_count;
    } else {
        return -1;
    }
}

function print_codes(str) {
    for (;;) {}
}