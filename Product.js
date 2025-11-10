window.onload = () => {
  const track = document.querySelector(".product-track");
  const items = document.querySelectorAll(".product-item");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  let index = 0;
  const allItems = document.querySelectorAll(".product-item");
itemWidth = allItems[0].offsetWidth + 20;
  let autoSlide;

  // Duplicate item untuk infinite loop
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  // Update size saat resize
  window.addEventListener("resize", () => {
    itemWidth = items[0].offsetWidth + 20;
  });

  // Auto slide
  function runAuto() {
    autoSlide = setInterval(() => {
      index++;
      track.style.transform = `translateX(${-index * itemWidth}px)`;

      if (index >= items.length) {
        setTimeout(() => {
          track.style.transition = "none";
          index = 0;
          track.style.transform = `translateX(0)`;
          setTimeout(() => {
            track.style.transition = ".4s ease";
          }, 10);
        }, 400);
      }
    }, 2400);
  }

  runAuto();

  // Arrow manual
  rightBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    index++;
    track.style.transform = `translateX(${-index * itemWidth}px)`;
    runAuto();
  });

  leftBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    if (index <= 0) index = items.length;
    index--;
    track.style.transform = `translateX(${-index * itemWidth}px)`;
    runAuto();
  });
};
