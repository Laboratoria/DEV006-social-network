<div>
<img src= "../DEV006-social-network/src/assets/readme/portada.png" .width="auto"/>
</div>
<br>
<div>
<img src= "../DEV006-social-network/src/assets/logo-barra.png" .width="auto"/>
</div>
<br>
<span style="color: #000; font-weight:800; font-size:30px; font-family: cursive"><img src= "./src/assets/logo2.png" width="20"/> Indice</span>

* [1. Descripción del Proyecto](#1-descripción-del-proyecto)
* [2. Estado del Proyecto](#2-estado-del-proyecto)
* [3. Planificación del Proyecto](#3-planificación-del-proyecto)
* [4. Diseño UX](#4-diseño-ux)
  * [Historias de Usuarios](#historias-de-usuarios)
* [5. Diseño UI](#5-diseño-ui)
   * [Proceso del diseño 🎨](#proceso-del-diseño-🎨)
      * [Estilo](#estilo)
      * [Teoria del color](#teoria-del-color)
   * [Prototipos](#prototipos)
      * [Prototipo de baja fidelidad](#prototipo-de-baja-fidelidad)
      * [Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
* [6. Consideraciones generales](#6-consideraciones-generales)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8.Herramientas](#8-herramientas)

## 1. Descripción del Proyecto
Club Zoocial es una aplicación Web enfocada en usuarios que tengan o les guste las mascotas. Para la realización del proyecto nos inspiramos en redes sociales como Instagram y Twitter, el propósito de esta aplicación es que puedan publicar o leer post con tips, consejos y/o sus rutinas diarias con sus mascotas, o información que pueda ayudar y aportar a otros usuarios. 

El proyecto se creó en una SPA que consta de 3 vistas: 
* Vista uno: El login, donde el usuario puede ingresar a la aplicación con su correo electrónico válido y contraseña, en caso de que el usuario se encuentre registrado. Otra opción es ingresar directamente con el botón "SIGN IN WITH GOOGLE" e ir directamente a la última vista.
* Vista dos: El de registro, donde el usuario puede crear su cuenta y almacenarla en la base de datos de Firebase con su correo electrónico y contraseña.
* Vista tres: El de home o muro, donde se pueden visualizar los post de otros usuarios. Además, se puede crear uno nuevo, borrar y editar un post propio que haya sido publicado, interactuar dando like a otros post que le gusten o dislike a los post que ya no son de su interés.

Se usó también Firebase como alamacenamiento de la base de datos de los usuarios, en donde se utilizó los servicios de Auth, y Firestore, este último, para crear las funciones de publicar post, dar like y conteo de los mismos, dar dislike, editar y borrar post. 

## 2. Estado del Proyecto
Actualmente el proyecto se encuentra con funcionamiento para ingreso de usuarios enlazado con Firebase, se puede ingresar tanto con correo y contraseña o directamente con Google, en la parte de Home se encuentra funcionando la creación de post y la opción de: dar like, dislike, borrar y editar. 

## 3. Planificación del Proyecto
Para la organización y/o planificación de este proyecto utilizamos la herramienta llamada Trello donde nos guiamos en las actividades pendientes por sprint, objetivos, bloqueos, y tareas culminadas. Incluímos el resumen de las HU dentro de ella.

* [Enlace directo a nuestra herramienta de planificación](https://trello.com/b/V435rqIg/social-network)

## 4. Diseño UX
### Historias de Usuarios
En el desarrollo de este proyecto realizamos cinco historias de usuarios las cuales se separan en las siguientes: 
![HU 1]()
![HU 2]()
![HU 3]()
![HU 4]()
![HU 5]()
## 5. Diseño UI
### Proceso del diseño [🎨]
#### Estilo
Interactivo, intuitivo, fácil de navegar y atractivo visualmente para el usuario.

#### Teoria del color
Utilizamos una herramienta para generar una paleta de colores que sea similar a la que vamos a utilizar en CSS utilizando un generador on line en coolors.

### Prototipos
Para la creación de los prototipos de baja y alta fidelidad nos apoyamos con la herramienta llamada Figma. Se diseñó la app priorizando el formato de la pantalla móvil, la cual cuenta con tres vistas (login, registro y home). Además, se realizó el formato para pantalla de computador.
#### Prototipo de baja fidelidad
![prototipo de baja]()
#### Prototipo de alta fidelidad
![prototipo de alta]()
## 6. Consideraciones generales

* Este proyecto se realizó en triada.
 [Leonor Huanachin Carahuanco](https://github.com/Leonor-HC)
 [Nacdul V. Ramirez Zavala](https://github.com/DulRz)  &
 [Valentina Paraguatey Latuff](https://github.com/ValenParaguatey)
* La interfaz del proyecto está desplegada en Firebase Deploy.
* El tiempo de entrega del proyecto fue de 4 semanas.

## 7. Objetivos de aprendizaje
 [ ✔️] **SÍ**     [ ❌]**NO**     

### UX

- [ ✔️] **Diseñar y desarrollar un producto o servicio poniendo al usuario en el centro**
- [ ✔️] **Crear protoripos de alta fidelidad que incluyan interacciones para recibir feedback en cada sprint por parte de los coaches y compañeras, e iterar.**
- [ ✔️] **Aplicar los principios de diseño visual(contraste, alineación, jerarquía, etc).**
- [ ❌] **Planear y ejecutar test de usabilidad**

### UI
- [ ✔️] **Seguir los principios básicos de diseño visual**
- [ ✔️] **Guiar al usuario en la navegación dentro de la aplicación (usamos alerts y modal con mensajes, y una interfaz para indicarle que es lo que encontrará en el app).**

### HTML

- [ ✔️] **Uso de HTML semántico**
- [ ✔️] **Construir la aplicación respetando el diseño de planificación(maquetación).**

### CSS

- [ ✔️] **Uso de selectores de CSS**
- [ ✔️] **Modelo de caja (box model): borde, margen, padding**
- [ ✔️] **Uso de flexbox en CSS**

### Web APIs

- [ ✔️] **Uso de selectores del DOM**
- [ ✔️] **Manipulación dinámica del DOM**
- [ ✔️] **Manejo de eventos del DOM (listeners)**
- [ ✔️] **Ruteado (History API, evento hashchange, window.location)**

### JavaScript

- [ ✔️] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [ ✔️] **Arrays (arreglos)**
- [ ✔️] **Objetos (key, value)**
- [ ✔️] **Variables (declaración, asignación, ámbito)**
- [ ✔️] **Uso de condicionales (if-else, lógica booleana)**
- [ ✔️] **Funciones (params, args, return)**
- [ ❌] **Pruebas unitarias (unit tests)**
- [ ✔️] **Módulos de ECMAScript (ES Modules)**
- [ ✔️] **Uso de linter (ESLINT)**
- [ ✔️] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [ ❌] **Uso de bucles/ciclos (while, for, for..of)**
- [ ❌] **Pruebas asíncronas**
- [ ❌] **Uso de mocks y espías**
- [ ✔️] **Diferenciar entre expresiones (expressions) y sentencias (statements)**
- [ ✔️] **Callbacks**
- [ ✔️] **Promesas**

### CONTROL DE VERSIONES DE Git Y GitHub

- [ ✔️] **Git: Instalación y configuración**
- [ ✔️] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [ ✔️] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ✔️] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ❌] **GitHub: Despliegue con GitHub Pages**
- [ ✔️] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**
- [ ❌] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### FIREBASE
- [ ✔️] **Firebase Auth**
- [ ✔️] **Firestore**
## 8. Herramientas
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Firebase](https://firebase.google.com/?hl=es)
* [SPA](https://es.wikipedia.org/wiki/Single-page_application)
* [Node.js](https://nodejs.org/)
* [HTML](https://desarrolloweb.com/home/html)
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
* [Figma](https://www.figma.com/)
* [Trello](https://trello.com/)
* [Canva](https://www.canva.com/)
* [Generador de paleta de colores personalizada](https://coolors.co/)
