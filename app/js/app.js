// import Swiper from 'swiper/bundle';
// import Inputmask from "inputmask/dist/inputmask.es6.js";

// import NiceSelect from 'nice-select2/src/js/nice-select2.js';
// global.NiceSelect = NiceSelect;

document.addEventListener('DOMContentLoaded', () => {

    if(document.querySelector('.intro-slider')) {
        var swiper = new Swiper(".intro-slider-inner", {
            pagination: {
                el: ".intro-slider__pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".intro-slider .swiper-button-next",
                prevEl: ".intro-slider .swiper-button-prev",
            }
        });
    }

    if(document.querySelector('.gallery-slider')) {
        var swiper = new Swiper(".gallery-slider-inner", {
            navigation: {
                nextEl: ".gallery-slider .swiper-button-next",
                prevEl: ".gallery-slider .swiper-button-prev",
            }
        });
    }
    

    if(document.querySelector('.product-slider')) {

        document.querySelectorAll('.product-slider-inner').forEach((slider) => {
            new Swiper(slider, {
                loop: true,
                pagination: {
                    el: slider.querySelector(".product-slider__pagination"),
                    clickable: true
                },
                navigation: {
                    nextEl: slider.querySelector(".product-slider .swiper-button-next"),
                    prevEl: slider.querySelector(".product-slider .swiper-button-prev")
                },
                slidesPerView: 2,
                spaceBetween: 5,
                breakpoints: {
                    768: {
                      slidesPerView: 3,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }
            });

        });
        
    }

    if(document.querySelector('.tabs')) {
        const tabHeaders = document.querySelectorAll('.tabs-header__item');
        const tabContents = document.querySelectorAll('.tabs-content__item');

        tabHeaders.forEach((header, index) => {
            header.addEventListener('click', () => {
                tabHeaders.forEach(h => h.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                header.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
    }

    var togglers = document.querySelectorAll(".menu-toggler");
	togglers.forEach((t) => {
        t.addEventListener("click",function(e){
            document.body.classList.toggle('menu-openned');
        }, false);
    });


    var mobSearchBtn = document.querySelector(".mob-search");

    mobSearchBtn.addEventListener("click",function(e){
        document.body.classList.toggle('mob-search-openned');
    }, false);
    

   
    var catMenuItems = document.querySelectorAll(".catalog-menu-mob__item-heading a");
	catMenuItems.forEach((t) => {
        t.addEventListener("click",function(e) {
            if( !t.parentNode.parentNode.classList.contains('openned') ) {
                e.preventDefault();
            }
            
            catMenuItems.forEach((el) => {
                el.parentNode.parentNode.classList.remove('openned');
            });
            e.target.parentNode.parentNode.classList.add('openned');
        }, false);
    });


    if(document.querySelectorAll('.tooltip')) {
        document.querySelectorAll('.tooltip').forEach(function(tooltip) {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            
            // Создаем элемент подсказки
            const tooltipBox = document.createElement('div');
            tooltipBox.className = 'tooltip-box';
            tooltipBox.innerText = tooltipText;

            // Вставляем элемент внутри .tooltip
            tooltip.appendChild(tooltipBox);

            // Показываем подсказку при наведении
            tooltip.addEventListener('mouseenter', function() {
                tooltipBox.style.display = 'block';
            });

            // Скрываем подсказку, когда курсор уходит
            tooltip.addEventListener('mouseleave', function() {
                tooltipBox.style.display = 'none';
            });
        });
    }

    if(document.querySelector('.btn_minus') && document.querySelector('.btn_plus')) {
        document.querySelector('.btn_minus').addEventListener('click', function() {
            const input = document.querySelector('.product-meta__quantity input');
            let value = parseInt(input.value);
    
            if (value > 1) {
                input.value = value - 1;
            }
        });
    
        document.querySelector('.btn_plus').addEventListener('click', function() {
            const input = document.querySelector('.product-meta__quantity input');
            let value = parseInt(input.value);
    
            input.value = value + 1;
        });
    }
    
});