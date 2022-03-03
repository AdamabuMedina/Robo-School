import Swiper, { Navigation, Scrollbar } from 'swiper';

const el = document.querySelector(".trainers__content")

Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper(el, {
  slidesPerView: 'auto',
  // slidesPerView: 4,
  spaceBetween: 40,
});
