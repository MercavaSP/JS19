"use strict";

let countBtn = document.getElementById('start'),
    cancelBtn = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'), 
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1], 
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    budgeMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMmonthValue = document.querySelector('.expenses_month-value'),
    addIncomeVal = document.querySelector('.additional_income-value'),
    addExpensesVal = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items');

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let isString = function(n) {
  let num =  Number(n);
  if (typeof n === 'string' && isNaN(num)) {
    return true;
  } 
  return false;
};
const validateNumber = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer); 
  }
  while(!isNumber(res));  
  return res; 
};
const validateString = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer); 
  }
  while(!isString(res)); 
  return res; 
};



function disabledInputText() {
  let inpitText = document.querySelectorAll('[type="text"]:not(.result-total)');

  inpitText.forEach( function(element) {
    element.disabled = true;
  });
  countBtn.style.display = 'none';
  cancelBtn.style.display = 'block';
}

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function() {
    if (salaryAmount.value === '') {
     countBtn.disabled = true;
      return;
    }
    this.budget = +salaryAmount.value;
    
    this.getExpenses(); 
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
    disabledInputText();
    
  },
  showResult: function() {
    incomePeriodValue.value = this.calcPeriodMoney() ;

    budgeMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMmonthValue.value = this.expensesMonth;
    addExpensesVal.value = this.addExpenses.join(', ');
    addIncomeVal.value = this.addIncome;
    targetMonthValue.value = Math.ceil(this.getTargetMonth());

    incomePeriodValue.value = this.calcPeriodMoney() ;

  },
  addExpensesBlock: function() {    
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },  
  getExpenses: function() {
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  addIncomeBlock: function() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getAddIncome: function() {
    this.addIncome = [];    
    additionalIncomeItems.forEach(function(item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });   
  },
  getAddExpenses: function() {
    this.addExpenses = [];
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  },
  getIncome: function() {
    incomeItems.forEach(function(item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];

    }
  },
  getExpensesMonth: function() {
    let res = 0;   
    for (let key in this.expenses) {
      res += +this.expenses[key];
    }
    this.expensesMonth = res;
  },
  getBudget: function(){
    this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  getTargetMonth: function() {
    
    return targetAmount.value / this.budgetMonth;
  },
  getStatusIncome: function() {
    if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      return ('У вас средний уровень дохода');
    } else if (this.budgetDay < 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay <= 0) {
      return ('Что то пошло не так');
    }
  },
  getInfoDeposit: function() {
    if (this.deposit) {
      this.percentDeposit = validateNumber('Какой годовой процент', 10);
      this.moneyDeposit = validateNumber('Какая сумма заложена?', 10000);
    }
  },
  calcPeriodMoney: function() {
    return (+this.budgetMonth) * +periodSelect.value;
  },
  changlePeriodSelect: function() {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.calcPeriodMoney();
  },
  reset: function() {
    
    let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
    let inputAll = document.querySelectorAll('input:not(.period-select)');
    countBtn.disabled = false;   
  
    inputAll.forEach(function(element) {
      element.value = '';    
    });
  
    inputText.forEach(function(element) {
      element.disabled = false;
    });
  
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
  
    countBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;
    incomeItems.forEach(function(element, i) {  
      if (i !== 0) {
        element.remove();
      }
    });
    incomePlus.style.display = 'block';
  
    expensesItems.forEach(function(element, i) {  
      if (i !== 0) {
        element.remove();
      }
    });
    expensesPlus.style.display = 'block';
  }
};


countBtn.addEventListener('click', appData.start.bind(appData));
cancelBtn.addEventListener('click', appData.reset.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.changlePeriodSelect.bind(appData));
salaryAmount.addEventListener('input', function() {
  if (salaryAmount.value !== '') {
    countBtn.disabled = false;    
   } else {
    countBtn.disabled = true;    
   }

});