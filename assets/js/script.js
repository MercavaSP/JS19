'use strict';

//Функция проверяет является числом или нет
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//рандомайзер числа от 1 до 100
let createGame = function(){
  let correctNumber = Math.floor(Math.random() * 101);
  console.log(correctNumber);
  let getNumber = function() {
 
    //Функция проверяет, хочет играть или нет
    let startGame = function(go) { 
      if (go) {
        getNumber();
      } else {
        alert('Спасибо, что поиграли со мной');
      }
    };
  
    let wish,
        userNumber = prompt('Угадай число от 1 до 100');
    
    if (userNumber === null) {
      alert('До встречи...');
    }
    else if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)){
      wish = confirm('Вы не ввели число или ввели число больше 100!');
      startGame(wish);
    }
    else if (userNumber == correctNumber) {
      alert('Ты угадал!');
    } 
    else if (userNumber > correctNumber) {   
      wish = confirm('Загаданное число меньше. Попробуй еще');
      startGame(wish);
    } 
    else if (userNumber < correctNumber) {
      wish = confirm('Загаданное число больше. Попробуй еще');
      startGame(wish);
    }
  };
  return getNumber;
};    

let game = createGame();
game();
