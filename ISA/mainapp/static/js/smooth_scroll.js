
// Function to smoothly scroll to a target element
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
}

// Add click event listeners to navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = link.getAttribute("href");
            smoothScroll(target);
        });
    });
});