import Splide from "@splidejs/splide"

if (document.querySelector('.reviews')) {
  new Splide('.reviews__slider', {
    pagination: false
  }).mount();
}

const starRatings = document.querySelectorAll('.star-rating');

starRatings.forEach((starRating) => {
  const rating = parseInt(starRating.getAttribute('data-rating'));

  for (let i = 1; i <= 5; i++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    star.setAttribute('height', '21px');
    star.setAttribute('style', 'fill:#f0dc05');
    star.setAttribute('viewBox', '0 0 576 512');
    star.innerHTML = '<path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z" />';

    starRating.appendChild(star);

    if (i > rating) {
      star.style.fill = 'none';
    }
  }
});
