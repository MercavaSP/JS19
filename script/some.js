'use strict';
window.addEventListener('DOMContentLoaded', () => {

    function timer(deadline) {
        const currentDayTime = document.querySelector('#current-day-time');
        const currentDay = document.querySelector('#current-day');
        const daysTillNy = document.querySelector('#days-till-ny');
        const currentTime = document.querySelector('#current-time');
        const weekDays = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];

        function getTimeRemaining() {
            const dateNow = new Date(),
                dateStop = new Date(deadline).getTime(),
                weekDay = weekDays[dateNow.getDay()],
                timeRemaining = (dateStop - dateNow.getTime()) / 1000;

            let seconds = dateNow.getSeconds(),
                minutes = dateNow.getMinutes(),
                hours = dateNow.getHours();
            const days = Math.floor(timeRemaining / 60 / 60 / 24);

            function putZero(value) {
                value += '';

                if (value.length < 2) {
                    value = '0' + value;
                }

                return value;
            }

            hours = putZero(hours);
            minutes = putZero(minutes);
            seconds = putZero(seconds);

            return { timeRemaining, seconds, minutes, hours, days, weekDay };
        }

        let interval;

        function updateClock() {
            const timer = getTimeRemaining();

            daysTillNy.textContent = timer.days;
            currentDay.textContent = timer.weekDay;

            switch (timer.hours) {
            case '13':
            case '14':
            case '15':
            case '16':
            case '17':
            case '12':
                currentDayTime.textContent = ' день';
                break;
            case '07':
            case '08':
            case '09':
            case '10':
            case '11':
            case '06':
                currentDayTime.textContent = ' утро';
                break;
            case '19':
            case '20':
            case '21':
            case '22':
            case '23':
            case '18':
                currentDayTime.textContent = ' вечер';
                break;
            default:
                currentDayTime.textContent = ' ночи';
                break;
            }

            let str = timer.hours + ':' + timer.minutes + ':' + timer.seconds + ' ';

            if (+timer.hours >= 12) {
                str += 'PM';
            } else {
                str += 'AM';
            }

            currentTime.textContent = str;

            if (timer.timeRemaining <= 0) {
                clearInterval(interval);
            }
        }

        interval = setInterval(updateClock, 1000);
    }

    timer('31 dec 2021');
});
