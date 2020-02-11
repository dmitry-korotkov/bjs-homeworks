"use strict"
//Задачи 1-2
class Weapon {
  constructor(object = {
            name: "undefined",
            attack: 0,
            durability: 0,
            range: 0,
        }) {
    this.name = object.name;
    this.attack = object.attack;
    this.durability = object.durability;
    this.range = object.range;
    this.limitDurability = object.durability * 30 / 100;
  }
  
  

  takeDamage(damage) { 
    this.durability = this.durability - damage;
    if (this.durability < 0) {
        this.durability = 0;    
    } 
  }

  getDamage()  {
    if (this.durability === 0) {
      return 0;
    } else if (this.durability < this.limitDurability) {
      return this.attack / 2;
    } else {
      return this.attack;
    }
  }
  
  isBroken() {
    if (this.durability === 0) {
      return true
    }
    return false
  } 
}
/* 
//Создание объектов оружия к задаче 1.

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4,
});



//Проверка лука на половину урона
bow.takeDamage(170);
console.log(bow.durability);
console.log(bow.getDamage())
console.log(bow.isBroken())
//Проверка руки с бесконечной прочностью
arm.takeDamage(400);
console.log(arm.durability);
console.log(arm.getDamage())
console.log(arm.isBroken())
//Проверка "Длинный лук" на отрицательную прочность
longBow.takeDamage(400);
console.log(longBow.durability);
console.log(longBow.getDamage())
console.log(longBow.isBroken())

*/

//Создание объектов оружия к задаче 2.

class Arm extends Weapon {
  constructor() {
    super()
    this.name = "Лук";
    this.attack = 10;
    this.durability = Infinity;
    this.range = 1;
    this.limitDurability = Infinity * 0.3;
  }
}

class Bow extends Weapon {
  constructor() {
    super()
    this.name = "Рука";
    this.attack = 1;
    this.durability = 200;
    this.range = 30;
    this.limitDurability = 200 * 0.3;
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = "Длинный лук",
    this.attack = 15,
    this.range = 4;
  }
}

class Sword extends Weapon {
  constructor() {
      super();
      this.name = "Меч",
          this.attack = 25,
          this.durability = 500,
          this.range = 1,
          this.initialDurability = this.durability;
  }
}

class Knife extends Weapon {
  constructor() {
      super();
      this.name = "Нож",
          this.attack = 5,
          this.durability = 300,
          this.range = 1,
          this.initialDurability = this.durability;
  }
}

class Staff extends Weapon {
  constructor() {
      super();
      this.name = "Посох",
          this.attack = 8,
          this.durability = 300,
          this.range = 2,
          this.initialDurability = this.durability;
  }
}

class Axe extends Sword {
  constructor() {
      super();
      this.name = "Секира",
          this.attack = 27,
          this.durability = 800;
  }
}

class StaffStorm extends Staff {
  constructor() {
      super();
      this.name = "Посох бури",
          this.attack = 10,
          this.range = 3
  }
}



const arm = new Arm();
const bow = new Bow();
const longBow = new LongBow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const axe = new Axe();
const thunderStaff = new ThunderStaff();
//Проверка лука на половину урона
bow.takeDamage(170);
console.log(bow.durability);
console.log(bow.getDamage())
console.log(bow.isBroken())
//Проверка руки с бесконечной прочностью
arm.takeDamage(400);
console.log(arm.durability);
console.log(arm.getDamage())
console.log(arm.isBroken())
//Проверка "Длинный лук" на отрицательную прочность
longBow.takeDamage(400);
console.log(longBow.durability);
console.log(longBow.getDamage())
console.log(longBow.isBroken())

//Задача 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.gradesSubject = {};
  }

  getName() {
    return this.name
  }

  addGrade(grade, subject) {
   if (grade >= 1 && grade <= 5) {
     if (this.gradesSubject[subject] === undefined) {
      this.gradesSubject[subject] = [grade];
     } else {
       this.gradesSubject[subject].push(grade);
     }
     return this.gradesSubject[subject].length
   } else {
     return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
   }
  }

  getAverageBySubject(subject) {
    let sumGrade = 0;
    if (this.gradesSubject[subject] === undefined) {
      return 0
    }
    for (let i = 0; i < this.gradesSubject[subject].length; i++) {
      sumGrade += this.gradesSubject[subject][i];
    }
    return sumGrade / this.gradesSubject[subject].length;
  }

  getTotalAverage() {
    let gradeArray = Object.keys(this.gradesSubject)
    let sum = 0
    for (let i = 0; i < gradeArray.length; i++) {
     sum += log.getAverageBySubject(gradeArray[i]);
    }
    return sum / gradeArray.length
  }
}



const log = new StudentLog('Олег Никифоров');

//Проверка
console.log(log.getName())
log.addGrade(3,"math")
log.addGrade(5,"math")
log.addGrade(4,"geo")
console.log(log.addGrade("geo",4))
console.log(log.getAverageBySubject("math"))
console.log(log.getAverageBySubject("geo"))
console.log(`Средняя оценка по предметам: ${log.getTotalAverage()}`)
console.log(log)