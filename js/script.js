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

// abrir e fechar perguntas frequentes ao clique na página de seguros
const perguntas = document.querySelectorAll("#seguros .perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// trocar imagem principal na bicicletas internas
const galeria = document.querySelector(".bicicleta-imagens");
const bicicletas = document.querySelectorAll(".bicicleta-imagens img");

function trocarImagem(evento) {
  const img = evento.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galeria.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

bicicletas.forEach(eventosGaleria);
