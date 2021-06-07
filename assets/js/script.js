'use strict';


    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };


    let money;
    let income = 'Фриланс';
    let addExpenses = prompt('Перечислите возможные расходы через запятую');
    let deposit = confirm('Есть ли у вас депозит в банке?');
    const mission = 2000;
    
    let addExpenses1,
        addExpenses2;


    let start = function() {
        // money = prompt('Ваш месячный доход?');

        // while (!isNumber(money)) {
        //     money = prompt('Ваш месячный доход?');
        // }
        

        do {
            money = prompt('Ваш месячный доход?');
        }
        while (!isNumber(money));



        // while (isNaN(parseFloat(money))) {
        //     money = prompt('Ваш месячный доход?');
        // }


        // while (isNaN(money) || money.trim() === '' || money == null) {
        //     money = prompt('Ваш месячный доход?');
        // }
    };

    start();
    
    let showTypeOf = function(data) {
        console.log(data, typeof(data));
    };
    let expensesAmount = getExpensesMonth();
    
    function getExpensesMonth() {

        let sum = 0;
        
        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                addExpenses1 = prompt('Введите обязательные расходы?', );
            } else if (i === 1) {
                addExpenses2 = prompt('Введите обязательные расходы?', );
            }
           do {
            sum += +prompt('Во сколько это обойдется?');
            }
            while (!isNumber(sum));
        }
        console.log(sum, typeof(sum));
        return sum;   
    }
    
    let accumulatedMonth = getAccumulatedMonth();
    
    function getAccumulatedMonth() {
        return money - expensesAmount;
    }
    
    let getTargetMonth = function() {
        return Math.round(mission / accumulatedMonth);
    };
    
    let budgetDay = Math.floor(accumulatedMonth / 30);            
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
    console.log('расход за месяц: ' + expensesAmount);
    console.log(addExpenses.toLowerCase().split(', '));
    
    function monthCheck() {

        if (getTargetMonth() >= 0) {
            return ('Cрок достижения цели в месяцах: ' + getTargetMonth());
        } else {
            return ('Цель не будет достигнута');
        }

    }
    
    console.log(monthCheck());

    
    console.log('Бюджет на день: ' + budgetDay);
    console.log(getStatusIncome());