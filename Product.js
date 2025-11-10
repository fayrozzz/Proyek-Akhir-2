window.onload = () => {
  const container = document.querySelector(".hero-box-container");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  // Gandakan isi kontainer untuk efek looping
  const original = container.innerHTML;
  container.innerHTML += original;

  let pos = 0;
  let speed = 0.3;
  let singleWidth = 0;

  // Tunggu konten ter-render
  setTimeout(() => {
    singleWidth = container.scrollWidth / 2;
    loop();
  }, 300);

  function loop() {
    pos -= speed;
    if (Math.abs(pos) >= singleWidth) pos = 0;
    container.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(loop);
  }

  rightBtn.addEventListener("click", () => {
    pos -= 250;
    if (Math.abs(pos) >= singleWidth) pos = 0;
    container.style.transform = `translateX(${pos}px)`;
  });

  leftBtn.addEventListener("click", () => {
    pos += 250;
    if (pos > 0) pos = -singleWidth;
    container.style.transform = `translateX(${pos}px)`;
  });
};
