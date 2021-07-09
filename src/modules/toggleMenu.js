const menu = document.querySelector('menu'),
        body = document.querySelector('body');

    const toggleMenu = () => {

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

        let animetionEvent = (elem) => {
            selectPart(elem, true);
        };

        let noAnimetionEvent = (elem) => {
            selectPart(elem, false);
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

export default toggleMenu;