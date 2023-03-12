// Общие переменные
const bodyPage = document.body
const headerPage = document.querySelector('#header')


// Фиксированая шапка
headerFixed();
window.onscroll = headerFixed;
function headerFixed() {
    let countScroll = window.scrollY;
    let headerHeight = headerPage.offsetHeight;

    if(countScroll > 0) {
        if(!headerPage.classList.contains('fixed')) { 
            headerPage.classList.add('fixed');
            bodyPage.style.paddingTop = headerHeight + 'px';
            console.log('work');
        }

    } else {
        headerPage.classList.remove('fixed');
        bodyPage.style.paddingTop = null;
    }
}
$(document).ready(function() {

    // Слайдер на главной странице
    $('.intro-slider').slick({
        slidesToShow: 1,
        fade: true,

        arrows: false,
        dots: true,

        autoplay: true,
        autoplaySpeed: 4600,
        pauseOnFocus: false,
        pauseOnHover: false,
    });


    // Слайдер проектов
    $('.projects-slider__wrapper').slick({
        slidesToShow: 1,
        fade: true,

        arrows: true,
        prevArrow: '.projects-slider__prev',
        nextArrow: '.projects-slider__next',

        autoplay: true,
        autoplaySpeed: 4600,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    // Слайдер сертификатов
    $('.diplomas-slider').slick({
        slidesToShow: 4,
        arrows: false,
    });
});