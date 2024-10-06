let lastScrollTop = 0;

const mountain1 = document.querySelector(".mountain-Container1");
const mountain2 = document.querySelector(".mountain-Container2");
const bottomStone1 = document.querySelector(".bottom-stone1");
const bottomStone2 = document.querySelector(".bottom-stone2");
const sun = document.querySelector(".sun");
const birds = document.querySelectorAll(".bird");
const parallax = document.querySelector(".Parallex");
const body = document.querySelector('.theme');

if (mountain1 && mountain2 && bottomStone1 && bottomStone2 && sun && parallax) {

  parallax.addEventListener("scroll", function () {
    const scrollTop = parallax.scrollTop;
    const parallaxHeight = parallax.offsetHeight;
    const threshold = parallaxHeight / 2;

    if (scrollTop < threshold) {
      body.style.background = "linear-gradient(to bottom, #94ccff, #d5f5ff)";

      mountain1.style.opacity = "1";
      mountain1.style.transform = "scale(1) translateY(0)";
      mountain2.style.opacity = "0";
      mountain2.style.transform = "scale(1.2) translateY(10%)";

      bottomStone1.style.opacity = "1";
      bottomStone2.style.opacity = "0";

      sun.style.width = "100px";
      sun.style.height = "100px";
      sun.style.top = "70px";
      sun.style.left = "80px";
      sun.style.transition = "width 3s ease, height 3s ease";

      birds.forEach((bird) => (bird.style.opacity = "1"));
    } else {
      body.style.background = "linear-gradient(180deg, #69A8DB -10.3%, #FFC986 34.57%)";

      mountain1.style.opacity = "0";
      mountain1.style.transform = "scale(1.2) translateY(10%)";
      mountain2.style.opacity = "1";
      mountain2.style.transform = "scale(1) translateY(0)";

      bottomStone1.style.opacity = "0";
      bottomStone2.style.opacity = "1";

      sun.style.width = "0";
      sun.style.height = "0";
      sun.style.transition = "width 3s ease, height 3s ease";

      birds.forEach((bird) => (bird.style.opacity = "0"));
    }

    lastScrollTop = scrollTop;
  });

} else {
  console.log("One or more elements not found");
  console.log(mountain1, mountain2, parallax, bottomStone1, bottomStone2, sun);
}
