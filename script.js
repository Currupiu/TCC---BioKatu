const imagens = document.querySelectorAll('.zoom-img');
const modal = document.getElementById('customModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById('closeModalBtn');

// Detecta qual página está ativa pelo <title>
const tituloPagina = document.title;

// Define descrições diferentes para cada página
let descricoes = [];

if (tituloPagina === "Plantas Aromáticas") {
  descricoes = [
    "Descrição da planta aromática 1",
    "Descrição da planta aromática 2",
    "Descrição da planta aromática 3",
    "Descrição da planta aromática 4",
    "Descrição da planta aromática 5",
    "Descrição da planta aromática 6",
    "Descrição da planta aromática 7",
    "Descrição da planta aromática 8",
    "Descrição da planta aromática 9",
    "Descrição da planta aromática 10",
    "Descrição da planta aromática 11",
    "Descrição da planta aromática 12",
    "Descrição da planta aromática 13",
    "Descrição da planta aromática 14",
    "Descrição da planta aromática 15"
  ];
} else if (tituloPagina === "Plantas Condimentares") {
  descricoes = [
    "Descrição da planta condimentar 1",
    "Descrição da planta condimentar 2",
    "Descrição da planta condimentar 3",
    "Descrição da planta condimentar 4",
    "Descrição da planta condimentar 5",
    "Descrição da planta condimentar 6",
    "Descrição da planta condimentar 7",
    "Descrição da planta condimentar 8",
    "Descrição da planta condimentar 9",
    "Descrição da planta condimentar 10",
    "Descrição da planta condimentar 11",
    "Descrição da planta condimentar 12",
    "Descrição da planta condimentar 13",
    "Descrição da planta condimentar 14",
    "Descrição da planta condimentar 15"
  ];
} else if (tituloPagina === "Plantas Medicinais") {
  descricoes = [
    "Descrição da planta medicinal 1",
    "Descrição da planta medicinal 2",
    "Descrição da planta medicinal 3",
    "Descrição da planta medicinal 4",
    "Descrição da planta medicinal 5",
    "Descrição da planta medicinal 6",
    "Descrição da planta medicinal 7",
    "Descrição da planta medicinal 8",
    "Descrição da planta medicinal 9",
    "Descrição da planta medicinal 10",
    "Descrição da planta medicinal 11",
    "Descrição da planta medicinal 12",
    "Descrição da planta medicinal 13",
    "Descrição da planta medicinal 14",
    "Descrição da planta medicinal 15"
  ];
}

// Aplica a lógica do modal
imagens.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;

    const titulo = img.parentNode.querySelector(".legenda").textContent;
    modalTitle.textContent = titulo;
    modalDesc.textContent = descricoes[index] || "Descrição não disponível.";
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




