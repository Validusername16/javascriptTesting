"use strict";
const {question: prompt} = require('readline-sync');
let totalUses, ratingSum, rateAttempts;
totalUses = ratingSum = rateAttempts = 0;
let movieTitle;
let exitValue = false;

function main() {
    prompt();
    process.stdout.write('\x1Bc');
    if (exitValue) {
        calculate();
    } else {
        main();
    }
}

init();
main();

function init() {
    process.stdout.write('\x1Bc');
    movieTitle = prompt("Please enter the movie's name. ");
    process.stdout.write('\x1Bc');
}

function prompt() {
    const rating = Math.floor(parseInt(prompt(`Please enter a rating for ${movieTitle}. `)));
    rateAttempts++;

    if (!isFinite(rating)) {
        // better practice if you do < 3 instead of != 3
        if (rateAttempts < 3) {
            prompt();
        } else {
            exitValue = true;
        }
    }

    if (rating <= 5 && rating >= 0){
        totalUses++;
        ratingSum += rating;
        exitValue = false;
    } else if (rateAttempts < 3) {
        prompt();
    } else {
        exitValue = true;
    }
}

function calculate() {
    const average = (ratingSum / totalUses).toFixed(2);

    if (!isNaN(average)) {
        console.log(`The average rating for ${movieTitle} was ${average}.`);
    } else {
        console.log(`Nobody rated ${movieTitle}.`);
    }
}