"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    let term = (new Date(window.date.value).getFullYear() - new Date().getFullYear()) * 12;
    let monthlyPayment = Number(amount - contribution) * ((Number(percent)/12/100) + (Number(percent)/12/100) / (((1 + (Number(percent)/12/100))**term)-1));
    let totalAmount = (monthlyPayment * term).toFixed(2)
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}