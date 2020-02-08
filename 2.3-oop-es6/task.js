"use strict"

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

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const staff = new Weapon("Посох", 8, 300, 2);
const longBow = new Weapon("Длинный лук", 15, bow.durability, 4);
const axe = new Weapon("Секира", 27, 800, sword.range);
const staffStorm = new Weapon("Посох Бури", 10, staff.durability, 3);
//Проверка меча на половину урона
//sword.takeDamage(400);
//console.log(sword.durability);
//console.log(sword.getDamage())
//console.log(sword.isBroken())
//Проверка руки с бесконечной прочностью
//arm.takeDamage(400);
//console.log(arm.durability);
//console.log(arm.getDamage())
//console.log(arm.isBroken())
//Проверка посоха на отрицательную прочность
//staff.takeDamage(400);
//console.log(staff.durability);
//console.log(staff.getDamage())
//console.log(staff.isBroken())
