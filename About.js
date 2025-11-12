document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector('.scroll-down');

  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      console.log("Button clicked ✅");
      const target = document.querySelector('#section2');
      if (target) {
        console.log("Scrolling to section2...");
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error("Section2 not found ❌");
      }
    });
  } else {
    console.error("Scroll button not found ❌");
  }
});
