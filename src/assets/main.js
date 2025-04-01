

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
//   images.forEach(image => {
//     image.addEventListener("mouseenter", () => {
//       marqueeAnimation.pause(); // Pause animation on hover
//     });
//     image.addEventListener("mouseleave", () => {
//       marqueeAnimation.resume(); // Resume animation when hover ends
//     });
//   });