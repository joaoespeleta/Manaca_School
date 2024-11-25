/*botão conheça mais*/
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btn-conheca-mais");
    
    // Adiciona uma classe para uma animação no carregamento
    button.classList.add("bounce");
    
    // Remove a classe após a animação terminar
    setTimeout(() => {
      button.classList.remove("bounce");
    }, 1000); // 1 segundo (tempo da animação)
  });


/*efeito typing*/
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing-effect");
  
    // Aguarda o fim da animação para manter o texto
    typingElement.addEventListener("animationend", () => {
      typingElement.setAttribute("data-typed", "true");
    });
  });
  
/*efeito rolagem*/
  document.addEventListener("scroll", function () {
    const section = document.querySelector("#about-school");
    const icons = document.querySelectorAll(".animated-icons .icon");
  
    // Obtém a posição da seção em relação à tela
    const sectionPosition = section.getBoundingClientRect();
    const screenHeight = window.innerHeight;
  
    // Verifica se a seção está visível
    if (sectionPosition.top < screenHeight - 100 && sectionPosition.bottom > 100) {
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.opacity = "1"; // Mostra os ícones
          icon.style.transform = "translateY(0)"; // Move os ícones para a posição original
        }, index * 200); // Adiciona um pequeno delay entre os ícones
      });
    }
  });
  
/*efeito rolar flashcard*/
// Função para animar os cards quando entrarem na tela
function checkServicesVisibility() {
    const servicesSection = document.querySelector('#services');
    const rect = servicesSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    if (rect.top <= windowHeight * 0.8) {
      servicesSection.classList.add('visible');
    }
  }
  
  // Chama a função ao rolar e ao carregar a página
  window.addEventListener('scroll', checkServicesVisibility);
  window.addEventListener('load', checkServicesVisibility);
  