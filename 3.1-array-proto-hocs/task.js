"use strict"

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(0); // Можно использовать другое значение замедления.
  //console.log(`Результат вызван функцией сложения`)
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}


function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every(function isEqual(element, index) {
      if(element === arr2[index]) {
      return true
      } 
    })
  }
  return false
}
/*
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
*/

function memorize(fn, limit) {
  let results = [];
  return function (...args) {
    let reqiuredArray = results.find(arr => compareArrays(arr.args, args))
    if (reqiuredArray) {
    //  console.log("Результат вызван из памяти")
      return reqiuredArray.result
    }
    if (results.length > limit) {
      results.shift
    }
    let result = fn.apply(this, args);
    results.push({args, result});
    //console.log(results)
    return result
  };
}

const mSum = memorize(sum, 5);

function testCase (testFunction, nameTimer) {
  let arrayArgs = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4], [4,4], [4,4], [1,2,3], [4,6,6],[3,3,5]]
  console.time(nameTimer);
  for (let i = 0; i <= 50; i++) {
     testFunction.apply(this,arrayArgs);
  }
  console.timeEnd(nameTimer)
}

/*
testCase(sum, "sum")
testCase(mSum, "mSum")
*/
/*
Вывод 
при sleep(500)
При i <= 100 функции выполняются за: sum: 50607.292724609375ms, mSum: 502.144775390625ms
При i <= 50 функции выполняются за: sum: 25555.572021484375ms, mSum:  502.006103515625ms
При i <= 10 функции выполняются за: sum: 5521.896728515625ms, mSum:502.318359375ms
без задежки
При i <= 100 функции выполняются за: sum: 102.6240234375ms, mSum: 2.8642578125ms
При i <= 50 функции выполняются за: sum: 56.802001953125ms, mSum:  2.36572265625ms
При i <= 10 функции выполняются за: sum: 11.35595703125ms, mSum:2.2119140625ms
Функция mSum позволяет значительно сэкономить время обработки функции
*/

