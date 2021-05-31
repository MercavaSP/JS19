'use strict';


    let money = +prompt('Ваш месячный доход?');
    let income = null;
    let addExpenses = prompt('Перечислите возможные расходы через запятую');
    let deposit = confirm('Есть ли у вас депозит в банке?');
    const mission = 55000;
    
    let addExpenses1 = prompt('Введите обязательные расходы?');
    let amount1 = +prompt('Во сколько это обойдется?');
    let addExpenses2 = prompt('Введите обязательные расходы?');
    let amount2 = +prompt('Во сколько это обойдется?');
    let budgetMonth = money - (amount2 + amount1);
    let budgetDay = Math.floor(budgetMonth / 30);
    let period = Math.round(mission / budgetMonth);
    
    
    
    console.log('Зарплата: ' + money);
    console.log(income);
    console.log(deposit);
    console.log('Расходы: ' + addExpenses);
    console.log('За: ' + period + ' месяцев. ' + 'Можно заработать ' + mission +' евро');
    console.log(addExpenses.toLowerCase().split(', '));
    console.log('Доход за день: ' + budgetDay);
    console.log('Обязательный расход 1: ' + addExpenses1);
    console.log('Сумма расхода 1: ' + amount1);
    console.log('Обязательный расход 2: ' + addExpenses2);
    console.log('Сумма расхода 2: ' + amount2);
    console.log('Доход за месяц: ' + budgetMonth);

    if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay >= 0) {
        console.log('К сожалению у вас уровень доход ниже среднего');
    } else {
        console.log('Что то пошло не так');
    }
    
    