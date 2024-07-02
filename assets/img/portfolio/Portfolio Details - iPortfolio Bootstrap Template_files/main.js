/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 14 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

document.addEventListener("DOMContentLoaded", function() {
  // Fonction pour obtenir les paramètres d'URL
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }

    return params;
  }

  // Fonction pour afficher les détails du portfolio en fonction de l'ID
  function displayPortfolioDetails(id) {
    const portfolioItems = {
      1: {
        title: "Booki",
        category: "Web Application",
        client: "Booki Agency",
        date: "01 March, 2020",
        url: "www.example.com",
        description: "Description for Booki project...",
        images: [
          "assets/img/portfolio/booki-mockup.webp",
          "assets/img/portfolio/app-1.jpg",
          "assets/img/portfolio/product-1.jpg"
        ]
      },
      2: {
        title: "Sophie Bluel",
        category: "Product Design",
        client: "Sophie Bluel",
        date: "15 April, 2021",
        url: "www.example.com",
        description: "Description for Sophie Bluel project...",
        images: [
          "assets/img/portfolio/Sophie-bluel-Mockup.webp",
          "assets/img/portfolio/branding-1.jpg",
          "assets/img/portfolio/books-1.jpg"
        ]
      },
      3: {
        title: "Immo Kasa",
        category: "Web Application",
        client: "Booki Agency",
        date: "01 March, 2020",
        url: "www.example.com",
        description: "Description for Booki project...",
        images: [
          "assets/img/portfolio/kasa-mockup.webp",
          "assets/img/portfolio/Kasa-screenshot-1.webp",
          "assets/img/portfolio/Kasa-screenshot-1.webp"
        ]
      },
      4: {
        title: "Nina Carducci",
        category: "Web Application",
        client: "Booki Agency",
        date: "01 March, 2020",
        url: "www.example.com",
        description: "Description for Booki project...",
        images: [
          "assets/img/portfolio/Mockup-nina.webp",
          "assets/img/portfolio/app-1.jpg",
          "assets/img/portfolio/product-1.jpg"
        ]
      },
      
      5: {
        title: "Booki",
        category: "Web Application",
        client: "Booki Agency",
        date: "01 March, 2020",
        url: "www.example.com",
        description: "Description for Booki project...",
        images: [
          "assets/img/portfolio/grimoire-mockup.webp",
          "assets/img/portfolio/app-1.jpg",
          "assets/img/portfolio/product-1.jpg"
        ]
      },
      // Ajoutez d'autres éléments ici
    };

    const item = portfolioItems[id];
    if (item) {
      document.querySelector(".portfolio-info h3").textContent = item.title;
      document.querySelector(".portfolio-info ul").innerHTML = `
        <li><strong>Category</strong>: ${item.category}</li>
        <li><strong>Client</strong>: ${item.client}</li>
        <li><strong>Project date</strong>: ${item.date}</li>
        <li><strong>Project URL</strong>: <a href="#">${item.url}</a></li>
      `;
      document.querySelector(".portfolio-description h2").textContent = item.title;
      document.querySelector(".portfolio-description p").textContent = item.description;

      // Ajout des images au slider
      const sliderWrapper = document.querySelector(".swiper-wrapper");
      sliderWrapper.innerHTML = "";
      item.images.forEach(image => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${image}" alt="">`;
        sliderWrapper.appendChild(slide);
      });

      // Réinitialiser le swiper
      if (window.swiperInstance) {
        window.swiperInstance.destroy(true, true);
      }

      window.swiperInstance = new Swiper('.portfolio-details-slider', {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        }
      });

      window.swiperInstance.update();
      window.swiperInstance.slideTo(0);
    }
  }

  const queryParams = getQueryParams();
  if (queryParams.id) {
    displayPortfolioDetails(queryParams.id);
  } else {
    // Gestion d'erreur ou redirection si aucun id n'est trouvé
    console.error("No ID found in URL");
  }
});

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
