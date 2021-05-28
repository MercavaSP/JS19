{
    const money = 500;
    let income = 'Car wash';
    let addExpenses = 'Eat, Drink, Sleep';
    let deposit = true;
    const mission = 63000;
    const period = 5;
    let budgetDay = money / 30;


    console.log(typeof(money));
    console.log(typeof(income));
    console.log(typeof(deposit));

    console.log(addExpenses.length);
    
    console.log('Период равен: ' + period + ' месяцев. ' + 'Цель заработать ' + mission +' евро');

    console.log(addExpenses.toLowerCase().split(', '));

    console.log('Доход за месяц: ' + budgetDay);
    
}


