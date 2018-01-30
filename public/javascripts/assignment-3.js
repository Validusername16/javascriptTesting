"use strict";
const PROMPT = require('readline-sync');
var totalUses, ratingSum, rateAttempts, rating, average;
var movieTitle;
var exitValue;
function main() {
rateAttempts = 0;
prompt();
if(exitValue == true){
    process.stdout.write('\x1Bc');
    calculate();
} if (exitValue == false){
    process.stdout.write('\x1Bc');
    main();
    }
}

init();
main();
function init() {
    rateAttempts = 0;
    totalUses = 0;
    ratingSum = 0;
    process.stdout.write('\x1Bc');
    movieTitle = PROMPT.question("Please enter the movie's name. ");
    process.stdout.write('\x1Bc');
}
function prompt() {
    rating = PROMPT.question("Please enter a rating for " + movieTitle + ". ");
    rateAttempts++;
    rating = Math.floor(rating);

    if(!isFinite(rating)){
        if(rateAttempts != 3) {
            prompt();
        } else {
            exitValue = true;
        }
    }
    if(rating <= 5 && rating >= 0){
        totalUses++;
        ratingSum = ratingSum+rating;
        exitValue = false;
    } else {
        if(rateAttempts != 3) {
            prompt();
        } else {

            exitValue = true;
        }
    }
}
function calculate() {
    average = ratingSum / totalUses;
    average = average.toFixed(2);
       console.log("The average rating for " + movieTitle + " was " + average + ".");

}