"use strict";
const PROMPT = require('readline-sync');
let bedroomCount, bathroomCount, garageSize, lotNumber;
let basePrice, bedroomCost, bathroomCost, garageSizeCost, total;
function main() {
    setLotNumber();
    setBedrooms();
    setBathrooms();
    setGarageSize();
    calculatePrice();
    console.log("The total cost for Lot " + lotNumber + " is $" + total);
}
main();
function setLotNumber(){
    lotNumber = PROMPT.question("Please enter a lot number: ");
}
function setBedrooms() {
    bedroomCount = PROMPT.question("How many bedrooms? ");
}
function setBathrooms() {
    bathroomCount = PROMPT.question("How many bathrooms? ");
}
function setGarageSize() {
    garageSize = PROMPT.question("How many cars do you plan to fit in your garage? ");
}
function calculatePrice() {
    basePrice = 50000;
    bedroomCost = 17000;
    bathroomCost = 12500;
    garageSizeCost = 6000;
    total = basePrice + (bedroomCost * bedroomCount) + (bathroomCost * bathroomCount) + (garageSize * garageSizeCost);
}