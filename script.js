// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-mensagem");
  const mensagem = document.getElementById("mensagem");

  btn.addEventListener("click", function () {
    mensagem.textContent = "Olá! O JavaScript está funcionando corretamente.";
  });
});

// abrir modal
const botao = document.getElementById("botao");
const modal = document.getElementById("modal");


botao.addEventListener("click", () => {
    modal.classList.add("ativo");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("ativo");
    }
});