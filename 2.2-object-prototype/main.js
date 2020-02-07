function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Number(new Date());
    let date = new Date(window.birthday.value);
    let birthdayUnix = Number(new Date(date))
    let diff = now - birthdayUnix;
    let age = diff / 100 / 3600 / 24 / 365;
    if (age > 18 ) {
        return true
    }

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null
    } else {
        let sound = animal.sound
        return sound
    }    
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += Number(marks[i]);
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage
}