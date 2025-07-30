    /*menu */ 

    const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggle.classList.toggle("active");
});





    const links = document.querySelectorAll('.navbar a:not(.facebook):not(.instagram)');

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });


    /*cuadros de cafi*/


    function mostrarCuadros() {
        const cuadros = document.querySelectorAll('.cuadro');
        cuadros.forEach(cuadro => {
        const rect = cuadro.getBoundingClientRect();
        const visible = rect.top < window.innerHeight - 150 && rect.bottom > 0;

        if (visible) {
            cuadro.classList.add('visible');
        } else {
            cuadro.classList.remove('visible');
        }
        });
    }

    window.addEventListener('scroll', mostrarCuadros);
    window.addEventListener('load', mostrarCuadros);

