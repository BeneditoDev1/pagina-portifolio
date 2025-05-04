document.addEventListener("DOMContentLoaded", function () {
    const sideNav = document.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            offset: 74,
        });
    }

    const navbarToggler = document.querySelector(".navbar-toggler");
    const responsiveNavItems = document.querySelectorAll("#navbarResponsive .nav-link");
    if (navbarToggler && responsiveNavItems.length) {
        responsiveNavItems.forEach((item) => {
            item.addEventListener("click", () => {
                if (window.getComputedStyle(navbarToggler).display !== "none") {
                    navbarToggler.click();
                }
            });
        });
    }

    const btnTopo = document.getElementById("btnTopo");
    if (btnTopo) {
        window.addEventListener("scroll", function () {
            btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
        });

        btnTopo.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightMenu() {
        const scrollPos = window.scrollY + 100;

        sections.forEach((section) => {
            const id = section.getAttribute("id");
            const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

            if (navItem && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navItem.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu();

    function setLanguage(lang) {
        document.querySelectorAll('.lang').forEach(el => {
            const translation = el.getAttribute('data-' + lang);
            if (translation) {
                el.textContent = translation;
            }
        });
    }

    setLanguage('pt');

    window.setLanguage = setLanguage;
});
