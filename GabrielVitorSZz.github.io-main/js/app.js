document.addEventListener('DOMContentLoaded', () => {
  // Exemplo de como você poderia adicionar funcionalidades no futuro
  console.log("Portfólio carregado com sucesso!");
});

// Adicionando um efeito de scroll suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
