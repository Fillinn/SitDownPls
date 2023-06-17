// Выбор регион
const multiSelest = () => {
  const element = document.querySelectorAll(".ChoiceRegion");
  element.forEach((el) => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
      position: "bottom",
    });
  });
};
multiSelest();

// Выбор диван
const multiSelest3 = () => {
  const element3 = document.querySelectorAll(".ChoiceFurniture");
  element3.forEach((el) => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
      position: "bottom",
      classNames: {
        containerInner: "choices__inner2",
        listSingle: "choices__list--single2",
        focusState: "is-focused2",
        item: "choices__item",
        list: "choices__list2",
      },
    });
  });
};
multiSelest3();

//  Слайдер полноэкранный HERO
const hero__swiper = new Swiper(".hero__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

//  Слайдер каталога справа
var swiper4 = new Swiper(".swiper4", {
  pagination: {
    el: ".swiper-pagination4",
    bulletClass: "swiper-pagination-bullet2",
    bulletActiveClass: "swiper-pagination-bullet-active2",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// Слайдер "Похожие товары" order.html
const swiper6 = new Swiper(".swiper6", {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Слайдер диванов для покупки в модале
const mySwiperOrder2 = new Swiper(".mySwiperOrder2", {
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-nextMY",
    prevEl: ".swiper-button-prevMY",
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// Слайдер диванов для покупки
const mySwiperOrder = new Swiper(".mySwiperOrder", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const mySwiperOrderDown = new Swiper(".mySwiperOrderDown", {
  spaceBetween: 10,
  thumbs: {
    swiper: mySwiperOrderDown,
  },
});

// Модальное окно диванов для покупки
const modal3 = new HystModal({
  linkAttributeName: "data-hystmodal",
});

// Слайдер диванов для покупки нижних
const TABSwiper = new Swiper(".TABSwiper", {
  spaceBetween: 40,
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 10,
      direction: "horizontal",
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      direction: "vertical",
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
      direction: "vertical",
    },
  },
});

// Слайдер "Специальные предложения"
const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
  },
});

// Слайдер "Полезное"
const swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

// Бургер
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const backButton = document.querySelector(".back-button");

gsap.set(menu, { scaleY: 0, transformOrigin: "top" });

function toggleMenu() {
  if (menu.classList.contains("open")) {
    gsap.to(menu, {
      duration: 0.3,
      scaleY: 0,
      onComplete: () => {
        menu.classList.remove("open");
      },
    });
  } else {
    menu.classList.add("open");
    gsap.fromTo(menu, { scaleY: 0 }, { duration: 0.3, scaleY: 1 });
  }
}

burger.addEventListener("click", toggleMenu);
backButton.addEventListener("click", toggleMenu);

// Выпадающие меню каталог
let dropdownButtons = document.querySelectorAll(".dropdownButton");
let dropdownMenus = document.querySelectorAll(".dropdownMenu");

dropdownButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle("active");
  });
});

// Полузонок слайдер (RangeSlider)
let rangeSlider = document.getElementById("slider");

if (rangeSlider) {
  noUiSlider.create(slider, {
    start: [20000, 150000],
    connect: true,
    range: {
      min: 1,
      max: 200000,
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}

// Попап форма
tippy("[data-tippy-content]");
tippy("#Tooltip", {
  content: "Tooltip",
});

// Валидация jquery,
// Следующий раз буду JustValidate
$(document).ready(function () {
  $("#phone").inputmask("+7 (999) 999-9999", {});
});

$("#myform").validate({
  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next("label").append(error);
    }
    error.insertAfter($(element));
  },
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
    },
    tel: {
      required: true,
      minlength: 9,
    },
    checkbox: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Недопустимый формат",
    },
    email: {
      required: "Недопустимый формат",
      email: "Пожалуйста, введите действительный адрес электронной почты",
    },
    tel: {
      required: "Недопустимый формат",
      minlength: "Номер телефона должен быть не менее 10 цифр",
    },
  },
  submitHandler: function (form) {
    form.submit();
    $(".modal-overlay").css({
      opacity: "1",
      visibility: "visible",
    });
  },
});

// Модальное окно после принамающего валидации
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

function closeModal() {
  modalOverlay.style.opacity = "0";
}

modalClose.addEventListener("click", function () {
  setTimeout(function () {
    (modalOverlay.style.opacity = "0"),
      (modalOverlay.style.visibility = "hidden");
  }, 30);
});

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
