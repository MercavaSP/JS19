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

export default togglePopUp;