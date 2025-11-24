window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const fadeSections = document.querySelectorAll(".fade-in-up");

  // Mostrar contenido después de intro animado
  setTimeout(() => {
    main.classList.remove("hidden");
    document.body.style.overflowY = "auto";
  }, 5200);

  // Mostrar navbar al hacer scroll
  const toggleNavbar = () => {
    const scrollY = window.scrollY;
    const introHeight = intro.offsetHeight - 100;

    if (scrollY > introHeight) {
      navbar.classList.add("visible-navbar");
      navbar.classList.remove("hidden-navbar");
    } else {
      navbar.classList.remove("visible-navbar");
      navbar.classList.add("hidden-navbar");
    }
  };

  // Activar animaciones al hacer scroll
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    fadeSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", () => {
    toggleNavbar();
    revealOnScroll();
  });

  toggleNavbar();
  revealOnScroll();

  // Menú hamburguesa
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "opacity 1s ease, transform 1s ease";
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    observer.observe(el);
  });
});


// 🔽 Smooth scroll animado al hacer click en navbar si error borrar esto
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetID);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Ajuste si hay navbar sticky
        behavior: 'smooth'
      });
    }
  });
});
