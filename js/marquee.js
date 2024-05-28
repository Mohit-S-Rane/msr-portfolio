// Initialize variables for current scroll position and scroll direction
let currentScroll = 0;
let isScrollingDown = true;

// Get references to the arrows and marquee animation
const arrows = document.querySelectorAll(".arrow");

const marqueeTween = gsap.to(".marquee__part", {
  xPercent: -100,
  repeat: -1,
  duration: 5,
  ease: "linear",
}).totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });

// Scroll event handler function
const handleScroll = () => {
  const newScroll = window.scrollY; // Use window.scrollY instead of window.pageYOffset

  // Determine if the user is scrolling down
  if (newScroll > currentScroll) {
    if (!isScrollingDown) {
      isScrollingDown = true;
      gsap.to(marqueeTween, { timeScale: 1 }); // Set marquee speed and direction
      arrows.forEach((arrow) => arrow.classList.remove("active")); // Update arrow classes
    }
  } else {
    if (isScrollingDown) {
      isScrollingDown = false;
      gsap.to(marqueeTween, { timeScale: -1 }); // Reverse marquee direction
      arrows.forEach((arrow) => arrow.classList.add("active")); // Update arrow classes
    }
  }

  currentScroll = newScroll; // Update the current scroll position
};

// Touch event handler function for touch devices
let touchStartY = 0;
let touchEndY = 0;

const handleTouchStart = (event) => {
  touchStartY = event.touches[0].clientY;
};

const handleTouchMove = (event) => {
  touchEndY = event.touches[0].clientY;
  const touchScroll = currentScroll - (touchStartY - touchEndY);
  window.scrollTo(0, touchScroll);
};

const handleTouchEnd = () => {
  const newScroll = window.scrollY;

  // Determine if the user is scrolling down
  if (touchEndY < touchStartY) {
    if (!isScrollingDown) {
      isScrollingDown = true;
      gsap.to(marqueeTween, { timeScale: 1 }); // Set marquee speed and direction
      arrows.forEach((arrow) => arrow.classList.remove("active")); // Update arrow classes
    }
  } else {
    if (isScrollingDown) {
      isScrollingDown = false;
      gsap.to(marqueeTween, { timeScale: -1 }); // Reverse marquee direction
      arrows.forEach((arrow) => arrow.classList.add("active")); // Update arrow classes
    }
  }

  currentScroll = newScroll; // Update the current scroll position
};

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Attach touch event listeners
window.addEventListener("touchstart", handleTouchStart);
window.addEventListener("touchmove", handleTouchMove);
window.addEventListener("touchend", handleTouchEnd);
