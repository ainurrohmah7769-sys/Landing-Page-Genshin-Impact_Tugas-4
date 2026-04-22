// ================= SMOOTH SCROLL ANIMATION =================
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".hero-overlay, .character, .news, .redeem");

    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(pos < screen - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// ================= HOVER EFFECT EXTRA =================
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});

// slide //
document.addEventListener("DOMContentLoaded", () => {

  let index = 0;

  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const total = document.querySelectorAll(".slide").length;

  function showSlide(i) {
    index = i;

    // 🔥 FIX ERROR DI SINI (harus pakai backtick `)
    slides.style.transform = `translateX(-${index * 100}%)`;

    // update dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // klik dot
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // auto slide
  setInterval(() => {
    index++;

    if (index >= total) {
      index = 0; // balik ke awal
    }

    showSlide(index);

  }, 3000);

});

// button
function downloadGame(){
    window.open("https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&pcampaignid=web_share", "_blank");
}

// news slide
let newsIndex = 0;

const newsSlides = document.querySelector(".news-slides");
const newsDots = document.querySelectorAll(".dot2");
const totalNews = document.querySelectorAll(".news-slide").length;

function updateNewsSlide() {
  newsSlides.style.transform = `translateX(-${newsIndex * 100}%)`;

  newsDots.forEach(dot => dot.classList.remove("active"));
  newsDots[newsIndex].classList.add("active");
}

// klik dots
newsDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    newsIndex = i;
    updateNewsSlide();
  });
});

// auto slide
setInterval(() => {
  newsIndex++;
  if (newsIndex >= totalNews) newsIndex = 0;
  updateNewsSlide();
}, 4000);