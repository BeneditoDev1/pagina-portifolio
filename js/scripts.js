document.addEventListener("DOMContentLoaded", function () {
    const sideNav = document.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            offset: 74,
        });
    }

    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
        const responsiveNavItems = document.querySelectorAll("#navbarResponsive .nav-link");
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
            if (window.scrollY > 300) {
                btnTopo.style.display = "block";
            } else {
                btnTopo.style.display = "none";
            }
        });

        btnTopo.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightMenu() {
        let scrollPos = window.scrollY + 100;

        sections.forEach((section) => {
            let id = section.getAttribute("id");
            let navItem = document.querySelector(`.nav-link[href="#${id}"]`);

            if (navItem && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navItem.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu();
});
