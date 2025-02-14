// link no header sempre ativo ao estar na página dele
const links = document.querySelectorAll("header .header-menu a");

function linkAtivo(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(linkAtivo);

// ativar itens do Orçamento clicado anteriormente
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
    console.log(elemento);
  }
}

parametros.forEach(ativarProduto);
