'use strict';

// Переменная lang может принимать 2 значения: 'ru' 'en'.

    // let userLanguage = prompt('Укажиьте свой язык:');
    // const weekDaysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
    // const weekDaysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // if (userLanguage === 'ru') {
    //     console.log([weekDaysRu]);
    // } else if (userLanguage === 'en') {
    //     console.log([weekDaysEn]);
    // } else {
    //     alert('Незнакомый язык');
    // }



// через switch-case 
    // switch (userLanguage) {
    //     case 'ru':
    //       console.log([weekDaysRu]);  
    //       break;
    //     case 'en':
    //       console.log([weekDaysEn]);
    //       break;
    //     default:
    //       alert('Незнакомый язык');
    //     //   break;
    // }

/* через многомерный массив без ифов и switch. */

    // let namePerson = prompt('Как вас завут: ');
    let personSex = prompt('Input your sex: ');
    

    // if (namePerson == 'Артем') {
    //     console.log('Директор');
    // } else if (namePerson === 'Максим') {
    //     console.log('Учител');
    // } else {
    //     console.log('Студент');
    // }

    

   
    // let stName = namePerson == 'Артем' ? 'Директор' : ('Максим' ? 'Учитель' : 'Ученик');
    
    let www = personSex === 'Man' ? 'you are man' : ('Woman' ? 'You are woman' : 'other');

    // console.log(stName);
    
    console.log(www);