let nav = document.getElementById("nav-menu");
let toggle = document.getElementById("nav-toggle");
let header = document.querySelector("header");

toggle.onclick = function () {
    nav.classList.toggle("toggle");
    if (nav.classList.contains("toggle")) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    };
};

window.addEventListener(("scroll"), () => {
    if (nav.classList.contains("toggle")) {
        nav.classList.remove("toggle");
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    };
    if (window.scrollY > 0) {
        header.classList.add("bg");
    } else {
        header.classList.remove("bg");
    };
});

let accordions = document.querySelectorAll(".accordion");

accordions.forEach((acordion) => {
    acordion.addEventListener("click", function (e) {
        accordions.forEach((acordion) => {
            acordion.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

let counts = document.querySelectorAll(".nums .num");
let counterSection = document.querySelector(".counters");
let started = false;
window.onload = function () {
    if (!started) {
        counts.forEach((count) => startCount(count));
    }
    started = true;
};
function startCount(e) {
    let goal = e.dataset.goal;
    let counter = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(counter);
        }
    }, 100 / goal);
};

const swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSliders: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
