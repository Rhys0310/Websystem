document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  
  // Trigger smooth fade-in and slide-up
  setTimeout(() => {
    heading.style.opacity = "1";
    heading.style.transform = "translateY(0)";
  }, 100);
});