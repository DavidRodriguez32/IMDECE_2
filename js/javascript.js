//Elementos del DOM
const anio = document.getElementById("anio-actual");
const btnMenu = document.getElementById("menu-movil");
const listaNav = document.querySelector(".lista");
const btnCambiarAtributo = document.getElementById("botonCambiarAtributo");
const imagenCambiar = document.getElementById("imagen-cambiar");
const btnAnimar1 = document.getElementById("btnAnimar1"); 
const cuadroAnimar = document.getElementById("cuadroAnimar");
const diapositivas = document.querySelectorAll(".carrusel-diapositiva");
const puntos = document.querySelectorAll(".carrusel-punto");
const btnAnterior = document.getElementById("carrusel-anterior");
const btnSiguiente = document.getElementById("carrusel-siguiente");

//Variables necesarias
let imagenMostrada = 0;
let indiceCarrusel = 0;

//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {

    //Esto es para que el año del footer cambie automaticamente
    if (anio) {
        let fecha = new Date();
        anio.textContent = fecha.getFullYear();
    }

    //Desplegable para menú móvil
    if (btnMenu) {
        btnMenu.addEventListener("click", () => {
            if (listaNav) {
                listaNav.classList.toggle("active");
            }
        });
    }

    //Carrusel de imagenes haciendo click y AUTOMÁTICO (FOTOS DE LA OFICINA)
    if (btnCambiarAtributo && imagenCambiar) {
        const imagenes = [
            "../images/oficina Imdece.jpeg",
            "../images/oficina imdece 2.jpeg",
            "../images/oficina imdece 3.jpeg",
            "../images/oficina imdece 4 .jpeg",
            "../images/Imdece.jpeg",
            "../images/imdece vehiculo.jpeg",
            "../images/personal.jpeg"
        ];

        // Metemos la lógica en una función para poder reutilizarla
        const pasarFoto = () => {
            imagenMostrada = (imagenMostrada + 1) % imagenes.length;
            imagenCambiar.src = imagenes[imagenMostrada];
        };

        // Cambio manual al hacer click
        btnCambiarAtributo.addEventListener("click", pasarFoto);

        // Cambio automático cada 3 segundos (3000 milisegundos)
        setInterval(pasarFoto, 3000);
    }

    //Animacion para que se vea fluida
    if (btnAnimar1 && cuadroAnimar) {
        btnAnimar1.addEventListener("click", () => {
            cuadroAnimar.style.animation = "none";
            void cuadroAnimar.offsetWidth;
            cuadroAnimar.style.animation = "moverDerechaRebote 1.2s ease-in-out forwards";
        });
    }

    //Funcionalidad para recorrer elementos del DOM (Aparición en cascada)
    const tarjetasAnimables = document.querySelectorAll(".animacion-aparecer");

    if (tarjetasAnimables.length > 0) {
        tarjetasAnimables.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("visible");
            }, 200 * index);
        });
    }

    //Carrusel de proyectos de la empresa
    if (diapositivas.length > 0) {
        function mostrarDiapositiva(numero) {
            for (let i = 0; i < diapositivas.length; i++) {
                diapositivas[i].classList.remove("diapositiva-activa");
                puntos[i].classList.remove("punto-activo");
            }
            diapositivas[numero].classList.add("diapositiva-activa");
            puntos[numero].classList.add("punto-activo");
            indiceCarrusel = numero;
        }

        if (btnSiguiente) {
            btnSiguiente.addEventListener("click", () => {
                let nuevoIndice = indiceCarrusel + 1;
                if (nuevoIndice >= diapositivas.length) {
                    nuevoIndice = 0;
                }
                mostrarDiapositiva(nuevoIndice);
            });
        }

        if (btnAnterior) {
            btnAnterior.addEventListener("click", () => {
                let nuevoIndice = indiceCarrusel - 1;
                if (nuevoIndice < 0) {
                    nuevoIndice = diapositivas.length - 1;
                }
                mostrarDiapositiva(nuevoIndice);
            });
        }

        for (let i = 0; i < puntos.length; i++) {
            puntos[i].addEventListener("click", () => {
                mostrarDiapositiva(i);
            });
        }
    }
});
