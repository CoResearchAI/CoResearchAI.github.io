// Create star field background when document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const starField = document.getElementById("star-field");
  const header = document.querySelector("header");

  // Create stars for the global background
  createStars(starField, 300);

  // Create extra dense stars specifically for the header
  createDenseStarsInHeader(header, 200);

  // Create blue nebula effects for the header
  createNebulasInHeader(header, 5);

  // Create shooting stars periodically
  setInterval(() => {
    if (Math.random() > 0.7) {
      createShootingStar(starField);
    }
  }, 2000);

  // Add scroll animation for sections
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollY > sectionTop - window.innerHeight / 1.5 &&
        scrollY < sectionTop + sectionHeight
      ) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      } else {
        section.style.opacity = "0.8";
        section.style.transform = "translateY(20px)";
      }
    });
  });
});

// Create stars throughout the page
function createStars(container, count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random size (mostly small)
    const sizeRand = Math.random();
    if (sizeRand < 0.7) {
      star.classList.add("small");
    } else if (sizeRand < 0.9) {
      star.classList.add("medium");
    } else {
      star.classList.add("large");
    }

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random animation delay
    star.style.animationDelay = `${Math.random() * 4}s`;

    // Add to container
    container.appendChild(star);
  }
}

// Create denser star field specifically within the header
function createDenseStarsInHeader(header, count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("dense-star");

    // Random size (even smaller white points)
    const size = Math.random() * 1.5 + 0.5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Brightness
    const brightness = Math.random() * 0.5 + 0.5;
    star.style.opacity = brightness;

    // Random position within header
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Add twinkle effect to some stars
    if (Math.random() > 0.7) {
      star.style.animation = `twinkle ${
        Math.random() * 3 + 2
      }s infinite ease-in-out`;
      star.style.animationDelay = `${Math.random() * 3}s`;
    }

    // Add to header
    header.appendChild(star);
  }
}

// Create nebula effects in the header
function createNebulasInHeader(header, count) {
  for (let i = 0; i < count; i++) {
    const nebula = document.createElement("div");
    nebula.classList.add("blue-nebula");

    // Random size
    const size = Math.random() * 300 + 150;
    nebula.style.width = `${size}px`;
    nebula.style.height = `${size}px`;

    // Random position
    nebula.style.left = `${Math.random() * 100}%`;
    nebula.style.top = `${Math.random() * 100}%`;

    // Random animation duration and delay
    nebula.style.animationDuration = `${Math.random() * 4 + 6}s`;
    nebula.style.animationDelay = `${Math.random() * 3}s`;

    // Add to header
    header.appendChild(nebula);
  }
}

// Create shooting stars
function createShootingStar(container) {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  // Random starting position (top half of the screen)
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * (window.innerHeight / 2);

  // Random length (30-100px)
  const length = Math.random() * 70 + 30;
  shootingStar.style.width = `${length}px`;

  // Set position
  shootingStar.style.left = `${startX}px`;
  shootingStar.style.top = `${startY}px`;

  // Calculate travel distance (diagonal down-right)
  const travelX = Math.random() * 200 + 100;
  const travelY = Math.random() * 200 + 100;

  // Set CSS variables for the animation
  shootingStar.style.setProperty("--travel-x", `${travelX}px`);
  shootingStar.style.setProperty("--travel-y", `${travelY}px`);

  // Random duration (1.5-3s)
  const duration = Math.random() * 1.5 + 1.5;
  shootingStar.style.animationDuration = `${duration}s`;

  // Add to container
  container.appendChild(shootingStar);

  // Remove after animation completes
  setTimeout(() => {
    shootingStar.remove();
  }, duration * 1000);
}
