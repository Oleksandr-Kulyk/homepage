const pages = Array.from(document.querySelectorAll(".content-section"));
const links = Array.from(document.querySelectorAll(".header__link"));

function handleRoute() {
  const currentHash = window.location.hash.replace("#", "") || "intro";
  const fullHash = `#${currentHash}`;

  pages.forEach((page) => {
    page.classList.toggle("hidden", page.id !== currentHash);
  });

  links.forEach((link) => {
    const isLinkActive = link.getAttribute("href") === fullHash;
    link.classList.toggle("header__link--active", isLinkActive);
  });
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
