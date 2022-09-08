// BURGER
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu,.logo__text').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// SLIDER
new Swiper('.swiper', {
   
   navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
   },

   // Булеты
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,
   },

   // Бесконечный слайдер
   loop: true,

   // Автопрокрутка
   autoplay: {
      delay: 8000,
      //stopOnLastSlide: false,
   },
   
   // Скорость
   speed: 900,

   // Эффект переключения слайдов
   //effect: 'flip',
   //slideShadows: false,
   //limitrotation: true,

   /*
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
*/

   /*

   // Управление колесом мыши
   mousewheel: {
      sensitivity: 1,
   },

   // Отключает функционал, если слайдов меньше, чем нужно
  // watchOverflow: true,

   // Отступы между слайдами
   // spaceBetween: 30,

   // Свободный режим
   // freeMode: true,

   

   // Адаптивность
   /*
   breakpoints: {
      '@0.75': {
         slidesPerView: 1,
      },
      '@1.00': {
         slidesPerView: 2,
      },
      '@1.50': {
         slidesPerView: 3,
      },
   }
*/

});