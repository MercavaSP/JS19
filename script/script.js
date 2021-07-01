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

    //!menu
    const menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li>a');

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            closeBtn = document.querySelector('.close-btn');

        let count = -50,
            intervalMenu;

        const handlerAnimate = () => {
            intervalMenu = requestAnimationFrame(handlerAnimate);
            if (count < 0) {
                count++;
                menu.style.transform = `translate(${count * 2}%)`;
            } else {
                cancelAnimationFrame(intervalMenu);
            }
        };

        const closeMenu = () => {
            menu.style.transform = `translate(-100%)`;
            count = -50;
        };

        const eventAnim = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
                closeMenu();
            } else {
                intervalMenu = requestAnimationFrame(handlerAnimate);
            }
        };
        const eventWithoutAnim = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
                closeMenu();
            } else {
                menu.style.transform = `translate(0%)`;
                count = -50;
            }
        };

        const timoutsMenu = [];

        const sizeMenu = () => {
            timoutsMenu.push(setTimeout(() => {
                timoutsMenu.forEach(item => clearTimeout(item));

                if (window.innerWidth >= 768) {
                    btnMenu.removeEventListener('click', eventWithoutAnim);
                    btnMenu.addEventListener('click', eventAnim);
                } else {
                    btnMenu.removeEventListener('click', eventAnim);
                    btnMenu.addEventListener('click', eventWithoutAnim);
                }
            }, 500));
        };


        window.addEventListener('resize', sizeMenu);
        window.addEventListener('load', sizeMenu);
        closeBtn.addEventListener('click', closeMenu);
        menuItems.forEach(elem => elem.addEventListener('click', closeMenu));

    };

    toggleMenu();


    //!popup
    const togglePopUp = () => {

        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popup.style.display = 'block';
        popup.style.transform = 'translateY(-100%)';
        popupContent.style.transform = 'translateX(-100%)';

        const popupTransition = value => {
            popupContent.style.transition = `${value}`;

            popupBtns.forEach(btn => btn.addEventListener('click', () => {
                popupContent.style.transform = 'translateX(0%)';
                popup.style.transform = 'translateY(0%)';
            }));
        };

        const timoutsPopup = [];
        const animCancel = () => {
            timoutsPopup.push(setTimeout(() => {
                timoutsPopup.forEach(item => clearTimeout(item));

                if (window.innerWidth >= 768) {
                    popupTransition('1s');
                } else {
                    popupTransition('');
                }
            }, 500));
        };

        animCancel();
        window.addEventListener('resize', animCancel);

        popupClose.addEventListener('click', () => {
            popup.style.transform = 'translateY(-100%)';
            popupContent.style.transform = 'translateX(-100%)';
        });
    };

    togglePopUp();
});
