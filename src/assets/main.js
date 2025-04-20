gsap.to(".hero-text span", {
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
  stagger: 0.2
});

gsap.from(".hero-image", {
  opacity: 0,
  filter: "blur(10px)", 
  duration: 2.5,  
  ease: "power2.out" 
});

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
  gsap.to(button, { boxShadow: "0 0 15px rgba(52, 152, 219, 0.5)", duration: 0.6 });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, { boxShadow: "0 0 5px rgba(0, 0, 0, 0)", duration: 1.6 });
});

const button1 = document.querySelector(".btn1");

button1.addEventListener("mouseenter", () => {
  gsap.to(button1, { boxShadow: "0 0 25px rgba(52, 152, 219, 0.6)", duration: 0.6 });
});

button1.addEventListener("mouseleave", () => {
  gsap.to(button1, { boxShadow: "0 0 5px rgba(0, 0, 0, 0)", duration: 1.6 });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".project-section").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.2, // Adds a delay for each card to stagger the animation
    scrollTrigger: {
      trigger: card,
      start: "top 90%", // Triggers when card reaches 80% from the top of the viewport
      toggleActions: "play none none none", // Plays animation on scroll
    },
  });
});

gsap.registerPlugin(ScrollTrigger); // register ScrollTrigger if you want to control it on scroll

const marqueeAnimation = gsap.to(".marquee__inner", {
xPercent: -50, // Adjust the percentage to control how far it scrolls
ease: "linear",
repeat: -1,
duration: 25 // Adjust duration to control speed
});

gsap.matchMedia().add("(max-width: 768px)", () => {
// Adjust duration for smaller screens
marqueeAnimation.duration(5); // Faster on smaller screens
});

gsap.matchMedia().add("(min-width: 769px)", () => {
// Adjust duration for larger screens
marqueeAnimation.duration(20); // Slower on larger screens
});

gsap.to(".marquee__inner", {
xPercent: -50,
ease: "linear",
repeat: -1,
duration: 25,
scrollTrigger: {
  trigger: ".marquee",
  start: "top bottom", // start animation when the marquee section is about to come into view
  end: "bottom top", // end animation when marquee section leaves view
  scrub: true // smooth scrolling control
}
});

// Select all images within the marquee
const images = document.querySelectorAll(".marquee__inner img");

// Add hover event listeners to each image
images.forEach(image => {
image.addEventListener("mouseenter", () => {
  marqueeAnimation.pause(); // Pause animation on hover
});
image.addEventListener("mouseleave", () => {
  marqueeAnimation.resume(); // Resume animation when hover ends
});
});



document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button"); // The hamburger menu button
  const menu = document.getElementById("navbar-sticky"); // The collapsible menu

  // Toggle menu on hamburger click
  // menuButton.addEventListener("click", function (event) {
  //     event.stopPropagation(); // Prevent immediate closure when clicking the button
  //     menu.classList.toggle("hidden"); // Show/hide menu
  // });

  // Close menu when clicking anywhere outside of it
  document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
          menu.classList.add("hidden"); // Hide menu
      }
  });
});