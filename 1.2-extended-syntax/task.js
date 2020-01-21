

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = b * b - 4 * a * c;
    let x = [];
    if (d < 0 ) {
        x = [];
    } else if (d === 0) {
        x.push(-b / (2 * a))
    } else {
        x.push((-b + Math.sqrt(d)) / (2 * a))
        x.push((-b - Math.sqrt(d)) / (2 * a));
    }
    return x
    // код для задачи №1 писать здесь
    //return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sumMark = 0;
    
    if (marks.length > 5) {
        console.log("Внимание! Количество оценок больше 5")
        marks.splice(2);    
    }

    for (let i = 0; i < marks.length; i++) {
        sumMark += marks[i];
    }
    let averageMark = sumMark / marks.length
    return averageMark;
    // код для задачи №2 писать здесь
    //return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    var age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
        alert(`Не желаете ли олд-фэшн, ${name}?`)
    } else {
        alert(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
    }
    console.log(age);
    return age;
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}