'use strict';

    let money = +prompt('Ваш месячный доход?', 50000);
    let income = 'Фриланс';
    let addExpenses = prompt('Перечислите возможные расходы через запятую');
    let deposit = confirm('Есть ли у вас депозит в банке?');
    const mission = 2000;
    
    let addExpenses1 = prompt('Введите обязательные расходы?');
    let amount1 = +prompt('Во сколько это обойдется?');
    let addExpenses2 = prompt('Введите обязательные расходы?');
    let amount2 = +prompt('Во сколько это обойдется?');
    let budgetDay = Math.floor(accumulatedMonth() / 30);            
    
    let showTypeOf = function(data) {
        console.log(data, typeof(data));
    };
  
    function getExpensesMonth() {
      return (amount1 + amount2);
    }
    
    function getAccumulatedMonth() {
        return (money - getExpensesMonth());
    }

    function accumulatedMonth()  {
        return (getAccumulatedMonth());
    }
    
    let getTargetMonth = function() {
        return Math.round(mission / accumulatedMonth());
    };
    


    let getStatusIncome = function() {
        
        if (budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (budgetDay >= 600 && budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay >= 0 && budgetDay <= 600) {
            return ('К сожалению у вас уровень доход ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    };
    
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);
    console.log('расход за месяц: ' + getExpensesMonth());
    console.log(addExpenses.toLowerCase().split(', '));
    console.log('Cрок достижения цели в месяцах: ' + getTargetMonth());
    console.log('Бюджет на день: ' + budgetDay);
    console.log(getStatusIncome());