"use strict";
const PROMPT = require('readline-sync');
let totalUses = 0, ratingSum = 0, rateAttempts = 0, rating;
let movieTitle;
let exitValue;

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
    movieTitle = PROMPT.question("Please enter the movie's name. ");
    process.stdout.write('\x1Bc');
}

function prompt() {
    rating = Math.floor(PROMPT.question(`Please enter a rating for ${movieTitle}. `));
    rateAttempts++;

    if (!isFinite(rating)) {
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