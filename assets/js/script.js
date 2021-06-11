"use strict";

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function() {
  do {
    money = prompt('Ваш месячный доход', 50000);
  }
  while(!isNumber(money));
};

start();

let appData = {
  income: {},
  addIncome: {},
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 6,
  budget: money,
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы', 'Театр, Кино, Ресторан');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let sum = 0,
            message;

        for (let i = 0; i < 2; i++) {
          message = prompt(`Введите обязательные расходы`);
          do {
            sum = +prompt('Во сколько это обойдется?');
          }
          while(!isNumber(sum));  
          appData.expenses[message] = sum;
        }  


  },


  getExpensesMonth: function () {
    let res = 0;
    for (const key in appData.expenses) {
      res +=appData.expenses[key];
    }
    console.log('Расходы за месяц: ', res);
    return res;
  },

  getBudget: function () {
    return appData.budgetMonth - appData.budgetDay;
  },

  getTargetMonth: function () {
    let res = Math.floor(appData.mission / appData.getBudget());
    if (res > 0) {
      console.log('Цель будет достигнута: ' + res + ' месяцев');
    } else {
      console.log('Цель не будет достигнута');
    }
    return res;
  },
  
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0) {
      return ('Что то пошло не так');
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
console.log(appData.getStatusIncome());

console.log("expenses", appData.expenses);

console.log(`Наша программа включает в себя данные:`);
for (const key in appData) {
  
  console.log(`${key} = ${appData[key]}`);
}