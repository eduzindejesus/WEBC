document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  // Botão de voltar ao topo
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

// Mostrar o botão de voltar ao topo quando o usuário rolar para baixo
window.addEventListener('scroll', () => {
    if (rootElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Função para rolar até o topo
scrollToTopBtn.addEventListener('click', () => {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
