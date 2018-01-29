"use strict";
const PROMPT = require('readline-sync');
var totalUses, ratingSum, rateAttempts, rating, average;
var movieTitle;
var exitValue;
function main() {
rateAttempts = 0;
prompt();
if(exitValue = true){
    calculate();
} else {
    main();
}
}
init();
main();
function init() {
    rateAttempts = 0;
    totalUses = 0;
    ratingSum = 0;
}
function prompt() {
    rating = PROMPT.question("Please enter a rating for " + movieTitle);
    rateAttempts++;
    if(isFinite(rating)){
        if(rateAttempts != 3) {
            prompt();
        } else {
            exitValue = true;
        }
    } else {
        totalUses++;
        ratingSum = ratingSum+rating;
    }
}
function calculate() {
    average = ratingSum / rateAttempts;
    console.log("The average rating for this movie was " + average);
}