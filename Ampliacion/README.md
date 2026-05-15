# Proyecto IMDECE - Práctica 1DAM

Este es el proyecto web que estamos desarrollando para la prácticas duales. Ya he dejado montada la estructura de las páginas principales, aplicado los estilos necesarios para que todo tenga un acabado profesional y añadido la interactividad requerida manipulando el DOM.

## Cambios realizados 24/04/2026

### index.html (Inicio)
* **Maquetación:** He montado el menú de navegación y la portada principal con el estilo corporativo.
* **Sección de Servicios:** He maquetado la sección de "Nuestra Especialidad" y las tarjetas de servicios, asegurándome de que el centrado y los tamaños de fuente destaquen como deben.

### sobreEmpresa.html
* **Estructura y Estilos:** He maquetado la página para que sea coherente con el resto del sitio, añadiendo el bloque de información y el contenedor para la imagen de las instalaciones.
* **Valores:** He implementado la sección de valores de la empresa usando el mismo formato de tarjetas que en el inicio.

### contacto.html
* **Tarjetas de contacto rápido:** He implementado cuatro tarjetas horizontales con iconos que muestran la información esencial (teléfono, dirección, email y urgencias 24h) con fondo naranja y efecto hover.
* **Formulario de contacto:** He maquetado un formulario completo con campos de nombre, apellidos, email, teléfono, asunto y mensaje. Todos los campos obligatorios están marcados con un asterisco naranja.
* **Chips de servicios:** He añadido un selector visual tipo "chip" para que el usuario pueda indicar qué servicio necesita (Climatización, Electricidad, Instalaciones, Mantenimiento, Urgencia 24h).
* **Barra lateral informativa:** He maquetado un bloque lateral con los datos de contacto completos, el horario de atención y un mapa visual simulado con animación en el pin.
* **FAQ Acordeón:** He añadido una sección de preguntas frecuentes con un sistema de acordeón que muestra/oculta las respuestas al hacer clic.

### servicios.html
* **Diseño en zig-zag:** He implementado un diseño alternante para cada servicio, donde la imagen y el texto se intercambian de posición para crear un efecto visual dinámico y atractivo.
* **Servicio de Climatización:** He maquetado el primer bloque con texto a la izquierda e imagen a la derecha, incluyendo una lista desordenada con las características del servicio (instalación de aire acondicionado, mantenimiento, reparación de averías, limpieza de conductos, asesoramiento energético y aerotermia).
* **Servicio de Electricidad:** He maquetado el segundo bloque con imagen a la izquierda y texto a la derecha, incluyendo una lista desordenada con las especialidades (instalaciones eléctricas completas, cuadros eléctricos, reparación de averías, iluminación LED, certificados CIE y sistemas de protección).
* **Servicio de Fontanería:** He maquetado el tercer bloque con texto a la izquierda e imagen a la derecha, incluyendo una lista desordenada con los servicios (reparación de fugas, instalación de ACS, montaje de baños y cocinas, desatascos, sistemas de riego y calentadores).
* **Servicio de Mantenimiento Integral:** He maquetado el cuarto bloque con imagen a la izquierda y texto a la derecha, incluyendo una lista desordenada con las prestaciones (mantenimiento preventivo, revisiones programadas, urgencias 24h, gestión de averías, asesoramiento técnico e informes de estado).
* **Servicio de Instalaciones Especiales:** He maquetado el quinto bloque con texto a la izquierda e imagen a la derecha, incluyendo una lista desordenada con los servicios avanzados (climatización industrial, ventilación forzada, energía solar térmica, domótica, instalaciones de gas y proyectos llave en mano).
* **Imágenes placeholder:** He creado cinco gradientes de colores distintos para representar visualmente cada servicio, con efecto de escala al pasar el ratón por encima.
* **Botón enorme de presupuesto:** He añadido un llamativo botón al final de la página con fondo azul degradado y texto en naranja que redirige directamente a la página de contacto.html para solicitar presupuesto.

### Estilos (CSS)
* He aplicado los estilos globales, ajustando el tamaño del logo corporativo y definiendo los márgenes y colores en todo el proyecto.
* He trabajado en la alineación y legibilidad de los textos principales para que la web se vea limpia y organizada.
* He añadido estilos específicos para la página de contacto, incluyendo las tarjetas rápidas, el formulario, los chips de servicios, la barra lateral, el mapa animado y el acordeón de FAQ.
* He añadido estilos específicos para la página de servicios, incluyendo el diseño zig-zag, las imágenes placeholder con gradientes personalizados, las listas desordenadas con viñetas y el botón enorme de presupuesto.
* He implementado media queries completas para garantizar que todas las páginas (index, sobreEmpresa, contacto, servicios) se vean correctamente y se adapten a diferentes tamaños de pantalla mediante CSS.

### Funcionalidad y Manipulación del DOM (JavaScript)
* **Año Dinámico:** Uso del objeto `Date()` para mantener actualizado el año del copyright en el pie de página de forma automática.
* **Interactividad del DOM:** Integración de los métodos vistos en clase como `textContent` para modificar contenido dinámico, `classList` para añadir/quitar estilos en tiempo real, y modificación de atributos (como `.src`) para alterar elementos visuales a petición del usuario.
* **Carrusel de Imágenes:** Uso de *Arrays* para almacenar y recorrer rutas de imágenes, apoyándose en funciones con `setTimeout` (recursividad) para crear un pase de diapositivas automático, además de ofrecer control manual mediante el evento de click.
* **Control de Animaciones:** Manejo de animaciones CSS desde JavaScript forzando el recalculo de la vista del navegador (*reflow*) leyendo la propiedad `offsetWidth` para reiniciar las animaciones a demanda.
* **Efectos de Carga en Cascada:** Uso de `querySelectorAll` y bucles `forEach` para iterar elementos de la interfaz. Aplicación de `setTimeout` con temporizadores dependientes del índice del elemento para lograr que las tarjetas aparezcan progresivamente de forma fluida.

---
*Nota: La base del diseño y la interacción mediante JavaScript de la página de inicio y la de la empresa ya están listas.  Faltaría el JS de las páginas Contacto y Servicio.*
