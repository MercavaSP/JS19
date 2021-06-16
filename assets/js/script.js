'use strict';

// Кнопку "Рассчитать" через id
const countBtn = document.getElementById('start');

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 

const addIncomeBtn = document.getElementsByTagName('.button'[0]);
const addExpensesBtn = document.getElementsByTagName('.button'[1]);

// Чекбокс по id через querySelector

const depositCheckBox = document.querySelector('#deposit-check');

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll

const addIncomeField = document.querySelectorAll('.additional_income-item');

// Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">

const budgetDayVal = document.getElementsByClassName('.budget_day-value');
const expensesMonthVal = document.getElementsByClassName('.expenses_month-value');
const addIncomeVal = document.getElementsByClassName('.additional_income-value');
const addExpensesVal = document.getElementsByClassName('.additional_expenses-value');
const incomePeriodVal = document.getElementsByClassName('.income_period-value');
const targetMonthVal = document.getElementsByClassName('.target_month-value');

// Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.

const salaryAmount = document.querySelector('.salary-amount');
const incomTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const additionalIncomeItem = document.querySelector('.additional_income-item');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');


// функция проверки на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
  };

// функция проверки на текст
let isString = function(n) {
    let num = Number(n);
    if (typeof n === 'string' && isNaN(num)) {
        return true;
    }
    return false;
};

//  функция проверки введенно ли число
let numberValidate = function(question, answer) {
    let item;
    do {
        item = prompt(question, answer);
    }
    while(!isNumber(item));
    return item;
};

// функция проверки введен ли текст
let stringValidate = function(question, answer) {
    let item;
    do {
        item = prompt(question, answer);
    }
    while(!isString(item));
    return item;
};


let money;
let start = function() {
       do {
            money = prompt('Ваш месячный доход?', 50000);
        }
        while (!isNumber(money));
    };

start();

let appData = {
  income: {},
  addIncome: {},
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 12,
  budget: money,
  percentDeposit: 0,
  moneyDeposit: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function() {
    
    if(confirm('Есть ли у вас дополнительный заработок?')){
        let itemIncome = stringValidate('Какой у вас есть дополнительный зароботок?', 'Таксую');
        let cashIncome = numberValidate('Скольно вы зарабатываете?', 10000);
        appData.income[itemIncome] = cashIncome;
    }  


    let addExpenses = stringValidate('Перечислите возможные расходы', 'Театр, Кино, Ресторан');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  
    let sum = 0,
        message;
    for (let i = 0; i < 2; i++) {
        message = stringValidate(`Введите обязательные расходы`);
        do {
            sum = +numberValidate('Во сколько это обойдется?');
        }
            while(!isNumber(sum));  
            appData.expenses[message] = sum;
        }  
    
  }, /* End of asking  */
  


  getExpensesMonth: function() {
    for (const key in appData.expenses) {
      appData.expensesMonth +=appData.expenses[key];
    }
    console.log('Расходы за месяц: ', appData.expensesMonth);
    return appData.expensesMonth;
    
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
    },
    
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = numberValidate(' Какой годовой процент депозита?', '10');
            appData.moneyDeposit = numberValidate('Какая сумма заложена?', 10000);
        }     
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    },


}; /* End of appData */
appData.asking();
appData.getInfoDeposit();
              
appData.getTargetMonth();
appData.getBudget();
appData.getExpensesMonth();

console.log(appData.getStatusIncome());
console.log("expenses", appData.expenses);
console.log(`Наша программа включает в себя данные:`);
  for (const key in appData) {
  
  console.log(`${key} = ${appData[key]}`);
  }

// каждое слово с большой буквы слова разделены запятой и пробелом

let str = appData.addExpenses;
str.forEach((el, i) => {
  let res;
  el = el.trim();
  res = el.replace(el[0], el[0].toUpperCase()); 
  str[i] = res;
});
console.log(str.join(', '));





