/* Ajustes simples de navegação e links. Edite CONFIG abaixo antes de publicar. */
const CONFIG = {
  // Opção 1 (recomendada): número com código do país e DDD, só números. Ex.: 5561999999999
  whatsappNumber: "556192888287",
  // Opção 2: link curto usado enquanto o número estiver vazio.
  whatsappLink: "https://whats.link/clicksdafrann",
  // Informe o @ do Instagram sem o símbolo @.
  instagramUsername: "clicksdafran",
  // ID do Google Tag Manager. Deixe vazio para desativar.
  gtmId: "GTM-P3ML6PM3"
};

/* Google Tag Manager: carrega em todas as páginas que incluem este arquivo. */
window.dataLayer = window.dataLayer || [];
if (CONFIG.gtmId) {
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${CONFIG.gtmId}`;
  document.head.appendChild(gtmScript);
}

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.focus();
      }
    });
  }

  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    // Avisa o GTM a cada clique no WhatsApp (usado como conversão).
    link.addEventListener("click", () => {
      window.dataLayer.push({ event: "whatsapp_click", pagina: location.pathname });
    });

    const number = CONFIG.whatsappNumber.trim();
    const shortLink = CONFIG.whatsappLink.trim();

    if (number) {
      const message = encodeURIComponent(link.dataset.msg || "Olá, Fran! Vim pelo site e gostaria de saber mais sobre os ensaios.");
      link.href = `https://wa.me/${number}?text=${message}`;
    } else if (shortLink) {
      link.href = shortLink;
    } else {
      link.href = "https://wa.me/";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Configure seu WhatsApp em js/main.js antes de publicar o site.");
      });
    }
  });

  document.querySelectorAll("[data-instagram]").forEach((link) => {
    const username = CONFIG.instagramUsername.trim().replace(/^@/, "");
    if (username) link.href = `https://instagram.com/${username}`;

    // Avisa o GTM a cada clique no Instagram.
    link.addEventListener("click", () => {
      window.dataLayer.push({ event: "instagram_click", pagina: location.pathname });
    });
  });
});

/* Galeria: foto que não carregou fica só como bloco colorido; clique amplia. */
document.addEventListener("error", (e) => {
  if (e.target.matches && e.target.matches(".gallery-item img")) e.target.style.visibility = "hidden";
}, true);

document.addEventListener("DOMContentLoaded", () => {
  const items = [...document.querySelectorAll(".gallery-item")];
  const box = document.querySelector("#lightbox");
  if (!items.length || !box) return;
  const big = box.querySelector("img");
  let i = 0;
  const show = (n) => {
    i = (n + items.length) % items.length;
    const photo = items[i].querySelector("img");
    big.src = photo.currentSrc || photo.src;
    big.alt = photo.alt;
  };
  items.forEach((btn, n) => btn.addEventListener("click", () => {
    if (btn.querySelector("img").style.visibility === "hidden") return;
    show(n);
    box.showModal();
  }));
  box.querySelector("[data-prev]").addEventListener("click", () => show(i - 1));
  box.querySelector("[data-next]").addEventListener("click", () => show(i + 1));
  box.querySelector(".lb-close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  box.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(i - 1);
    if (e.key === "ArrowRight") show(i + 1);
  });
});