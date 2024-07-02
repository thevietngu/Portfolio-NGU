document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }

    return params;
  }

  function displayPortfolioDetails(id) {
    const portfolioItems = {
      1: {
        title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
        category: "Web site",
        client: "Booki Agency",
        date: "2024",
        url: "(Disponible prochainement)",
        description: `
          Projet Réalisé dans le cadre de ma formation Développeur Web chez OpenClassrooms<br><br>
          Scénario :<br>
          L’entreprise BOOKI souhaite développer un site Internet qui permette aux usagers de trouver des 
          hébergements et des activités dans la ville de leur choix. Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS.<br><br>
          Compétences utilisés : <br>

          <ul style="list-style-type: none"><br>
          <li><i class="bi bi-check-circle"></i> <span>HTML & CSS</span></li>
        </ul>`,
        images: [
          "assets/img/portfolio/booki-mockup.webp",
          "assets/img/portfolio/booki-desktop.webp",
          "assets/img/portfolio/booki-mobile.webp",
        ],
      },
      2: {
        title: "Créez une page web dynamique",
        category: "Web site",
        client: "Sophie Bluel",
        date: "2024",
        url: "(Disponible prochainement)",
        description: `Projet Réalisé dans le cadre de ma formation Développeur Web chez OpenClassrooms<br><br>

        Scénario :<br><br>
        En simulation de travail en tant que de développeur front-end d'une entreprise de design,
        je développe ici la vitrine du site internet de Sophie Bluel, architecte.
        
        Compétences utilisés : <br>

        <ul style="list-style-type: none"><br>
        <li><i class="bi bi-check-circle"></i> <span>HTML & CSS</span></li>
        <li><i class="bi bi-check-circle"></i> <span>JavaScript</span></li>
        </ul>`,

        images: [
          "assets/img/portfolio/Sophie-bluel-Mockup.webp",
          "assets/img/portfolio/Sophie-bluel-desktop-2.webp",
          "assets/img/portfolio/Sophie-bluel-desktop-4.webp",
          "assets/img/portfolio/Sophie-bluel-desktop-5.webp",
          "assets/img/portfolio/Sophie-bluel-desktop-6.webp",
        ],
      },
      3: {
        title: "Créez une application web de location immobilière",
        category: "Web site",
        client: "Immo Kasa",
        date: "2024",
        url: "(Disponible prochainement)",
        description: `Projet Réalisé dans le cadre de ma formation Développeur Web chez OpenClassrooms<br><br>

        Scénario :<br><br>
        Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web.
        Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant.
        Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre 
        particuliers en France.<br>
        
        Compétences utilisés : <br>

          <ul style="list-style-type: none"><br>
          <li><i class="bi bi-check-circle"></i> <span>HTML & CSS/SASS</span></li>
          <li><i class="bi bi-check-circle"></i> <span>React.js</span></li>
        </ul> 
        
        `,
        images: [
          "assets/img/portfolio/kasa-mockup.webp",
          "assets/img/portfolio/Kasa-screenshot-1.webp",
          "assets/img/portfolio/Kasa-screenshot-2.webp",
          "assets/img/portfolio/Kasa-screenshot-3.webp",
          "assets/img/portfolio/Kasa-screenshot-4.webp",
          "assets/img/portfolio/Kasa-screenshot-5.webp",
        ],
      },
      4: {
        title: "Débuggez et optimisez un site de photographe",
        category: "Web Site",
        client: "Nina Carducci",
        date: "2024",
        url: "(Disponible prochainement)",
        description: `Projet Réalisé dans le cadre de ma formation Développeur Web chez OpenClassrooms<br><br>

        Scénario : <br><br>
        Vous êtes développeur freelance, et vous décidez de proposer vos services d’optimisation SEO à pour le site de Nina Carducci,
         une photographe. Vous allez donc optimiser son site selon ses demandes indiquées dans son mail, 
         et lui fournir un rapport détaillé de votre intervention.<br>
        
         Compétences utilisés : <br>
 
           <ul style="list-style-type: none"><br>
           <li><i class="bi bi-check-circle"></i> <span>HTML & CSS</span></li>
           <li><i class="bi bi-check-circle"></i> <span>Référencement SEO</span></li>
           <li><i class="bi bi-check-circle"></i> <span>Accessibilité</span></li>
         </ul> `,
        images: [
          "assets/img/portfolio/Mockup-nina.webp",
          "assets/img/portfolio/Nina-1.webp",
        ],
      },

      5: {
        title: "Développez le back-end d'un site de notation de livres",
        category: "Web Application",
        client: "Le Vieux Grimoire",
        date: "2024",
        url: "(Disponible prochainement)",
        description: `Projet Réalisé dans le cadre de ma formation Développeur Web chez OpenClassrooms <br><br>

        Scénario :<br><br>
        Kévin vous contacte pour vous proposer de travailler avec lui en mutualisant vos compétences front / back
         sur un tout nouveau projet qui lui a été proposé.
         Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres.
         <br>
        
        Compétences utilisés : <br>

          <ul style="list-style-type: none"><br>
          <li><i class="bi bi-check-circle"></i> <span>HTML & CSS</span></li>
          <li><i class="bi bi-check-circle"></i> <span>JavaScript</span></li>
          <li><i class="bi bi-check-circle"></i> <span>Node.js & Express.js</span></li>
          <li><i class="bi bi-check-circle"></i> <span>MongoDB</span></li>
        </ul> `,
        images: [
          "assets/img/portfolio/grimoire-mockup.webp",
          "assets/img/portfolio/grimoire-screenshot-1.webp",
          "assets/img/portfolio/grimoire-screenshot-2.webp",
        ],
      },
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
      document.querySelector(".portfolio-description h2").textContent =
        item.title;
      document.querySelector(".portfolio-description p").innerHTML =
        item.description;

      const sliderWrapper = document.querySelector(".swiper-wrapper");
      sliderWrapper.innerHTML = "";
      item.images.forEach((image) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${image}" alt="" style="width: 100%; height: 500px; object-fit: cover; cursor: pointer;">`;
        sliderWrapper.appendChild(slide);
      });
      if (window.swiperInstance) {
        window.swiperInstance.destroy(true, true);
      }

      window.swiperInstance = new Swiper(".portfolio-details-slider", {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });

      window.swiperInstance.update();
      window.swiperInstance.slideTo(0);
      GLightbox({
        selector: ".swiper-slide img",
      });
    }
  }

  const queryParams = getQueryParams();
  if (queryParams.id) {
    displayPortfolioDetails(queryParams.id);
  } else {
    // Gestion d'erreur ou redirection si aucun id n'est trouvé
    console.log("No ID found in URL");
  }
});

(function () {
  "use strict";

  const headerToggleBtn = document.querySelector(".header-toggle");

  function headerToggle() {
    document.querySelector("#header").classList.toggle("header-show");
    headerToggleBtn.classList.toggle("bi-list");
    headerToggleBtn.classList.toggle("bi-x");
  }
  headerToggleBtn.addEventListener("click", headerToggle);

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".header-show")) {
        headerToggle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  new PureCounter();

  let skillsAnimation = document.querySelectorAll(".skills-animation");
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: "80%",
      handler: function (direction) {
        let progress = item.querySelectorAll(".progress .progress-bar");
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  });

  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
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

  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();
