/* This script handles scroll animations for all pages.
   It looks for any element with the 'reveal' class and fades it in.
*/

document.addEventListener("DOMContentLoaded", () => {
    // Configuration for the observer
    const observerOptions = {
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is in view, add the 'active' class
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    // Grab all elements we want to animate
    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
});