"use strict";
const PROMPT = require('readline-sync');
const basePrice = 100;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // getMonth thinks January is 0
const currentDay = currentDate.getDate(); 
let firstName, lastName; // Strings
let policyNumber, age, accidentFaults, premiumTotal, birthDay, birthMonth, birthYear; // Integers

function main() {
    setName();
    setPolicyNumber();
    setBirthDate()
    setFaults();
    process.stdout.write('\x1Bc');
    calculate();

    main();
}

process.stdout.write('\x1Bc');
main();

function setName() {
    firstName = PROMPT.question("Please enter your first name. ");
    lastName = PROMPT.question("Please enter your last name. ");
}

function setPolicyNumber() {
    policyNumber = PROMPT.question("Please enter your policy number. ");
}

function setBirthDate() {
    birthMonth = parseInt(PROMPT.question("Please enter the month of your birthdate. "));
    birthDay = parseInt(PROMPT.question("Please enter the day of your birthdate. "));
    birthYear = parseInt(PROMPT.question("Please enter the year of your birthdate. "));
    if (birthMonth < 0 || birthMonth > 12
        || birthDay < 0 || birthDay > 31
        || birthYear > currentYear
        || isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) { // parseInt("") will return NaN
        console.log("I'm sorry. That birthdate is invalid, please try again.");
        return setBirthDate(); // this return is actually unnecessary because there's nothing that comes after it
    }
}

function setFaults() {
    accidentFaults = PROMPT.question(`Please enter how many accident faults you've had since ${currentMonth}/${currentDay}/${currentYear - 3}. `);
}

function calculate() {
    age = currentYear - birthYear;
    premiumTotal = basePrice;
    premiumTotal = accidentFaults*50; // why are you setting to premiumTotal twice without using the first value?
    if (age > 15 && age < 30) {
        premiumTotal += 20;
    } else if (age >= 30 && age < 45) {
        premiumTotal += 10;
    } else if (age >= 60) {
        premiumTotal += 30;
    }

    console.log(`Okay ${firstName} ${lastName}, your premium total is $${premiumTotal}`);
}
