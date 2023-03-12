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
const burgerBtn = document.querySelector('#burger')
const headerMenu = document.querySelector('#header-menu')


bodyPage.onresize = function() {
    if(window.innerWidth < 1189) {
        burgerBtn.setAttribute('aria-expanded', 'false')
        headerMenu.setAttribute('aria-hidden', 'true')
    } else {
        burgerBtn.removeAttribute('aria-expanded')
        headerMenu.removeAttribute('aria-hidden')
    }
}


burgerBtn.onclick = function() {
    if(headerMenu.classList.contains('open')) {
        menuHide()
    }
    else {
        menuShow()
    }
}

function menuShow() {
    headerMenu.classList.add('open')
    headerMenu.setAttribute('aria-hidden', 'false')
    burgerBtn.setAttribute('aria-expanded', 'true')
    bodyPage.classList.add('hidden')

}

function menuHide() {
    headerMenu.classList.remove('open')
    headerMenu.setAttribute('aria-hidden', 'true')
    burgerBtn.setAttribute('aria-expanded', 'false')

    bodyPage.classList.remove('hidden')
}


// JQuery ==================
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
        infinite: false,

        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                }
              },
        ]
    });
});