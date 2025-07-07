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

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightMenu() {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

      if (
        navItem &&
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navItem.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightMenu);
  highlightMenu();

  function calcularIdade(dataNascimentoStr) {
    const nascimento = new Date(dataNascimentoStr);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const aniversario = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate());

    if (hoje < aniversario) idade--;

    return idade;
  }

  function setLanguage(lang) {
    const idade = calcularIdade("1999-07-01");

    document.querySelectorAll(".lang").forEach((el) => {
      const rawText = el.getAttribute(`data-${lang}`);
      if (rawText) {
        const textoFinal = rawText.replace("{IDADE}", idade);
        el.textContent = textoFinal;
      }
    });
  }

  function verificarImagem(url, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
  }

  verificarImagem("https://avatars.githubusercontent.com/u/91962241?v=4", function (sucesso) {
    const imgElement = document.getElementById("profileImage");
    if (imgElement && !sucesso) {
      imgElement.src = "assets/images/default-profile.jpg";
    }
  });

  setLanguage("pt");

  window.setLanguage = setLanguage;
});
