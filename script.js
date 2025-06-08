//Background Particle Effect To Make It Look Like Stars! 
tsParticles.load('particles-bg', {
  fullScreen: false,
  fpsLimit: 60,
  background: {
    color: 'transparent',
  },
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#3aa6ff', '#82bfff', '#ffffff'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1.2,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: { enable: true, minimumValue: 1 },
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false,
      },
    },
    move: {
      enable: false,
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.1,
        opacity: 1,
      },
    },
  },
});


// Scroll reveal animation for all elements with .scroll-animate
const scrollElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

scrollElements.forEach(el => observer.observe(el));


//Scroll Up Button Animation 
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});