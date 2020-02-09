"use strict"
//Задачи 1-2
class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.limitDurability = durability * 30 / 100;
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
Создание объектов оружия к задаче 1.

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const staff = new Weapon("Посох", 8, 300, 2);
const longBow = new Weapon("Длинный лук", 15, bow.durability, 4);
const axe = new Weapon("Секира", 27, 800, sword.range);
const staffStorm = new Weapon("Посох Бури", 10, staff.durability, 3);

Проверка меча на половину урона
sword.takeDamage(400);
console.log(sword.durability);
console.log(sword.getDamage())
console.log(sword.isBroken())
Проверка руки с бесконечной прочностью
arm.takeDamage(400);
console.log(arm.durability);
console.log(arm.getDamage())
console.log(arm.isBroken())
Проверка посоха на отрицательную прочность
staff.takeDamage(400);
console.log(staff.durability);
console.log(staff.getDamage())
console.log(staff.isBroken())
/*

/*
//Создание объектов оружия к задаче 2.
//1 способ

class Arm extends Weapon {}
class Bow extends Weapon {}
class Sword extends Weapon {}
class Knife extends Weapon {}
class Staff extends Weapon {}
class LongBow extends Bow {}
class Axe extends Sword {}
class StaffStorm extends Staff {}

const arm = new Arm("Рука", 1, Infinity, 1);
const bow = new Bow("Лук", 10, 200, 3);
const sword = new Sword("Меч", 25, 500, 1);
const knife = new Knife("Нож", 5, 300, 1);
const staff = new Staff("Посох", 8, 300, 2);
const longBow = new LongBow("Длинный лук", 15, bow.durability, 4);
const axe = new Axe("Секира", 27, 800, sword.range);
const staffStorm = new StaffStorm("Посох Бури", 10, staff.durability, 3);

//Проверка
bow.takeDamage(180);
console.log(bow.name);
console.log(bow.getDamage());
console.log(bow.durability);
console.log(bow.range);
console.log(bow.isBroken())

staffStorm.takeDamage(350);
console.log(staffStorm.name);
console.log(staffStorm.getDamage());
console.log(staffStorm.durability); 
console.log(staffStorm.range);
console.log(staffStorm.isBroken())
*/

/*
// 2 способ

class Arm extends Weapon {
  constructor() {
    super()
    this.name = "Рука";
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.limitDurability = Infinity * 0.3;
  }
}

class Bow extends Weapon {
  constructor() {
    super()
    this.name = "Лук";
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.limitDurability = 200 * 0.3;
  }
}

class Sword extends Weapon {
  constructor() {
    super()
    this.name = "Меч";
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.limitDurability = 500 * 0.3;
  }
}

class Knife extends Weapon {
  constructor() {
    super()
    this.name = "Нож";
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.limitDurability = 300 * 0.3;
  }
}

class Staff extends Weapon {
  constructor() {
    super()
    this.name = "Посох";
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.limitDurability = 300 * 0.3;
  }
}

class LongBow extends Bow {
  constructor() {
    super()
    this.name = "Длинный лук";
    this.attack = 15;
    this.durability = bow.durability;
    this.range = 4;
    this.limitDurability = bow.durability * 0.3;
  }
}

class Axe extends Sword {
  constructor() {
    super()
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    this.range = sword.range;
    this.limitDurability = 800 * 0.3;
  }
}

class StaffStorm extends Staff {
  constructor() {
    super()
    this.name = "Посох Бури";
    this.attack = 10;
    this.durability = staff.durability;
    this.range = 3;
    this.limitDurability = staff.durability * 0.3;
  }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new LongBow();
const axe = new Axe();
const staffStorm = new StaffStorm();
//Проверка

bow.takeDamage(180);
console.log(bow.name);
console.log(bow.getDamage());
console.log(bow.durability);
console.log(bow.range);
console.log(bow.isBroken())

staffStorm.takeDamage(350);
console.log(staffStorm.name);
console.log(staffStorm.getDamage());
console.log(staffStorm.durability); 
console.log(staffStorm.range);
console.log(staffStorm.isBroken())
*/

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
/*
//Проверка
console.log(log.getName())
log.addGrade(2,"math")
log.addGrade(3,"math")
log.addGrade(4,"math")
log.addGrade(4,"geo")
log.addGrade(7,"math")
log.addGrade(5,"geo")
log.addGrade(4,"alg")
log.addGrade(4,"fr")
log.addGrade(8,"alg")
console.log(log.getAverageBySubject("math"))
console.log(log.getAverageBySubject("fr"))
console.log(log.getTotalAverage())
console.log(log)
*/