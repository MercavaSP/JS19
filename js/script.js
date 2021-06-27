'use strict';

const countBtn = document.getElementById('start');
const cancelBtn = document.getElementById('cancel');
const btnPlus = document.getElementsByTagName('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1];
const depositCheck = document.querySelector('#deposit-check');
const additionalIncomeItems = document.querySelectorAll('.additional_income-item');
const budgeMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMmonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const range = document.querySelector('.range');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
let incomeItems = document.querySelectorAll('.income-items');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const inputPercent = document.querySelector('[placeholder="Процент"]');


const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const isString = function(n) {
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
  // depositCheck;
}

class AppData {
  constructor() {
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
  }

check() {
  if (salaryAmount.value === '') {
     countBtn.remuveAttribute('disabled');
  }
}

start() {
  if (salaryAmount.value === '') {
   countBtn.disabled = true;
    return;
  }

  if (Number(inputPercent.value) < 0 || Number(inputPercent.value) > 100) {
      alert('Введите корректное значение в поле проценты');
      return;
    }



  this.budget = +salaryAmount.value;
  
  this.getExpInc(); 
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getInfoDeposit();

  this.getBudget();

  this.showResult();
  disabledInputText();
}

showResult() {
    incomePeriodValue.value = this.calcPeriodMoney() ;
    budgeMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMmonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome;
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriodMoney() ;

}

addExpensesBlock() {    
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
}

addIncomeBlock() {
  const cloneIncomeItem = incomeItems[0].cloneNode(true);
  cloneIncomeItem.querySelector('.income-title').value = '';
  cloneIncomeItem.querySelector('.income-amount').value = '';
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    incomePlus.style.display = 'none';
  }
}

getAddIncome() {
  this.addIncome = [];    
  additionalIncomeItems.forEach((item) => {
    const itemValue = item.value.trim();
    if (itemValue !== '') {
      this.addIncome.push(itemValue);
    }
  });   
}
getAddExpenses() {
  this.addExpenses = [];
  const addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(item => {
    item = item.trim();
    if (item !== '') {
      this.addExpenses.push(item);
    }
  });
}

getExpInc() {
    const count = (item) => {
        const startSrt = item.className.split('-')[0];
        const itemTitle = item.querySelector(`.${startSrt}-title`).value;
        const itemAmount = item.querySelector(`.${startSrt}-amount`).value;
        if (itemTitle !== '' && itemAmount !== '') {
        this[startSrt][itemTitle] = itemAmount;
        }
    };
    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
}

getExpensesMonth() {
    let res = 0;   
    for (let key in this.expenses) {
      res += +this.expenses[key];
    }
    this.expensesMonth = res;
}

getBudget() {
    const MonthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth + MonthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
}
getTargetMonth() {
    
    return targetAmount.value / this.budgetMonth;
}

calcPeriodMoney() {
    return (+this.budgetMonth) * +periodSelect.value;
}
changlePeriodSelect() {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.calcPeriodMoney();
}
reset() {
    const inputText = document.querySelectorAll('[type="text"]:not(.result-total)');
    const inputAll = document.querySelectorAll('input:not(.period-select)');
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

    depositCheck.checked = false;
    this.depositHandler();

}

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }

  chengePercent() {
      const valueSelect = this.value;
      if (valueSelect === 'other') {
        depositPercent.style.display = 'inline-block';
      } else {
        depositPercent.value = valueSelect;
        depositPercent.style.display = 'none';

      }

  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.chengePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      this.deposit = false;
      depositPercent.value = '';
      depositBank.value = '';
      depositAmount.value = '';
      depositBank.removeEventListener('change', this.chengePercent);

    }
  }

  eventListeners() {
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
    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }

}
const appData = new AppData();
appData.eventListeners();

