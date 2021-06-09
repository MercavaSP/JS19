'use strict';

const game = function() {

    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    
    // Загадываем число от 1 до 100
    function getRandomNumber() {
        const min = 1;
        const max =101;
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    
    
    
    function getAnswer() { 

        let answer = +prompt('Угадай число от 1 до 100!');

        console.log(typeof(answer));
        return answer;
     }


    
    console.log('загаданное число: ' + getRandomNumber());
    console.log('Угадываем: ' + getAnswer(), );
};


 game();




