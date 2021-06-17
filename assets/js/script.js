// Восстановить порядок книг.

const bookNumber = document.querySelectorAll('.book');
    bookNumber[0].before(bookNumber[1]);
    bookNumber[5].after(bookNumber[2]);
    bookNumber[3].before(bookNumber[4]);

// Заменить картинку заднего фона на другую из папки image

const bgImage = document.querySelector('body');

    bgImage.setAttribute('style', 'background-image:url(/images/you-dont-know-js.jpg)')

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

const bookName = document.getElementsByTagName('a'); 
    bookName[2].textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы

const removeAdv = document.querySelector('.adv');
    removeAdv.remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

const elem = document.querySelectorAll('li');
    elem[9].append(elem[12]);
    elem[12].append(elem[14]);
    elem[15].append(elem[8]);

    elem[37].append(elem[45]);
    elem[45].append(elem[39]);
    elem[38].before(elem[40]);
    elem[44].before(elem[41]);
    

console.log(elem);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const cloneElem = elem[56].cloneNode(true);
        
    elem[55].after(cloneElem);
    cloneElem.textContent = 'Глава 8: За пределами ES6';