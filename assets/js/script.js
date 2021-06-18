'use strict';

let countBtn = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],  
    depositCheckBox = document.querySelector('#deposit-check'),
    budgetDayVal = document.querySelector('.budget_day-value'),
    expensesMonthVal = document.querySelector('.expenses_month-value'),
    addIncomeVal = document.querySelector('.additional_income-value'),
    addExpensesVal = document.querySelector('.additional_expenses-value'),
    incomePeriodVal = document.querySelector('.income_period-value'),
    targetMonthVal = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomTitle = document.querySelector('.income-title'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    budgetMonthValue = document.querySelector(".budget_month-value"),
    periodAmount = document.querySelector('.period-amount'),
    incomeItem = document.querySelectorAll('.income-items');

/*   -==== Функция проверки на число ====-   */
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/*   -==== Функция проверки на текст ====-   */
let isString = function(n) {
    let num = Number(n);
    if (typeof n === 'string' && isNaN(num)) {
        return true;
    }
    return false;
};

/*   -==== Функция проверки введенно ли число ====-   */
let numberValidate = function(question, answer) {
    let item;
    do {
        item = prompt(question, answer);
    }
    while(!isNumber(item));
    return item;
};

/*   -==== Функция проверки введен ли текст ====-   */
let stringValidate = function(question, answer) {
    let item;
    do {
        item = prompt(question, answer);
    }
    while(!isString(item));
    return item;
};

/*   -==== Обьект appData ====-   */
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    incomeMonth: 0,
    deposit: false,
    budget: 0,
    percentDeposit: 0,
    moneyDeposit: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
        if(salaryAmount.value === ''){
            countBtn.disabled = true;
            return;
        }
        appData.budget = +salaryAmount.value;
        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResults();  // Вызов результатов на экран всегда должен быть последним!!!!
    },

/* -==== Выводим результаты  ====- */    
    showResults: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayVal.value = appData.budgetDay;
        expensesMonthVal.value = appData.expensesMonth;
        addExpensesVal.value = appData.addExpenses.join(', ');
        addIncomeVal.value = appData.addIncome.join(', ');
        targetMonthVal.value = Math.ceil(appData.getTargetMonth());
        incomePeriodVal.value = appData.calcSavedMoney();
    },

/* -==== Добавляем дополнительные поля для ввода Обязательных расходов ====- */    
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },

/* -==== Получаем данные по обязательным расходам ====- */    
    getExpenses: function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    
/* -==== Добавляем дополнительные поля для ввода дополнительных доходов ====- */    
  addIncomeBlock: function() {
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3) {
      incomePlus.style.display = 'none';
    }
  },

/* -==== Получаем данные по дополнительным доходам ====- */    
    getIncome: function() { 
       incomeItem.forEach(function(item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
    },

/* -==== Получаем дополнительные расходы ====- */    /*  возможно надо будет заменить  */
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },

/* -==== Получаем дополнительные доходы ====- */    
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
      let elValue = item.value.trim();
        if (elValue !== '') {
            appData.addIncome.push(elValue);
        }
      });
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth;
    },

    getBudget: function() {
        appData.budgetMonth = (appData.budget + appData.incomeMonth) - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

/* -==== Получаем накопления за перод ====- */    
    getTargetMonth: function() {
        return targetAmount.value / appData.budgetMonth;
    },
    
    calcSavedMoney: function() {
        return (+appData.budgetMonth) * +periodSelect.value;
    },
    
    changlePeriodSelect: function() {
        periodAmount.textContent = periodSelect.value;
        incomePeriodVal.value = appData.calcSavedMoney();
        },
}; /* -==== End of appData ====- */

countBtn.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.changlePeriodSelect);
salaryAmount.addEventListener('input', function() {
    if (salaryAmount.value !== '') {
    countBtn.disabled = false;    
   } else {
    countBtn.disabled = true;    
   }
});