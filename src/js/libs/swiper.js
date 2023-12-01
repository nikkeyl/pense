import Swiper, { Pagination } from 'swiper';

/*
Pagination,
EffectFade,
Autoplay,
Parallax,
*/

import "@scss/components/swiper";
//import "@scss/libs/swiper";
//import 'swiper/css';

export function initSliders() {
    if (document.querySelector('.swiper')) {
        new Swiper('.swiper', {
            modules: [Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            centeredSlides: true,
            initialSlide: 3,
            simulateTouch: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets'
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }
}