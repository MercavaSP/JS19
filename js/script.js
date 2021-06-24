'use strict';

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
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    range = document.querySelector('.range'),
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

  inpitText.forEach(element => {
    element.disabled = true;
  });
  countBtn.style.display = 'none';
  cancelBtn.style.display = 'block';
}

const AppData = function() {
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
};

AppData.prototype.check = function() {
  if (salaryAmount.value === '') {
     countBtn.remuveAttribute('disabled');
  }
};

AppData.prototype.start = function () {
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
};

AppData.prototype.showResult = function() {
    incomePeriodValue.value = this.calcPeriodMoney() ;
    budgeMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMmonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome;
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriodMoney() ;

};
AppData.prototype.addExpensesBlock = function() {    
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
};  
AppData.prototype.getExpenses = function() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
};
AppData.prototype.addIncomeBlock = function() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
};
AppData.prototype.getAddIncome = function() {
    this.addIncome = [];    
    additionalIncomeItems.forEach((el) => {
      let elValue = el.value.trim();
      if (elValue !== '') {
        this.addIncome.push(elValue);
      }
    });   
};
AppData.prototype.getAddExpenses = function() {
    this.addExpenses = [];
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(el => {
      el = el.trim();
      if (el !== '') {
        this.addExpenses.push(el);
      }
    });
};
AppData.prototype.getIncome = function() {
    incomeItems.forEach((el) => {
      let itemIncome = el.querySelector('.income-title').value;
      let cashIncome = el.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];

    }
};
AppData.prototype.getExpensesMonth = function() {
    let res = 0;   
    for (let key in this.expenses) {
      res += +this.expenses[key];
    }
    this.expensesMonth = res;
};
AppData.prototype.getBudget = function(){
    this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function() {
    
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.calcPeriodMoney = function() {
    return (+this.budgetMonth) * +periodSelect.value;
};
AppData.prototype.changlePeriodSelect = function() {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.calcPeriodMoney();
};
AppData.prototype.reset = function() {
    let inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
    let inputAll = document.querySelectorAll('input:not(.period-select)');
    countBtn.disabled = false;   
  
    inputAll.forEach(element => {
      element.value = '';    
    });
  
    inputText.forEach(element => {
      element.disabled = false;
    });
  
    countBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;
    incomeItems.forEach((element, i) => {  
      if (i !== 0) {
        element.remove();
      }
    });
    incomePlus.style.display = 'block';
  
    expensesItems.forEach((element, i) => {  
      if (i !== 0) {
        element.remove();
      }
    });
    expensesPlus.style.display = 'block';
};



AppData.prototype.eventListeners = function () {
  countBtn.addEventListener('click', this.start.bind(this));
  cancelBtn.addEventListener('click', this.reset.bind(this));
  incomePlus.addEventListener('click', this.addIncomeBlock);
  expensesPlus.addEventListener('click', this.addExpensesBlock);
  periodSelect.addEventListener('input', this.changlePeriodSelect.bind(this));
  salaryAmount.addEventListener('input', () => {
    if (salaryAmount.value !== '') {
      countBtn.disabled = false;    
     } else {
      countBtn.disabled = true;    
     }
  
  });
};

const appData = new AppData();
appData.eventListeners();
console.log(appData);

