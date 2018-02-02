"use strict";
const PROMPT = require('readline-sync');
let ratings = [], movieTitles = [], reviews1 = [], reviews2 = [], reviews3 = [], reviews4 = [], reviews5 = [];
let promptInput;
function main() {
mainPrompt();
}
function init() {
    movieTitles[0] = PROMPT.question("Please enter the title for movie 1");
    movieTitles[1] = PROMPT.question("Please enter the title for movie 2");
    movieTitles[2] = PROMPT.question("Please enter the title for movie 3");
    movieTitles[3] = PROMPT.question("Please enter the title for movie 4");
    movieTitles[4] = PROMPT.question("Please enter the title for movie 5");
}
init();
main();
function mainPrompt() {
promptInput = PROMPT.question("Please enter a selection. 1-Write a review 2-View reviews for a movie 3-View rating of movies (highest to lowest) ")
if (promptInput == 1) {
    return reviewWriting();
}else if (promptInput == 2) {
    return viewReviews();
} else if (promptInput == 3) {
    return averageRatings();
} else {
    process.stdout.write('\x1Bc');
    console.log("That is an invalid response, please try again.");
}
}
function reviewWriting() {
  promptInput = PROMPT.question("Please enter a movie to review: 1-" + movieTitles[0] + " 2-" + movieTitles[1] + " 3-" + movieTitles[2] + " 4-" + movieTitles[3] + " 5-" + movieTitles[4]);

}