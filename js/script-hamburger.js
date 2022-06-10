
window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu-navigation'),
      menuItem = document.querySelectorAll('.menu-item'),
      hamburger = document.querySelector('.hamgurger');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamgurger-active');
      menu.classList.toggle('menu-navigation-active');
   });

   menuItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamgurger-active');
         menu.classList.toggle('menu-navigation-active');
      })
   })
})