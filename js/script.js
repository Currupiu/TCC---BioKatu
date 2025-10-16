const imagens = document.querySelectorAll('.zoom-img');
const modal = document.getElementById('customModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById('closeModalBtn');

// Array de descrições (ou pode usar data-desc nas imagens também)
const descricoes = [
  "Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.Essa planta é isso e isso e também isso.",
  "Descrição completa da planta 2",
  "Descrição completa da planta 3",
  "Descrição completa da planta 4",
  "Descrição completa da planta 5"
];

imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;

    // pega o <p class="legenda"> do mesmo bloco
    const titulo = img.parentNode.querySelector(".legenda").textContent;

    modalTitle.textContent = titulo;
    modalDesc.textContent = descricoes[index]; // usa array de descrições
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});