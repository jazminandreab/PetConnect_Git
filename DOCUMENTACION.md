# Documentacion del proyecto

## 1. Descripcion general

Este proyecto es una pagina web tipo fan page profesional para Jazmin Andrea Bautista Oyuela. La pagina muestra informacion de perfil, competencias, experiencia laboral, formacion academica, herramientas y medios de contacto.

La pagina antes estaba organizada en archivos sueltos. Ahora se estructuro por tipo de archivo:

```text
Prueba/
  index.html
  DOCUMENTACION.md
  css/
    styles.css
    animations.css
  js/
    data.js
    render.js
    actions.js
    animations.js
```

La separacion permite mantener el proyecto mas ordenado:

- `index.html`: contiene la estructura principal de la pagina.
- `css/styles.css`: contiene los estilos visuales base.
- `css/animations.css`: contiene animaciones y transiciones especiales.
- `js/data.js`: contiene la informacion que se muestra en la pagina.
- `js/render.js`: toma los datos y los inserta dinamicamente en el HTML.
- `js/actions.js`: contiene acciones interactivas del usuario.
- `js/animations.js`: controla animaciones activadas con JavaScript.

## 2. Archivo index.html

El archivo `index.html` es el punto de entrada de la pagina. Define la estructura general y conecta los archivos CSS y JavaScript.

### 2.1 Cabecera del documento

En la etiqueta `<head>` se configuran los datos principales del documento:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fan Page | Jazmin Andrea Bautista Oyuela</title>
```

Funcion:

- `charset="UTF-8"` permite usar caracteres especiales.
- `viewport` permite que la pagina sea adaptable a celulares, tablets y pantallas grandes.
- `title` define el titulo que aparece en la pestana del navegador.

### 2.2 Fuentes externas

El HTML carga fuentes desde Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Bricolage+Grotesque:wght@400;600;700&display=swap" rel="stylesheet">
```

Se usan principalmente:

- `Sora`: texto general.
- `Bricolage Grotesque`: titulos principales.

### 2.3 Conexion con CSS

El HTML conecta dos hojas de estilo:

```html
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/animations.css">
```

Orden importante:

1. Primero se carga `styles.css`, porque contiene la base visual.
2. Luego se carga `animations.css`, porque agrega animaciones sobre los estilos ya definidos.

### 2.4 Cuerpo de la pagina

El contenido visible esta dentro de:

```html
<main class="screen">
```

Este contenedor centra la pagina y limita el ancho maximo del contenido.

### 2.5 Seccion hero

La seccion principal es:

```html
<section class="hero-card">
```

Contiene:

- Nombre del perfil.
- Rol profesional.
- Resumen.
- Botones principales.
- Tarjeta lateral de estado.
- Dos mini tarjetas con indicadores.

Muchos textos aparecen vacios en el HTML, por ejemplo:

```html
<h1 id="heroTitle"></h1>
```

Esto es intencional. El contenido no esta escrito directamente en el HTML, sino que se carga dinamicamente desde `js/data.js` usando `js/render.js`.

### 2.6 Secciones de contenido

El HTML contiene varias secciones:

- `panel-grid`: resumen, competencias y trabajo remoto.
- `timeline-panel`: experiencia laboral.
- `details-grid`: formacion academica, cursos y herramientas.
- `message-panel`: mensaje dinamico que cambia con interaccion.
- `social-panel`: enlaces de contacto.

Cada seccion usa `id` para que JavaScript pueda insertar contenido. Ejemplos:

```html
<div class="chips-grid" id="coreSkills"></div>
<div class="timeline-list" id="experienceList"></div>
<div class="social-links-grid" id="socialLinksGrid"></div>
```

### 2.7 Conexion con JavaScript

Al final del `body` se cargan los scripts:

```html
<script src="js/data.js"></script>
<script src="js/render.js"></script>
<script src="js/actions.js"></script>
<script src="js/animations.js"></script>
```

El orden es importante:

1. `data.js` debe cargar primero porque contiene la informacion.
2. `render.js` usa esa informacion para pintar el HTML.
3. `actions.js` agrega botones y acciones interactivas.
4. `animations.js` agrega animaciones al contenido ya creado.

## 3. Carpeta css

La carpeta `css` contiene los estilos de la pagina.

## 4. Archivo css/styles.css

Este archivo controla el diseno principal de la pagina: colores, tamanos, tarjetas, botones, grillas, responsive y modo claro.

### 4.1 Variables globales

Al inicio se definen variables CSS:

```css
:root {
  --bg: #08111f;
  --panel: rgba(9, 18, 34, 0.74);
  --text: #eef4ff;
  --accent: #5eead4;
}
```

Estas variables permiten cambiar colores en un solo lugar.

Variables principales:

- `--bg`: color base del fondo.
- `--bg-2`: segundo color del fondo.
- `--panel`: fondo de paneles principales.
- `--panel-strong`: fondo de tarjetas internas.
- `--text`: color de texto principal.
- `--muted`: color de texto secundario.
- `--line`: color de bordes.
- `--accent`: color destacado.
- `--shadow`: sombra general.

### 4.2 Modo claro

El selector:

```css
body.light-mode {
```

cambia las variables visuales cuando el usuario activa el modo claro desde JavaScript.

Esta clase se agrega o se quita desde `js/actions.js`:

```js
document.body.classList.toggle("light-mode");
```

### 4.3 Fondo y ruido visual

El `body` tiene un fondo con degradados radiales y lineales. Ademas, `.noise` agrega una textura sutil de cuadricula:

```css
.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
```

Esto mejora el aspecto visual sin afectar la interaccion del usuario.

### 4.4 Contenedor principal

```css
.screen {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}
```

Funcion:

- Centra la pagina.
- Limita el ancho maximo a `1180px`.
- Deja margen lateral en pantallas pequenas.

### 4.5 Tarjeta hero

```css
.hero-card {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.8fr);
}
```

La seccion principal usa CSS Grid para dividir el contenido en dos columnas:

- Columna izquierda: texto principal.
- Columna derecha: tarjetas resumidas.

En pantallas pequenas se convierte en una sola columna usando media queries.

### 4.6 Paneles

La clase `.panel` se usa para las secciones principales:

```css
.panel {
  border-radius: 28px;
  padding: 24px;
}
```

Todos los paneles comparten:

- Bordes suaves.
- Fondo semitransparente.
- Sombra.
- Espaciado interno.

### 4.7 Botones principales

Los botones usan:

```css
.primary-button,
.secondary-button {
  border-radius: 999px;
  padding: 14px 22px;
}
```

Tipos:

- `.primary-button`: boton principal de contacto.
- `.secondary-button`: boton secundario para ir a experiencia.

Ambos tienen efecto hover con movimiento hacia arriba.

### 4.8 Tarjetas y chips

Las clases `.mini-card`, `.timeline-item`, `.stack-item`, `.social-link-card` y `.chip` controlan tarjetas y etiquetas.

Ejemplo:

```css
.chip {
  padding: 10px 14px;
  border-radius: 999px;
}
```

Los chips se usan para competencias y herramientas.

### 4.9 Estado resaltado

La clase:

```css
.is-highlighted {
```

se agrega con JavaScript cuando el usuario hace clic o usa teclado sobre una tarjeta. Sirve para marcar visualmente el elemento seleccionado.

### 4.10 Panel de acciones

El bloque:

```css
.action-dock {
```

estiliza los botones flotantes que se crean desde `actions.js`:

- `Modo claro` / `Modo noche`.
- `Cambiar enfoque`.

### 4.11 Toast de copiado

La clase:

```css
.copy-toast {
```

define el aviso visual que aparece cuando se copia un contacto.

### 4.12 Diseno responsive

El archivo usa media queries:

```css
@media (max-width: 980px) { ... }
@media (max-width: 560px) { ... }
```

Funcion:

- En tablets y celulares, las grillas pasan a una columna.
- Los botones ocupan todo el ancho.
- El panel flotante de acciones se adapta al ancho disponible.

## 5. Archivo css/animations.css

Este archivo contiene solo animaciones y transiciones especiales.

### 5.1 Tarjeta flotante

```css
.floating-card {
  animation: floatCard 4.5s ease-in-out infinite;
}
```

Aplica una animacion permanente a la tarjeta lateral del hero.

La animacion `floatCard` mueve suavemente la tarjeta hacia arriba y abajo.

### 5.2 Animacion al aparecer

```css
.reveal-item {
  opacity: 0;
  transform: translateY(22px);
}
```

Los elementos empiezan invisibles y desplazados. Cuando JavaScript les agrega `.is-visible`, aparecen suavemente:

```css
.reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 5.3 Animacion de cambio de mensaje

```css
.message-swap {
  animation: messageSwap 420ms ease;
}
```

Se usa cuando el usuario cambia el mensaje del panel dinamico.

### 5.4 Toast visible

```css
.copy-toast.is-visible {
```

Hace visible el aviso de copiado.

### 5.5 Accesibilidad de movimiento

```css
@media (prefers-reduced-motion: reduce) {
```

Si el usuario tiene configurado reducir movimiento en su sistema, las animaciones se reducen casi por completo.

## 6. Carpeta js

La carpeta `js` contiene la logica de la pagina, separada por responsabilidad.

## 7. Archivo js/data.js

Este archivo contiene los datos usados por la pagina.

### 7.1 Objeto profileData

La informacion principal esta en:

```js
const profileData = {
```

Dentro se guardan:

- Texto del hero.
- Resumen profesional.
- Competencias.
- Habilidades de trabajo remoto.
- Experiencia laboral.
- Educacion.
- Cursos.
- Herramientas.
- Mensajes dinamicos.
- Enlaces sociales.

Ventaja:

Para cambiar contenido, no es necesario tocar el HTML. Solo se modifica `data.js`.

### 7.2 Competencias

```js
coreSkills: [
  "Gestion administrativa y organizacional",
  "Analisis y control de datos"
]
```

Cada elemento se convierte despues en un chip visual dentro de `render.js`.

### 7.3 Experiencia laboral

Cada experiencia tiene:

```js
{
  role: "Analista de Auditorias",
  company: "SEI Ingenieria y Servicios",
  period: "Sep 2023 - Actualidad",
  mode: "Remoto",
  bullets: []
}
```

Estos datos se renderizan como tarjetas de linea de tiempo.

### 7.4 Mensajes dinamicos

La propiedad `messages` contiene varios mensajes:

```js
messages: [
  {
    eyebrow: "Disponibilidad",
    title: "Perfil orientado a soporte remoto y control administrativo",
    text: "..."
  }
]
```

Estos mensajes cambian cuando el usuario presiona `Cambiar enfoque` o hace clic sobre el panel del mensaje.

### 7.5 Iconos

El objeto:

```js
const icons = {
```

guarda iconos SVG para:

- GitHub.
- LinkedIn.
- Correo.
- Telefono.

Estos iconos se insertan en las tarjetas de contacto.

## 8. Archivo js/render.js

Este archivo toma los datos de `data.js` y los muestra en el HTML.

### 8.1 Funcion setText

```js
const setText = (selector, value) => {
```

Busca un elemento por selector y le asigna texto.

Ejemplo:

```js
setText("#heroTitle", profileData.heroTitle);
```

Esto inserta el nombre en el `<h1 id="heroTitle"></h1>`.

### 8.2 Funcion createChip

```js
const createChip = (text) => {
```

Crea un elemento `<span>` con clase `chip`.

Se usa para:

- Competencias.
- Herramientas.

### 8.3 Funcion renderHero

```js
const renderHero = () => {
```

Llena la seccion principal de la pagina:

- Eyebrow.
- Badge.
- Titulo.
- Rol.
- Resumen.
- Tarjeta de estado.
- Mini tarjetas.
- Primer mensaje dinamico.

### 8.4 Funcion renderLists

```js
const renderLists = () => {
```

Renderiza:

- Competencias clave.
- Herramientas.
- Habilidades de trabajo remoto.

### 8.5 Funcion renderExperience

```js
const renderExperience = () => {
```

Recorre `profileData.experience` y crea tarjetas con:

- Cargo.
- Empresa.
- Modalidad.
- Periodo.
- Lista de funciones.

Tambien agrega `tabIndex = 0` para que las tarjetas puedan recibir foco con teclado.

### 8.6 Funcion renderEducation

```js
const renderEducation = () => {
```

Renderiza:

- Formacion academica.
- Cursos complementarios.

### 8.7 Funcion renderSocialLinks

```js
const renderSocialLinks = () => {
```

Crea las tarjetas de contacto:

- LinkedIn.
- Correo.
- Telefono.
- GitHub.

Cada tarjeta recibe:

- Clase visual.
- Enlace.
- Icono.
- Texto.
- Valor copiable con `data-contact-value`.

### 8.8 Funcion renderProfile

```js
const renderProfile = () => {
```

Ejecuta todas las funciones de renderizado.

### 8.9 Evento DOMContentLoaded

```js
document.addEventListener("DOMContentLoaded", renderProfile);
```

Espera a que el HTML este cargado antes de insertar contenido.

## 9. Archivo js/actions.js

Este archivo contiene las acciones interactivas de la pagina.

### 9.1 Funcion showToast

```js
const showToast = (message) => {
```

Crea o actualiza un aviso flotante.

Uso:

- Mostrar "Contacto copiado".
- Mostrar el valor del contacto si el navegador no permite copiar al portapapeles.

### 9.2 Funcion cycleMessage

```js
const cycleMessage = () => {
```

Cambia el contenido del panel dinamico usando la lista `profileData.messages`.

Funcionamiento:

1. Lee el indice actual desde `dataset.messageIndex`.
2. Calcula el siguiente mensaje.
3. Actualiza titulo, subtitulo y texto.
4. Activa la clase `message-swap` para animar el cambio.

### 9.3 Funcion toggleTheme

```js
const toggleTheme = () => {
```

Activa o desactiva la clase `light-mode` en el `body`.

Cuando `light-mode` esta activa, CSS cambia las variables de color para mostrar modo claro.

### 9.4 Funcion highlightCard

```js
const highlightCard = (card) => {
```

Resalta una tarjeta seleccionada.

Primero elimina la clase `.is-highlighted` de otros elementos y luego la agrega a la tarjeta actual.

### 9.5 Funcion copyContactValue

```js
const copyContactValue = async (event) => {
```

Permite copiar el valor de una tarjeta de contacto al portapapeles.

Ejemplo:

- Si el usuario hace clic en correo, intenta copiar el correo.
- Si el usuario hace clic en telefono, intenta copiar el telefono.

Usa:

```js
navigator.clipboard.writeText(...)
```

### 9.6 Funcion buildActionDock

```js
const buildActionDock = () => {
```

Crea dinamicamente el panel flotante de botones:

```html
<button id="themeToggle">Modo claro</button>
<button id="messageToggle">Cambiar enfoque</button>
```

Estos botones no estan escritos directamente en el HTML. Se crean con JavaScript.

### 9.7 Funcion initActions

```js
const initActions = () => {
```

Inicializa todas las acciones:

- Crea el panel flotante.
- Activa el boton de tema.
- Activa el boton de cambio de mensaje.
- Permite cambiar mensaje haciendo clic en el panel.
- Permite copiar contactos.
- Permite resaltar tarjetas con clic o teclado.

### 9.8 Evento DOMContentLoaded

```js
document.addEventListener("DOMContentLoaded", initActions);
```

Ejecuta las acciones cuando el HTML ya esta listo.

## 10. Archivo js/animations.js

Este archivo controla animaciones con JavaScript.

### 10.1 Funcion revealOnScroll

```js
const revealOnScroll = () => {
```

Selecciona elementos importantes:

```js
".hero-card, .panel, .timeline-item, .stack-item, .social-link-card"
```

A cada elemento le agrega `.reveal-item`.

Luego usa `IntersectionObserver` para detectar cuando cada elemento entra en pantalla.

Cuando entra en pantalla:

```js
entry.target.classList.add("is-visible");
```

Esto activa la animacion definida en `css/animations.css`.

### 10.2 Funcion addPointerTilt

```js
const addPointerTilt = () => {
```

Agrega efecto de inclinacion a tarjetas cuando el mouse se mueve sobre ellas.

Calcula la posicion del puntero dentro de la tarjeta y aplica:

```js
rotateX(...)
rotateY(...)
```

Cuando el mouse sale de la tarjeta, se limpia el estilo:

```js
card.style.transform = "";
```

### 10.3 Funcion initAnimations

```js
const initAnimations = () => {
```

Inicializa:

- Aparicion al hacer scroll.
- Inclinacion con el mouse.

### 10.4 Evento DOMContentLoaded

```js
document.addEventListener("DOMContentLoaded", initAnimations);
```

Ejecuta las animaciones cuando el documento esta listo.

## 11. Flujo de ejecucion de la pagina

Cuando se abre `index.html`, ocurre lo siguiente:

1. El navegador carga el HTML.
2. Se cargan las fuentes de Google.
3. Se cargan `css/styles.css` y `css/animations.css`.
4. Se carga `js/data.js` con toda la informacion.
5. Se carga `js/render.js` y se pinta el contenido dinamico.
6. Se carga `js/actions.js` y se agregan botones e interacciones.
7. Se carga `js/animations.js` y se activan animaciones visuales.

## 12. Como modificar contenido

Para cambiar textos, experiencia, cursos, herramientas o contactos, se debe editar:

```text
js/data.js
```

Ejemplos:

- Cambiar nombre: modificar `heroTitle`.
- Cambiar resumen: modificar `heroSummary`.
- Agregar una competencia: agregar texto en `coreSkills`.
- Agregar una experiencia: agregar un objeto dentro de `experience`.
- Agregar un contacto: agregar un objeto dentro de `socialLinks`.

## 13. Como modificar estilos

Para cambiar colores, tamanos, espacios, tarjetas o responsive, se debe editar:

```text
css/styles.css
```

Ejemplos:

- Cambiar color principal: modificar `--accent`.
- Cambiar fondo: modificar `--bg` y `--bg-2`.
- Cambiar ancho maximo: modificar `.screen`.
- Cambiar tarjetas: modificar `.panel`, `.mini-card`, `.timeline-item` o `.social-link-card`.

## 14. Como modificar animaciones

Para cambiar animaciones visuales, se debe editar:

```text
css/animations.css
js/animations.js
```

Ejemplos:

- Cambiar velocidad de aparicion: modificar `transition` en `.reveal-item`.
- Cambiar flotacion: modificar `@keyframes floatCard`.
- Cambiar inclinacion con mouse: modificar los valores `* 8` en `addPointerTilt`.

## 15. Como modificar acciones

Para modificar interacciones, se debe editar:

```text
js/actions.js
```

Acciones actuales:

- Cambiar de modo oscuro a claro.
- Cambiar mensaje dinamico.
- Resaltar tarjetas.
- Copiar datos de contacto.
- Mostrar aviso flotante.

## 16. Recomendaciones de mantenimiento

- Mantener el contenido en `data.js`.
- Mantener los estilos visuales en `styles.css`.
- Mantener las animaciones CSS en `animations.css`.
- Mantener las acciones del usuario en `actions.js`.
- Mantener las animaciones controladas por JavaScript en `animations.js`.
- No escribir contenido repetido directamente en el HTML si ya puede venir desde `data.js`.
- Si se agrega una nueva seccion dinamica, crear primero un contenedor con `id` en HTML y luego renderizarlo desde JavaScript.

## 17. Resumen tecnico

La pagina ahora es dinamica porque el contenido no depende solamente del HTML. El HTML funciona como estructura, mientras que JavaScript se encarga de insertar datos, crear elementos, agregar botones y responder a eventos del usuario.

La pagina tambien es interactiva porque permite:

- Cambiar tema visual.
- Cambiar el mensaje destacado.
- Resaltar tarjetas.
- Copiar datos de contacto.
- Mostrar animaciones al hacer scroll.
- Aplicar movimiento de tarjetas con el puntero.

## 18. Archivos principales

```text
index.html
```

Estructura principal de la pagina.

```text
css/styles.css
```

Estilos principales, colores, responsive, tarjetas, botones y modo claro.

```text
css/animations.css
```

Animaciones CSS, aparicion de elementos, flotacion y reduccion de movimiento.

```text
js/data.js
```

Datos del perfil, iconos y enlaces.

```text
js/render.js
```

Renderizado dinamico del contenido.

```text
js/actions.js
```

Acciones interactivas del usuario.

```text
js/animations.js
```

Animaciones activadas con JavaScript.
