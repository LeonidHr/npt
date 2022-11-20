/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, EffectCreative } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.card-who__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.card-who__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			//observer: true,
			//observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 400,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.card-who__slider .swiper-button-prev',
				nextEl: '.card-who__slider .swiper-button-next',
			},
			/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.plans__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.plans__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Navigation, EffectFade],
			observer: true,
			observeParents: true,
			spaceBetween: 35,
			speed: 400,
	
			//autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.plans__slider .swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.card-who__slider .swiper-button-prev',
				nextEl: '.card-who__slider .swiper-button-next',
			},
			*/
			
			// Брейкпоинты
			breakpoints: {
				320: {
					effect: 'fade',
					direction: 'horizontal',
					slidesPerView: 1,
				},
				768: {
					direction: 'vertical',
					effect: null,
					slidesPerView: 4,
				},
			},
			
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.descr-roadmap__slider')) { // Указываем скласс нужного слайдера
		new Swiper('.descr-roadmap__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, EffectCreative],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 25,
			speed: 600,
			effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-100%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
			// Пагинация

			pagination: {
				el: '.descr-roadmap .swiper-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			
			navigation: {
				prevEl: '.descr-roadmap__slider .swiper-button-prev',
				nextEl: '.descr-roadmap__slider .swiper-button-next',
			},
		
		});

		const sliderContainer = document.querySelector('.descr-roadmap');

		sliderContainer.addEventListener("click", e => {
			const target = e.target;

			if (target.closest('.swiper-pagination-bullet')) {
				sliderContainer.classList.add('_show');
			} else if (!target.closest('.swiper-buttons') || target.closest('[data-exit]')) {
				sliderContainer.classList.remove('_show');
			}
		});

		// Кастомные точки

		const addDots = () => {
			const currSlider = document.querySelector('.descr-roadmap'),
						btns = currSlider.querySelectorAll('.swiper-pagination-bullet'),
						year = currSlider.querySelectorAll('.descr-roadmap__num'),
						label = currSlider.querySelectorAll('.descr-roadmap__label');

			btns.forEach((btn, i) => {
				btn.innerHTML = `
					<div class="roadmap-pagination__body">
						<div class="roadmap-pagination__content">
							<div class="roadmap-pagination__num roadmap__num">${year[i].innerHTML}</div>
							<div class="roadmap-pagination__label roadmap__label">${label[i].innerHTML}</div>	
						</div>
						<button class="roadmap-pagination__btn btn-arrow _icon-check" type="button"></button>
					</div>
				`;
			});
		}

		addDots();
	
		const addPaddingForSlide = () => {
			if (window.innerWidth > 767.98) {
				const slides = document.querySelectorAll('.descr-roadmap__slide');
				let count = 0;
	
				slides.forEach((slide , i)=> {
					if (i < 3) {
						count += 8;
					} else {
						count += 14;
					}
	
					slide.style.paddingLeft = `${count}%`;
	
				});
			}
		}
		addPaddingForSlide();
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});