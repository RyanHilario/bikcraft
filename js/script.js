const links = document.querySelectorAll("header .header-menu a");

function linkAtivo(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(linkAtivo);
