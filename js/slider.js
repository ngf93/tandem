const swiper1 = new Swiper('.swiper-main', {
    loop: false,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      }
    }
});

const swiper2 = new Swiper('.swiper-3elems', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

const swiper3 = new Swiper('.swiper-portfolio', {
  loop: false,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  observer: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    }
  }
});
