class AlarmClock {
    constructor () {
      this.alarmCollection = [];
      this.timerId = null;
    }
    
    addClock (time, callback, id) {
      if (id === undefined) {
        console.error(`Ошибка! Не передан id звонка`)
        return
      }
      
      if (this.alarmCollection.some(element => element.id === id)) {
        console.error(`Ошибка! Звонок с уже существующим id звонка`)
        return
      }
      
      return this.alarmCollection.push({id,time,callback});
    }
    
    removeClock(id) {
      if (this.alarmCollection.some(element => element.id === id)) {
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
        console.log( `Будильник ${id} удален!`)
        return true
      } else {
        console.log(`Будильника ${id} несуществует!`)
        return false
      }      
    }
    
    getCurrentFormattedTime() {
      let currentDate = new Date();
      let currentHour = currentDate.getHours();
      let currentMinutes = currentDate.getMinutes();
      if (currentHour < 10) {
        currentHour = `0${currentHour}`
      }
      if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`
      }
      return `${currentHour}:${currentMinutes}`
    }
    
    start() {
      let currentDate = this.getCurrentFormattedTime()
      function checkClock(element) {
        if (element.time === currentDate) {
          return element.callback();
        }
      }
      
      let interval = setInterval (() => {
        this.alarmCollection.forEach(element => checkClock(element))
      }, 1000);
      
      return this.timerId = interval;    
    }
    
    stop() {
      if (this.timerId ==! null) {
        clearInterval(this.timerId)
      }
      return this.timerId = null
    }
    
    printAlarms () {
      this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`))
  
    }
    
    clearAlarms () {
      this.stop();
      this.alarmCollection = [];
    }
  }
  
  function testcase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("20:12", () => console.log(`Скоро спать`), 1);
    phoneAlarm.addClock('20:13', () => {console.log(`Пора готовиться ко сну!`); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock('20:13', () => console.log(`Иди умываться!`));
    phoneAlarm.addClock('20:14', () =>{ console.log(`Иди спать, завтра на работу!`); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()}, 3);
    phoneAlarm.addClock('20:25', () =>{ console.log(`Иди спать, завтра на работу!`)},1);
    phoneAlarm.printAlarms()
    phoneAlarm.start();
  }
  
  testcase();
  