//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});

//about-swiper
const swiper1 = new Swiper(".js-slider-swiper", {
  loop: true,
  slidesPerView: 10,
  spaceBetween: 30,
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    0: {
      slidesPerView: 3.5,
      centeredSlides: true,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 7,
      centeredSlides: true,
    },
  },
});

///modal
jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  const modalId = jQuery(this).attr("data-target");
  jQuery(`#${modalId}`)[0].showModal();
});

jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery(this).closest("dialog")[0].close();
});

//spots-slider
const swiper2 = new Swiper("#js-slider-swiper", {
  navigation: {
    nextEl: "#js-slider-next",
    prevEl: "#js-slider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.6,
      centeredSlides: true,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 2.5,
      centeredSlides: false,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 30,
      spaceBetween: 32,
    },
    1512: {
      slidesPerView: 3.28,
      centeredSlides: false,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 30,
      spaceBetween: 32,
    },
  },
});

//qa
jQuery(document).ready(function ($) {
  $(".qa__box-a").hide();
  $(".qa__box-a").first().show();
  $(".qa__box-icon").first().addClass("is-open");

  $(".qa__box-q").click(function () {
    $(this).next(".qa__box-a").slideToggle();
    $(this).children(".qa__box-icon").toggleClass("is-open");
  });
});

//クリックで色変化
const targetClasses = [
  ".form-text",
  ".form-select",
  ".form-textarea",
  ".form-checkbox__text",
];
targetClasses.forEach((className) => {
  document.querySelectorAll(className).forEach((item) => {
    item.addEventListener("click", () => {
      targetClasses.forEach((cls) => {
        document
          .querySelectorAll(cls)
          .forEach((el) => el.classList.remove("active"));
      });
      item.classList.add("active");
    });
  });
});

//バリデーションエラー
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const button = document.getElementById("submit");

  function update() {
    const isValid = form.checkValidity();

    Array.from(form.elements).forEach((element) => {
      if (!element.checkValidity() && element.hasAttribute("required")) {
        element.classList.add("error");
        if (element.tagName === "SELECT") {
          element.classList.add("not-selected");
        }
      } else {
        element.classList.remove("error");
        if (element.tagName === "SELECT") {
          element.classList.remove("not-selected");
        }
      }
    });

    if (isValid) {
      button.disabled = false;
      button.classList.add("is-active");
      button.classList.remove("is-inactive");
    } else {
      button.disabled = true;
      button.classList.add("is-inactive");
      button.classList.remove("is-active");
    }
  }

  function handleSubmission(event) {
    event.preventDefault();
    update();

    Array.from(form.elements).forEach((element) => {
      if (!element.checkValidity() && element.hasAttribute("required")) {
        element.classList.add("error");
      }
    });
  }

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  button.addEventListener("click", handleSubmission); // 送信ボタンクリック時
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const button = document.getElementById("submit");

  // 送信ボタンのクリックイベント
  button.addEventListener("click", function (event) {
    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      event.preventDefault();
      alert("フォームが正しく送信されました！");
    }
  });
});

//top-button(スムーススクロール)
jQuery(function () {
  var pagetop = $("#page__top-pc, #page__top-sp");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
