'use strict';

window.addEventListener("DOMContentLoaded", () => {

    /* -==== Таймер ====- */

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

    countTimer('09 july 2021');

    /* -==== Меню ====- */

    const menu = document.querySelector('menu');

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
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
        const menuAnimCancel = () => {
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

        window.addEventListener('resize', menuAnimCancel);
        window.addEventListener('load', menuAnimCancel);

        const menuSelect = e => {
            const target = e.target;
            if (target.matches('A')) {
                closeMenu();
            }
        };
        menu.addEventListener('click', menuSelect);
    };

    toggleMenu();


    /* -==== popup ====- */
    const togglePopUp = () => {

        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn');
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
        const popupAimCancel = () => {
            timoutsPopup.push(setTimeout(() => {
                timoutsPopup.forEach(item => clearTimeout(item));

                if (window.innerWidth >= 768) {
                    popupTransition('1s');
                } else {
                    popupTransition('');
                }
            }, 500));
        };

        popupAimCancel();
        window.addEventListener('resize', popupAimCancel);

        popup.addEventListener('click', e => {
            let target = e.target;

            const close = () => {
                popup.style.transform = 'translateY(-100%)';
                popupContent.style.transform = 'translateX(-100%)';
            };

            if (target.classList.contains('popup-close')) {
                close();
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    close();
                }
            }
        });
    };

    togglePopUp();

    /* -==== Табы ====- */

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', e => {
            let target = e.target;
            target = target.closest('.service-header-tab');

            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, index) => {
                    if (item === target) {
                        toggleTabContent(index);
                    }
                });
            }
        });
    };
    tabs();
});
