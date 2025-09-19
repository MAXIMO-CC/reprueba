// --- Menú hamburguesa ---
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active"); 
    navbar.classList.toggle("active"); 
});











    const links = document.querySelectorAll('.navbar a:not(.facebook):not(.instagram)');

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });



    /*animacion 2*/ 

     window.addEventListener('scroll', () => {
    const imagen = document.querySelector('.imagen-scroll');
    const scrollY = window.scrollY;

    // Ajustá este valor según el momento en que querés que aparezca
    if (scrollY > 20) {
      imagen.classList.add('visible');
    } else {
      imagen.classList.remove('visible');
    }
  });



    const toggle = document.querySelector('.lineas');
const container = document.querySelector('.menu-container');

toggle.addEventListener('click', () => {
    container.classList.toggle('active');
});
















    
