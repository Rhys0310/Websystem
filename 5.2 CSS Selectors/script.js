document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = [
    document.querySelector("h1"),
    document.querySelector("h2"),
    document.querySelector("p"),
    ...document.querySelectorAll("li")
  ];

  const appearanceOptions = {
    duration: 1000,
    fill: "forwards",
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
  };

  elementsToAnimate.forEach((el, index) => {
    // Set initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    // Trigger animation with a stagger delay
    setTimeout(() => {
      el.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        appearanceOptions
      );
      // Ensure element stays visible after animation
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 100); 
  });
});