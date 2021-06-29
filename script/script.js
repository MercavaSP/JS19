'use strict';

window.addEventListener("DOMContentLoaded", () => {
    // таймер
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaning() {
            const dateStop = new Date(deadline).getTime();
            const dateNow = new Date().getTime();
            const timeRemaining = (dateStop - dateNow) / 1000;
            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function formatTime(data) {
            if (data < 10) {
                data = '0' + data;
            }
            return data;
        }

        const timerId = setInterval(() => {
            const timer = getTimeRemaning();
            timerHours.textContent = formatTime(timer.hours);
            timerMinutes.textContent = formatTime(timer.minutes);
            timerSeconds.textContent = formatTime(timer.seconds);

            if (timer.timeRemaining < 0) {
                clearInterval(timerId);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }, 1000);


    }
    countTimer('06 july 2021');

    //Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li>a');
        let count = -50,
            menuMove;

        const handlerAnimate = () => {
            menuMove = requestAnimationFrame(handlerAnimate);
            if (count < 0) {
                count++;
                menu.style.transform = `translate(${count * 2}%)`;
            } else {
                cancelAnimationFrame(menuMove);
            }
        };

        const closeMenu = () => {
            menu.style.transform = `translate(-100%)`;
            count = -50;
        };

        let event = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
                closeMenu();
            } else {
                menuMove = requestAnimationFrame(handlerAnimate);
            }
        };

        btnMenu.addEventListener('click', event);

        closeBtn.addEventListener('click', closeMenu);
        menuItems.forEach(elem => elem.addEventListener('click', closeMenu));

    };
    if (document.documentElement.clientWidth >= 768) {
        toggleMenu();
    }

    //popup

    const toglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    toglePopUp();


});

