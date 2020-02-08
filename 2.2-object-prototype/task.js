function getAnimalSound(animal) {
    if (animal === undefined) {
        return null
    } else {
        let sound = animal.sound
        return sound
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