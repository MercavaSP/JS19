const toggleMenu = () => {
      const btnMenu = document.querySelector('.menu'),
         menu = document.querySelector('menu'),
         closeBtn = document.querySelector('.close-btn'),
         menuItems = menu.querySelectorAll('ul>li>a');
      
        let count=-50,
       intervalMenu;

      let handlerAnimate = () => {
        intervalMenu = requestAnimationFrame(handlerAnimate);
         if (count < 0) {
            count++;
            menu.style.transform = `translate(${count*2}%)`;
         } else {
            cancelAnimationFrame(intervalMenu);
         }
      };

      let closeMenu = () => {
         menu.style.transform = `translate(-100%)`;
         count = -50;
      };

      let event = () => {
         if (menu.style.transform && menu.style.transform === `translate(0%)`) {
            closeMenu();
         } else {
            intervalMenu = requestAnimationFrame(handlerAnimate);
         }
      };

      btnMenu.addEventListener('click', event);

      closeBtn.addEventListener('click', closeMenu);
      menuItems.forEach(elem => elem.addEventListener('click', closeMenu));

   };
   
   if (document.documentElement.clientWidth >= 768) {
    toggleMenu();
   }





   //!popup
   const togglePopUp = () => {
      const popup = document.querySelector('.popup'),
         popupBtns = document.querySelectorAll('.popup-btn'),
         popupClose = document.querySelector('.popup-close');

      popupBtns.forEach(btn => btn.addEventListener('click', () => {
         popup.style.display = 'block';
      }));

      popupClose.addEventListener('click', () => {
         popup.style.display = 'none';
      });
   };

   togglePopUp();


   
});