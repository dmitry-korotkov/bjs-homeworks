"use strict"
    
function calculateTotalMortgage(percent, contribution, amount, date) {
    let term = (new Date(window.date.value).getFullYear() - new Date().getFullYear()) * 12;
    let monthlyPayment = Number(amount - contribution) * ((Number(percent)/12/100) + (Number(percent)/12/100) / (((1 + (Number(percent)/12/100))**term)-1));
    let totalAmount = (monthlyPayment * term).toFixed(2)
    return totalAmount;
}

function getGreeting(name) {
    if (name === "null" || name === "undefined" || name === "") {
        return `Привет, мир! Меня зовут Аноним`
    } else {
        return `Привет, мир! Меня зовут ${name}`
    }
}