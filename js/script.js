// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");

      const bars = entry.target.querySelectorAll(".progress");
      bars.forEach(bar=>{
        bar.style.width = bar.dataset.width;
      });
    }
  });
});

document.querySelectorAll(".hidden").forEach(el=>{
  observer.observe(el);
});