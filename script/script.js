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

    countTimer('06 july 2021');

    /* -==== Меню ====- */

    const menu = document.querySelector('menu'),
        // menuItems = menu.querySelectorAll('ul>li>a'),
        body = document.querySelector('body');

    const toggleMenu = () => {
        // const btnMenu = document.querySelector('.menu');

        let count = -50,
            intervalMenu,
            menuFlag = false;

        let handlerAnimate = () => {
            intervalMenu = requestAnimationFrame(handlerAnimate);
            if (count < 0) {
                count++;
                menu.style.transform = `translate(${count * 2}%)`;
            } else {
                cancelAnimationFrame(intervalMenu);
            }
        };

        let closeMenu = () => {
            menu.style.transform = `translate(-100%)`;
            count = -50;
            menuFlag = false;
            cancelAnimationFrame(intervalMenu);
        };

        let eventAnim = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
                closeMenu();
            } else {
                intervalMenu = requestAnimationFrame(handlerAnimate);
            }
        };
        let eventWithoutAnim = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
                closeMenu();
            } else {
                menu.style.transform = `translate(0%)`;
                count = -50;
            }
        };

        let selectPart = (e, animationFlag) => {
            let target = e.target;

            if (target.closest('.menu')) {
                menuFlag = true;
                if (animationFlag) {
                    eventAnim();
                } else {
                    eventWithoutAnim();
                }
            } else {

                if (target.closest('menu') && target.closest('A') || !target.closest('menu') && menuFlag) {
                    closeMenu();
                }
            }

        };

        let animetionEvent = (e) => {
            selectPart(e, true);
        };

        let noAnimetionEvent = (e) => {
            selectPart(e, false);
        };

        let timoutsMenu = [];

        let sizeMenu = () => {
            timoutsMenu.push(setTimeout(() => {
                timoutsMenu.forEach(item => clearTimeout(item));

                if (window.innerWidth >= 768) {
                    body.addEventListener('click', animetionEvent);
                    body.removeEventListener('click', noAnimetionEvent);
                } else {
                    body.addEventListener('click', noAnimetionEvent);
                    body.removeEventListener('click', animetionEvent);
                }
            }, 500));
        };

        window.addEventListener('resize', sizeMenu);
        window.addEventListener('load', sizeMenu);
    };

    toggleMenu();


    /* -==== PopUp ====- */
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

        popupClose.addEventListener('click', () => {
            popup.style.transform = 'translateY(-100%)';
            popupContent.style.transform = 'translateX(-100%)';
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

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
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

    /* -==== Слайдер ====- */

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            portfolioDots = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval,
            dots;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');
            currentSlide++;

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dots.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });

        const addDots = () => {
            for (let i = 0; i < slide.length; i++) {
                let li = document.createElement('li');
                li.classList.add('dot');
                if (i === 0) {
                    li.classList.add('dot-active');
                }
                portfolioDots.append(li);

            }

            dots = document.querySelectorAll('.dot');
        };

        addDots();

        startSlide(1500);
    };

    slider();


    /* -==== Команда ====- */

    const team = document.getElementById('command');


    team.addEventListener('mouseover', (event) => {
        let target = event.target;

        if (target.matches('.command__photo')) {
            target.dataset.first = target.src;
            target.src = target.dataset.img;
        }
    });

    team.addEventListener('mouseout', (event) => {
        let target = event.target;

        if (target.matches('.command__photo')) {
            target.src = target.dataset.first;
            target.removeAttribute('data-first');
        }
    });



    /* -==== проверка ввода в инпуты ====- */

    const calcBlock = document.querySelector('.calc-block');

    calcBlock.addEventListener('input', (event) => {
        let target = event.target;

        if (target.matches('INPUT')) {
            target.value = target.value.replace(/\D/,'');
        }
    });

    body.addEventListener('input', (event) => {
        let target = event.target;

        console.log(event.inputType);
        if (event.inputType === 'insertFromPaste') {
            target.value = '';
            return;
        }

        if (target.matches('#form2-name,#form2-message,#form1-name')) {
            target.value = target.value.replace(/[^а-я\s\-]/i,'');
        } else if (target.matches('#form2-email,#form1-email')) {
            target.value = target.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi, '');
            console.log(target.value);
        } else if (target.matches('#form2-phone,#form1-phone')) {
            target.value = target.value.replace(/[^\d\(\)\-]/i, '');
        }
    });

    body.addEventListener('focusout', (event) => {
        let target = event.target;

        if (target.value) {

            if (target.matches('#form2-name,#form2-message,#form1-name')) {
                target.value = target.value.replace(/^\s+|\s+$/g, '');
                target.value = target.value.replace(/\s{2,}/g, ' ');
            } else if (target.matches('#form2-email,#form1-email')) {
                target.value = target.value.replace(/^\-+|\-+$/g, '');
                target.value = target.value.replace(/\-{2,}/g, '-');
                console.log(target.value);
            } else if (target.matches('#form2-phone,#form1-phone')) {
                target.value = target.value.replace(/^\-+|\-+$/g, '');
                target.value = target.value.replace(/\-{2,}/g, '-');
            }

            if (target.matches('#form2-name,#form1-name')) {
                let str = target.value;
                str = str.split(' ');
                str.forEach((el, id) => str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase());
                str = str.join(' ');
                target.value = str;
            }
        }
    });


});
