// Toggle Menu

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
    document.body.classList.add("menu-open");
}

function hideMenu(){
    navLinks.style.right = "-200px";
    document.body.classList.remove("menu-open");
}


//  ScrollReveal
    
ScrollReveal().reveal('.first-container', {
      delay: 200, // Retardo en milisegundos antes de que se aplique el efecto
      duration: 800, // Duración de la animación en milisegundos
      origin: 'top', // Origen desde donde se revelará el contenido ('left', 'right', 'top', 'bottom', etc.)
      distance: '200px', // Distancia de desplazamiento o tamaño de la revelación
      easing: 'ease-in', // Curva de animación ('linear', 'ease-in', 'ease-out', 'ease-in-out', etc.)
      reset: true // Reinicia la animación en cada desplazamiento
});


