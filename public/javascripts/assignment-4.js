"use strict";
const PROMPT = require('readline-sync');
let slots = [],ratings1 = [],ratings2 = [],ratings3 = [],ratings4 = [],ratings5 = [], movieTitles = [], reviews1 = [], reviews2 = [], reviews3 = [], reviews4 = [], reviews5 = [];
let promptInput;
let tempRating, randomValue;
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
    return mainPrompt();
}
}
function reviewWriting() {
  promptInput = PROMPT.question("Please enter a movie to review: 1-" + movieTitles[0] + " 2-" + movieTitles[1] + " 3-" + movieTitles[2] + " 4-" + movieTitles[3] + " 5-" + movieTitles[4]);
if(promptInput == 1 || promptInput == 2 || promptInput == 3 || promptInput == 4 || promptInput == 5) {
    tempRating = PROMPT.question("Please enter a rating for " + movieTitles[promptInput-1] + ". ");

    if(tempRating == 1) {
        slots [promptInput - 1] = slots [promptInput-1] + 1;
        ratings1[slots[0]] = tempRating;
        reviews1 [slots[0]] = PROMPT.question("Please type in your review. ");
        return mainPrompt();
    } else if (tempRating == 2) {
        slots [promptInput - 1] = slots [promptInput-1] + 1;
        ratings2[slots[1]] = tempRating;
        reviews2 [slots[1]] = PROMPT.question("Please type in your review. ");
        return mainPrompt();
    }else if (tempRating == 3) {
        slots [promptInput - 1] = slots [promptInput-1] + 1;
        ratings3[slots[2]] = tempRating;
        reviews3 [slots[2]] = PROMPT.question("Please type in your review. ");
        return mainPrompt();
    }else if (tempRating == 4) {
        slots [promptInput - 1] = slots [promptInput-1] + 1;
        ratings4[slots[3]] = tempRating;
        reviews4 [slots[3]] = PROMPT.question("Please type in your review. ");
        return mainPrompt();
    }else if (tempRating == 5) {
        slots [promptInput - 1] = slots [promptInput-1] + 1;
        ratings5[slots[4]] = tempRating;
        reviews5 [slots[4]] = PROMPT.question("Please type in your review. ");
        return mainPrompt();
    } else {
        console.log ("I'm sorry, that is an invalid rating, please reselect your movie and try again.");
        return reviewWriting();
    }


    } else {
    console.log("I'm sorry, that is an invalid response, please try again.");
    return reviewWriting();
}

}
function viewReviews() {
    promptInput = PROMPT.question("Please enter a movie to review: 1-" + movieTitles[0] + " 2-" + movieTitles[1] + " 3-" + movieTitles[2] + " 4-" + movieTitles[3] + " 5-" + movieTitles[4]);

    if(promptInput == 1) {
        randomValue = Math.floor(Math.random() * reviews1.length + 1);
        console.log("Rating number " + randomValue + ": " + ratings1[randomValue] + "/5  " + reviews1[randomValue]);
} else if (promptInput == 2) {
        randomValue = Math.floor(Math.random() * reviews2.length);
        console.log("Rating number " + randomValue + ": " + ratings2[randomValue] + "/5  " + reviews2[randomValue]);
    } else if (promptInput == 3) {
        randomValue = Math.floor(Math.random() * reviews3.length);
        console.log("Rating number " + randomValue + ": " + ratings3[randomValue] + "/5  " + reviews3[randomValue]);
    } else if (promptInput == 4) {
        randomValue = Math.floor(Math.random() * reviews4.length);
        console.log("Rating number " + randomValue + ": " + ratings4[randomValue] + "/5  " + reviews4[randomValue]);
    } else if (promptInput == 5) {
        randomValue = Math.floor(Math.random() * reviews5.length);
        console.log("Rating number " + randomValue + ": " + ratings5[randomValue] + "/5  " + reviews5[randomValue]);
    } else {
        console.log("That is an invalid response, try again.")
    }
    return main();
}