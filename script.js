// Create star field background when document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const starField = document.getElementById("star-field");
  const header = document.querySelector("header");

  // Create stars for the global background
  createStars(starField, 300);

  // Create extra dense stars specifically for the header
  createDenseStarsInHeader(header, 200);

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
