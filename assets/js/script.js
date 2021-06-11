'use strict';

// функция проверки на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
  };

let money;
let start = function() {
       do {
            money = prompt('Ваш месячный доход?');
        }
        while (!isNumber(money));
    };

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
      let addExpenses = prompt('Перечислите возможные расходы', 'Театр, Кино, Ресторан');
      appData.addExpenses = addExpenses.toLowerCase().split(', ');
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
  
  
  }, /* End of asking  */
  


  getExpensesMonth: function() {
    let expensesMonth = 0;
    for (const key in appData.expenses) {
      expensesMonth +=appData.expenses[key];
    }
    console.log('Расходы за месяц: ', expensesMonth);
    return expensesMonth;
  },

  getBudget: function () {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
   },


  getTargetMonth: function() {
        return Math.round(appData.mission / appData.getBudget);
    },
  
  getStatusIncome: function() {
        
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
            return ('К сожалению у вас уровень доход ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },
    monthCheck: function() {
        if (appData.getTargetMonth() >= 0) {
            return ('Cрок достижения цели в месяцах: ' + appData.getTargetMonth());
        } else {
            return ('Цель не будет достигнута');
        }
    }
   
}; /* End of appData */
appData.asking();
    
              
appData.getExpensesMonth();
appData.getTargetMonth();
console.log(appData.getStatusIncome());
console.log("expenses", appData.expenses);
console.log(`Наша программа включает в себя данные:`);
  for (const key in appData) {
  
  console.log(`${key} = ${appData[key]}`);
  }