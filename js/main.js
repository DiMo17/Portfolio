new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.project__pagination',
        bulletClass: 'project__bullet',
        bulletActiveClass: 'project__bullet__active',
        clickable: true
    },
});