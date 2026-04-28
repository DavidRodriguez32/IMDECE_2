/* =============================================
   IMDECE – javascript.js
   Funcionalidades:
     1. Año dinámico en el footer
     2. Menú hamburguesa móvil
     3. Carrusel de fotos (sobreEmpresa) con dots y flechas
     4. Cambio de imagen automático (sobreEmpresa)
     5. Animación de aparición (scroll)
     6. FAQ acordeón
     7. Chips de servicio (contacto)
============================================= */

/* -------- Referencias DOM -------- */
const spanAnio     = document.getElementById("anio-actual");
const btnMenu      = document.getElementById("menu-movil");
const listaNav     = document.querySelector(".lista");

/* Carrusel */
const slides          = document.querySelectorAll(".carrusel-slide");
const dots            = document.querySelectorAll(".carrusel-dot");
const btnPrev         = document.getElementById("carrusel-prev");
const btnNext         = document.getElementById("carrusel-next");

/* Cambio de imagen (sobreEmpresa) */
const btnCambiarAtributo = document.getElementById("btnCambiarAtributo");
const imagenCambiar      = document.getElementById("imagen-cambiar");

/* Animaciones aparecer */
const tarjetasAnimables = document.querySelectorAll(".animacion-aparecer");

/* Animación rebote */
const btnAnimar1  = document.getElementById("btnAnimar1");
const cuadroAnimar = document.getElementById("cuadroAnimar");

let imagenmostrada = 0;
let indiceCarrusel = 0;

/* =============================================
   DOMContentLoaded
============================================= */
document.addEventListener("DOMContentLoaded", () => {

    /* ---------- 1. AÑO ACTUAL ---------- */
    if (spanAnio) {
        spanAnio.textContent = new Date().getFullYear();
    }

    /* ---------- 2. MENÚ HAMBURGUESA ---------- */
    if (btnMenu && listaNav) {
        btnMenu.addEventListener("click", () => {
            listaNav.classList.toggle("active");
        });
    }

    /* ---------- 3. CARRUSEL CON FLECHAS Y DOTS ---------- */
    if (slides.length > 0 && btnPrev && btnNext) {

        function mostrarSlide(indice) {
            /* Ocultar todos */
            slides.forEach(s => s.classList.remove("activo-slide"));
            dots.forEach(d  => d.classList.remove("activo-dot"));

            /* Mostrar el activo */
            slides[indice].classList.add("activo-slide");
            if (dots[indice]) dots[indice].classList.add("activo-dot");

            indiceCarrusel = indice;
        }

        /* Flecha anterior */
        btnPrev.addEventListener("click", () => {
            let nuevo = indiceCarrusel - 1;
            if (nuevo < 0) nuevo = slides.length - 1;
            mostrarSlide(nuevo);
        });

        /* Flecha siguiente */
        btnNext.addEventListener("click", () => {
            let nuevo = indiceCarrusel + 1;
            if (nuevo >= slides.length) nuevo = 0;
            mostrarSlide(nuevo);
        });

        /* Clicks en los dots */
        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                const idx = parseInt(dot.getAttribute("data-indice"), 10);
                mostrarSlide(idx);
            });
        });

        /* Auto-avance cada 5 segundos */
        setInterval(() => {
            let nuevo = indiceCarrusel + 1;
            if (nuevo >= slides.length) nuevo = 0;
            mostrarSlide(nuevo);
        }, 5000);
    }

    /* ---------- 4. CAMBIO DE IMAGEN (sobreEmpresa) ---------- */
    if (btnCambiarAtributo && imagenCambiar) {
        const imagenes = [
            "../images/instalar-aire-acondicionado.webp",
            "../images/Instalacion electrica.avif",
            "../images/proyecto_climatizacion1.png",
            "../images/proyecto_climatizacion2.png",
            "../images/proyecto_electricidad.png",
            "../images/proyecto_oficina.png"
        ];

        const cambiarFoto = () => {
            imagenmostrada = (imagenmostrada + 1) % imagenes.length;
            imagenCambiar.style.opacity = "0";
            setTimeout(() => {
                imagenCambiar.src = imagenes[imagenmostrada];
                imagenCambiar.style.opacity = "1";
            }, 300);
        };

        imagenCambiar.style.transition = "opacity 0.3s ease";

        btnCambiarAtributo.addEventListener("click", (event) => {
            event.preventDefault();
            cambiarFoto();
        });

        /* Auto-cambio cada 4s */
        setTimeout(function autoCambio() {
            cambiarFoto();
            setTimeout(autoCambio, 4000);
        }, 4000);
    }

    /* ---------- 5. ANIMACIÓN REBOTE (icono) ---------- */
    if (btnAnimar1 && cuadroAnimar) {
        btnAnimar1.addEventListener("click", (event) => {
            event.preventDefault();
            cuadroAnimar.style.animation = "none";
            void cuadroAnimar.offsetWidth;
            cuadroAnimar.style.animation = "moverDerechaRebote 1.2s ease-in-out forwards";
        });
    }

    /* ---------- 6. ANIMACIONES DE APARICIÓN (Intersection Observer) ---------- */
    if (tarjetasAnimables.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, 100 * idx);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        tarjetasAnimables.forEach(el => observer.observe(el));
    }

    /* ---------- 7. FAQ ACORDEÓN ---------- */
    const preguntasFAQ = document.querySelectorAll(".faq-pregunta");

    preguntasFAQ.forEach(preg => {
        preg.addEventListener("click", () => {
            const id = preg.getAttribute("data-id");
            const respuesta = document.getElementById("respuesta" + id);
            const iconoMas  = preg.querySelector(".faq-mas");

            if (!respuesta) return;

            const estaAbierta = respuesta.classList.contains("abierta");

            /* Cerramos todas primero */
            document.querySelectorAll(".faq-respuesta").forEach(r => r.classList.remove("abierta"));
            document.querySelectorAll(".faq-mas").forEach(i => i.textContent = "+");

            /* Si estaba cerrada, la abrimos */
            if (!estaAbierta) {
                respuesta.classList.add("abierta");
                if (iconoMas) iconoMas.textContent = "−";
            }
        });
    });

    /* ---------- 8. CHIPS DE SERVICIO (contacto) ---------- */
    const chips = document.querySelectorAll(".chip-servicio");

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("seleccionado"));
            chip.classList.add("seleccionado");
        });
    });
});