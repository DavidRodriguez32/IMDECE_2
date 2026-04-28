/* =============================================
   IMDECE – javascript.js
   Funcionalidades:
     1. Año dinámico en el footer
     2. Menú hamburguesa móvil
     3. Carrusel de fotos (sobreEmpresa) con puntos y flechas
     4. Cambio de imagen automático (sobreEmpresa)
     5. Animación de aparición (scroll)

============================================= */

let imagenmostrada = 0;
let indiceCarrusel = 0;

/* =============================================
   DOMContentLoaded
============================================= */
document.addEventListener("DOMContentLoaded", () => {

    /* -------- Referencias DOM -------- */
    const elementoAnio = document.getElementById("anio-actual");
    const botonMenu = document.getElementById("menu-movil");
    const listaNavegacion = document.querySelector(".lista");

    /* Carrusel */
    const diapositivas = document.querySelectorAll(".carrusel-diapositiva");
    const puntos = document.querySelectorAll(".carrusel-punto");
    const botonAnterior = document.getElementById("carrusel-anterior");
    const botonSiguiente = document.getElementById("carrusel-siguiente");

    /* Cambio de imagen (sobreEmpresa) */
    const botonCambiarAtributo = document.getElementById("botonCambiarAtributo");
    const imagenCambiar = document.getElementById("imagen-cambiar");

    /* Animaciones aparecer */
    const tarjetasAnimables = document.querySelectorAll(".animacion-aparecer");

    /* Animación rebote */
    const botonAnimar1 = document.getElementById("botonAnimar1");
    const cuadroAnimar = document.getElementById("cuadroAnimar");

    /* ---------- 1. AÑO ACTUAL ---------- */
    if (elementoAnio) {
        elementoAnio.textContent = new Date().getFullYear();
    }

    /* ---------- 2. MENÚ HAMBURGUESA ---------- */
    if (botonMenu && listaNavegacion) {
        botonMenu.addEventListener("click", () => {
            listaNavegacion.classList.toggle("activa");
        });
    }

    /* ---------- 3. CARRUSEL CON FLECHAS Y PUNTOS ---------- */
    if (diapositivas.length > 0 && botonAnterior && botonSiguiente) {

        function mostrarDiapositiva(indice) {
            /* Ocultar todos */
            diapositivas.forEach(diapositiva => diapositiva.classList.remove("diapositiva-activa"));
            puntos.forEach(punto => punto.classList.remove("punto-activo"));

            /* Mostrar el activo */
            diapositivas[indice].classList.add("diapositiva-activa");
            if (puntos[indice]) puntos[indice].classList.add("punto-activo");

            indiceCarrusel = indice;
        }

        /* Flecha anterior */
        botonAnterior.addEventListener("click", () => {
            let nuevo = indiceCarrusel - 1;
            if (nuevo < 0) nuevo = diapositivas.length - 1;
            mostrarDiapositiva(nuevo);
        });

        /* Flecha siguiente */
        botonSiguiente.addEventListener("click", () => {
            let nuevo = indiceCarrusel + 1;
            if (nuevo >= diapositivas.length) nuevo = 0;
            mostrarDiapositiva(nuevo);
        });

        /* Clicks en los puntos */
        puntos.forEach(punto => {
            punto.addEventListener("click", () => {
                const indice = parseInt(punto.getAttribute("data-indice"), 10);
                mostrarDiapositiva(indice);
            });
        });

        /* Auto-avance cada 5 segundos */
        setInterval(() => {
            let nuevo = indiceCarrusel + 1;
            if (nuevo >= diapositivas.length) nuevo = 0;
            mostrarDiapositiva(nuevo);
        }, 5000);
    }

    /* ---------- 4. CAMBIO DE IMAGEN (sobreEmpresa) ---------- */
    if (botonCambiarAtributo && imagenCambiar) {
        const imagenes = [
            "../images/oficina Imdece.jpeg",
            "../images/oficina imdece 2.jpeg",
            "../images/oficina imdece 3.jpeg",
            "../images/oficina imdece 4 .jpeg",
            "../images/Imdece.jpeg",
            "../images/imdece vehiculo.jpeg",
            "../images/personal.jpeg"
        ];

        const funcionCambiarFoto = () => {
            imagenmostrada = (imagenmostrada + 1) % imagenes.length;
            imagenCambiar.style.opacity = "0";
            setTimeout(() => {
                imagenCambiar.src = imagenes[imagenmostrada];
                imagenCambiar.style.opacity = "1";
            }, 300);
        };

        imagenCambiar.style.transition = "opacity 0.3s ease";

        botonCambiarAtributo.addEventListener("click", (evento) => {
            evento.preventDefault();
            funcionCambiarFoto();
        });

        /* Auto-cambio cada 4s */
        setTimeout(function funcionAutoCambio() {
            funcionCambiarFoto();
            setTimeout(funcionAutoCambio, 4000);
        }, 4000);
    }

    /* ---------- 5. ANIMACIÓN REBOTE (icono) ---------- */
    if (botonAnimar1 && cuadroAnimar) {
        botonAnimar1.addEventListener("click", (evento) => {
            evento.preventDefault();
            cuadroAnimar.style.animation = "none";
            void cuadroAnimar.offsetWidth;
            cuadroAnimar.style.animation = "moverDerechaRebote 1.2s ease-in-out forwards";
        });
    }

    /* ---------- 6. ANIMACIONES DE APARICIÓN ---------- */
    if (tarjetasAnimables.length > 0) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada, indice) => {
                if (entrada.isIntersecting) {
                    setTimeout(() => {
                        entrada.target.classList.add("visible");
                    }, 100 * indice);
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.15 });

        tarjetasAnimables.forEach(elemento => observador.observe(elemento));
    }

});