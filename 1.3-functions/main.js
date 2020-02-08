<<<<<<< HEAD
//Задача 1
function getSolutions( a, b, c ) {
    let D = b * b - 4 * a * c;
    let result = {}
    let roots = []
    if (D < 0) {
        result.D = D;
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        roots.push(x1);
        result.roots = roots;
        result.D = D;
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots.push(x1);
        roots.push(x2);
        result.roots = roots
        result.D = D;
    }
    return result;
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0 ) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`)
    }
}

//Задача 2

function arrayAverage( array ) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length;
}

function getAverageScore(data) {
    let result = {}
    let sum = 0
    let count = 0
    for (let subject in data) {
        let value = arrayAverage(data[ subject ])
        sum += value;
        count++
        result[subject] = value;   
    }
    result.average = sum / count
    return result;
}

//Для проверки задачи 2
//console.log( getAverageScore({algebra: [4, 4, 4], russian: [2, 2, 2], music: [3, 5, 6, 3, 5, 2, 3], french: [2, 3, 3, 4]}))

//Задача 3

function getPersonData(secretData) {
    let result = {}
    result.firstName = getName(secretData.aaa);
    result.lastName = getName(secretData.bbb);
    return result
  }
  
  function getName(number) {
    if (number === 0) {
      return "Родриго";
    } else {
      return "Эмильо" ;
    }
  }

/* Для проверки задачи 3
console.log(getPersonData({aaa: 0, bbb: 0}))
console.log(getPersonData({aaa: 0, bbb: 1}))
console.log(getPersonData({aaa: 1, bbb: 0}))
console.log(getPersonData({aaa: 1, bbb: 1}))
*/
=======
// тут пусто, так как нету UI
>>>>>>> f15278d45cff2ba3b396d51de6002b0d5545e387
