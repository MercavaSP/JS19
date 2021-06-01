'use strict';

// Переменная lang может принимать 2 значения: 'ru' 'en'.

    let userLanguage = prompt('Укажиьте свой язык:');
    const weekDaysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
    const weekDaysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


// через IF 
    if (userLanguage === 'ru') {
        console.log([weekDaysRu]);
    } else if (userLanguage === 'en') {
        console.log([weekDaysEn]);
    } else {
        alert('Незнакомый язык');
    }



// через switch-case 
    switch (userLanguage) {
        case 'ru':
          console.log([weekDaysRu]);  
          break;
        case 'en':
          console.log([weekDaysEn]);
          break;
        default:
          alert('Незнакомый язык');
    }

/* через многомерный массив без ифов и switch. */




/* У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
 если значение “Максим” то вывести в консоль “преподаватель”,
  с любым другим значением вывести в консоль “студент”

*/
    let namePerson = prompt('Как вас завут: ');
   
    let stName = namePerson == 'Артем' ? 'Директор' : ( namePerson =='Максим' ? 'Учитель' : 'Ученик');
      console.log(stName);
    