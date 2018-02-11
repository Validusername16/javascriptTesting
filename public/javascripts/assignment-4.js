"use strict";
const PROMPT = require('readline-sync');
let movies = [];

function main() {
    mainPrompt();
}

function init() {
    for (let i = 0; i < 5; i++) { // iterates over 0 through 4
        movies[i] = {
            title: PROMPT.question(`Please enter the title for movie ${i + 1}`),
            reviews: [],
            ratings: []
        }
    }
}

init();
main();

const actions = [reviewWriting, viewReviews, averageRatings];
function mainPrompt() {
    const input = parseInt(PROMPT.question(`Please enter a selection.
1 - Write a review
2 - View reviews for a movie
3 - View rating of movies (highest to lowest)
`));
    const action = actions[input - 1];
    if (action) {
        return action();
    } else {
        process.stdout.write('\x1Bc');
        console.log("That is an invalid response, please try again.");
        return mainPrompt();
    }
}

function generateMoviePrompt() {
    let prompt = "Please enter a movie to review.\r\n";
    for (let i in movies) {
        prompt += `${i + 1} - ${movies[i].title}` + '\r\n';
    }
    return prompt;
}

function reviewWriting() {
    const movieIndex = parseInt(PROMPT.question(generateMoviePrompt())) - 1;
    const movie = movies[movieIndex];

    if (movie) {
        const rating = parseInt(PROMPT.question(`Please enter a rating for ${movie.title}. `));
        // if this was (rating < 0 || rating > 5) it would not consider NaN or infinity invalid
        if (!(rating >= 0 && rating <= 5)) {
            console.log("I'm sorry, that is an invalid rating, please reselect your movie and try again.");
            return reviewWriting();
        }
        const {reviews, ratings} = movie; // object unpacking
        ratings.push(rating);
        reviews.push(PROMPT.question("Please type in your review. "));
        return mainPrompt();
    } else {
        console.log("I'm sorry, that is an invalid response, please try again.");
        return reviewWriting();
    }
}

function viewReviews() {
    const movieIndex = parseInt(PROMPT.question(generateMoviePrompt())) - 1;
    const movie = movies[movieIndex];

    if (movie) {
        const {reviews, ratings} = movie; // object unpacking
        const index = Math.floor(Math.random() * reviews.length);
        console.log(`Rating number ${index + 1}: ${ratings[index]}/5  ${reviews[index]}`);
    } else {
        console.log("That is an invalid response, try again.");
    }
    return main();
}