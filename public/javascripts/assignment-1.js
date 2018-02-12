"use strict";
const {question: prompt} = require('readline-sync');
const basePrice = 50000, bedroomCost = 17000, bathroomCost = 12500, garageSizeCost = 6000;
let bedroomCount, bathroomCount, garageSize, lotNumber;

function main() {
    setLotNumber();
    setBedrooms();
    setBathrooms();
    setGarageSize();
    const total = calculatePrice();
    console.log("The total cost for Lot " + lotNumber + " is $" + total);
}

main();

function setLotNumber() {
    lotNumber = prompt("Please enter a lot number: ");
}

function setBedrooms() {
    bedroomCount = prompt("How many bedrooms? ");
}

function setBathrooms() {
    bathroomCount = prompt("How many bathrooms? ");
}

function setGarageSize() {
    garageSize = prompt("How many cars do you plan to fit in your garage? ");
}

function calculatePrice() {
    return basePrice + bedroomCost * bedroomCount +
        bathroomCost * bathroomCount + garageSize * garageSizeCost;
}