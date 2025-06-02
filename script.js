// Reveal on scroll animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  for (let i = 0; i < reveals.length; i++) {
    const revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);


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
  detectRetina: true,
});


// Scroll reveal animation for project cards (and other elements with .scroll-animate)
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

// Accordion functionality for Extra-Curricular Activities
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all accordions
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('active');
      h.nextElementSibling.style.display = 'none';
    });

    // Toggle the clicked one
    if (!isActive) {
      header.classList.add('active');
      content.style.display = 'block';
    }
  });
});

