/*botão conheça mais*/
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btn-conheca-mais");
    
    button.classList.add("bounce");
    
    setTimeout(() => {
      button.classList.remove("bounce");
    }, 1000); 
  });


/*efeito typing*/
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing-effect");
  
    typingElement.addEventListener("animationend", () => {
      typingElement.setAttribute("data-typed", "true");
    });
  });
  
/*efeito rolagem*/
  document.addEventListener("scroll", function () {
    const section = document.querySelector("#about-school");
    const icons = document.querySelectorAll(".animated-icons .icon");
  
    const sectionPosition = section.getBoundingClientRect();
    const screenHeight = window.innerHeight;
  
    if (sectionPosition.top < screenHeight - 100 && sectionPosition.bottom > 100) {
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.opacity = "1"; 
          icon.style.transform = "translateY(0)"; 
        }, index * 200); 
      });
    }
  });