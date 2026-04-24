const spanAnio = document.getElementById("anio-actual");
const btnMenu = document.getElementById("menu-movil");
const listaNav = document.querySelector(".lista");
const btnCambiarContenido = document.getElementById("btnCambiarContenido");
const textoCambiarContenido = document.getElementById("textoCambiarContenido");
const btnCambiarAtributo = document.getElementById("btnCambiarAtributo");
const imagenCambiar = document.getElementById("imagen-cambiar");
const btnCambiarEstilos = document.getElementById("btnCambiarEstilos");
const cajaEstilos = document.getElementById("caja-estilos");
const btnAnimar1 = document.getElementById("btnAnimar1");
const cuadroAnimar = document.getElementById("cuadroAnimar");
const tarjetasAnimables = document.querySelectorAll(".animacion-aparecer");

let imagenmostrada = 0;

document.addEventListener("DOMContentLoaded", () => {

    if (spanAnio) {
        let fecha = new Date();
        spanAnio.textContent = fecha.getFullYear();
    }

    if (btnMenu && listaNav) {
        btnMenu.addEventListener("click", () => {
            listaNav.classList.toggle("active");
        });
    }

    if (btnCambiarContenido && textoCambiarContenido) {
        btnCambiarContenido.addEventListener("click", () => {
            textoCambiarContenido.textContent = "Contenido modificado dinámicamente.";
        });
    }

    if (btnCambiarEstilos && cajaEstilos) {
        btnCambiarEstilos.addEventListener("click", () => {
            cajaEstilos.classList.toggle("estilo-especial");
        });
    }

    if (btnCambiarAtributo && imagenCambiar) {
        const imagenes = [
            "../images/instalar-aire-acondicionado.webp",
            "../images/Instalacion electrica.avif",
            "../images/Instalaciones-Fontaneria.jpg"
        ];

        const cambiarFoto = () => {
            imagenmostrada = (imagenmostrada + 1) % imagenes.length;
            imagenCambiar.src = imagenes[imagenmostrada];
        };

        btnCambiarAtributo.addEventListener("click", (event) => {
            event.preventDefault();
            cambiarFoto();
        });

        setTimeout(function autoCambio() {
            cambiarFoto();
            setTimeout(autoCambio, 4000);
        }, 4000);
    }

    if (btnAnimar1 && cuadroAnimar) {
        btnAnimar1.addEventListener("click", (event) => {
            event.preventDefault();
            cuadroAnimar.style.animation = "none";
            void cuadroAnimar.offsetWidth; 
            cuadroAnimar.style.animation = "moverDerechaRebote 1.2s ease-in-out forwards";
        });
    }

    if (tarjetasAnimables.length > 0) {
        tarjetasAnimables.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("visible");
            }, 200 * index);
        });
    }
});