# MWUnited

## Índice

* [1. Descripcion del Proyecto](#1-descripcion-del-proyecto)
* [2. Prototipos](#2-prototipos)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Test Unitarios](#4-test-unitarios)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Creadoras](#6-creadoras)


# 1. Descripcion del Proyecto

![LogoSNsinfondo](https://github.com/Mikamub/DEV006-cipher/assets/125576731/8a30cbc5-51ce-4dd5-9360-f9e5909072fe)
MWUnited es una comunidad en línea creada exclusivamente para mujeres. Es un espacio seguro y cómodo donde las mujeres pueden conectarse entre sí, compartir experiencias, pensamientos y crear relaciones significativas. Puedes publicar tus pensamientos, historias y cualquier otro contenido que desees compartir con la comunidad. Tienes la opción de editar o eliminar tus propias publicaciones en cualquier momento, brindándote el control total sobre tu experiencia en la plataforma.

Nos hemos enfocado en crear una experiencia intuitiva y fácil de usar en MWUnited. Hemos realizado pruebas de usabilidad para asegurarnos de que la navegación por la plataforma, la publicación de contenido y la interacción con otras usuarias sea sencilla y agradable. Valoramos la amigabilidad y la seguridad de nuestras usuarias. Ha sido diseñada pensando en crear un ambiente acogedor y respetuoso. Nuestra comunidad se basa en el apoyo mutuo y la empatía, donde todas las mujeres pueden sentirse valoradas y escuchadas.

Únete a MWUnited y descubre un mundo de posibilidades, ofreciendo un entorno seguro, cómodo y agradable para todas sus usuarias.


# 2. Prototipos Alta y baja fidelidad

Para la realización del proyecto se hizo la maquetación de baja y alta fidelidad. A continuación la maquetación de baja fidelidad:
![Baja fidelidad](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/db47c7cf-280f-4f7f-8a9e-b913bd486cd4)

Se pensó en un diseño amigable para la interfaz de usuario, en el cual se pudiera acceeder a las distintas vistas por medio de un solo botón. A continuación el prototipo de baja fidelidad para posts en el cual se encuentran tambien botones para ir a configuración, notificaciones, creacion de nuevo post, y perfil.
![Baja posts](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/2106954c-2ae3-4df1-97da-5c8b7cc01799)

Despues de los tests de usabilidad se implementaron cambios que tenian que ver con tamaños de inputs y de iconos intuitivos. Posteriormente, implementamos la paleta de colores, iconos especificos y este fue el resultado del prototipo de alta fidelidad.

### Home: <br> ![Home ](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/675240d5-681d-4aab-bc28-1cd3b85790ed)
### Login: <br> ![Login de usuario](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/bf71246f-c511-464a-953e-95dbef716adf)
### Pregunta:  <br>![Pregunta](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/184426be-7959-4b4e-9ffb-e19d2c523ae3)
### Registro: <br>![Registro de usuario nuevo](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/204cfb37-12dd-4907-a127-67a9d411261c)
### Respuesta: <br>

![Respuesta a negativa](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/54d32ce2-6e98-4942-a117-3c69cac238e6)


Finalmente, y despues de retroalimentación con respecto a colores, tamaño de letra y usablidad realizamos la programación de la red social.


### Home: <br>![Home real](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/d35b5581-6934-4f77-889f-65bc29307ed7)
### Login: <br>![login real](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/f1cd6acb-a74d-4b9e-bed8-bc4ae0014460)
### Posts: <br> 
![posts real](https://github.com/Mariana-Sanchez21/DEV006-cipher/assets/116685936/23e16318-a90e-40e9-8b32-915df391ae04) 



# 3. Historias de usuarios
### **Historia de usuario uno** <br>
<u>Yo como usuaria quiero poder registrarme  para poder ingresar a la aplicación.</u><br>
Crear un botón para que la usuaria se registre desde la página de inicio, la usuaria puede utilizar su correo electrónico para registrarse o puede hacerlo a través de su cuenta de Google,donde se realizará automáticamente la validación del correo electrónico. La contraseña debe cumplir con ciertas características y debe mostrarse oculta.

### **Historia de usuario dos** <br>
<u> Yo como usuario quiero poder iniciar sesion en la aplicacion para poder ver el muro.</u><br>
Crear un botón para que la usuaria inicie sesion desde la pagina home,La usuaria puede ingresar su correo y contraseña en los campos correspondientes también puede iniciar sesion con google,si algún campo esta errado la usuaria puede saber cual es el error,se le hará una pregunta de validación para saber si se identifica como mujer.

### **Historia de usuario tres** <br>
<u>Yo como usuaria quiero poder crear un post y publicarlo para que las otras personas puedan verlo</u><br>
Al hacer login o signup se redirige a la usuaria al muro, puede crear un post,el cual contiene el nombre de la usuaria, fecha y hora. El post esta ordenado, siendo el mas reciente el que aparece al principio de la pagina.

### **Historia de usuario cuatro** <br>
<u>Yo como usuaria quiero poder  editar un post que haya creado para que las otras personas puedan verlo modificado.</u><br>
Solamente la creadora del post podrá editar sus post al hacer clic en dicho boton se mostrará la informacion del post,la usuaria puede cambiar el contenido que va a editar y publicarlo actualizado con los cambios correspondientes.

### **Historia de usuario cinco** <br>
<u>Yo como usuaria quiero poder eliminar un post que haya creado para que las otras personas puedan dejar de verlo.</u><br>
Solamente la creadora del post podrá tener observar el boton de eliminar, al hacer click le pide confirmacion para eliminar el post,la usuaria  tiene las opciones de confirmar y eliminar el post o cancelar la eliminacion.


### **Historia de usuario seis** <br>
<u>Yo como usuaria quiero poder darle like a los posts para expresar que me gusta.</u><br>
Al hacer click en el boton like se mostrará los likes actualizados,se coloca de color morado, sí la usuaria desea quitar el like, se quitará el color morado y se disminuira el contador de los likes.



# 4. Test unitarios
Nos gustaría informarles que, debido a limitaciones de tiempo, no hemos podido completar la implementación de las pruebas unitarias en nuestro proyecto actual. Reconocemos la importancia de las pruebas unitarias en la calidad y la estabilidad del software, y nos disculpamos por no haber podido llevarlas a cabo en esta ocasión.

Sin embargo, queremos asegurarles que entendemos la importancia de las pruebas unitarias y planeamos trabajar en ellas en futuros proyectos. Aprendemos de cada experiencia y nos esforzamos por mejorar continuamente nuestros procesos de desarrollo. En los próximos proyectos, daremos prioridad a la implementación de pruebas unitarias y nos aseguraremos de que estén incluidas en nuestras prácticas de desarrollo habituales.

# 5. Objetivos de aprendizaje

### **HTML**
* Uso de HTML semántico

### **CSS**
* Uso de selectores de CSS
* Modelo de caja (box model)
* Uso de flexbox en CSS

### **Web APIs**

* Uso de selectores del DOM 
* Manejo de eventos del DOM
* Manipulación dinámica del DOM
* Ruteado 

### **JavaScript**
* Arrays 
* Objetos 
* Diferenciar entre tipos de datos primitivos y no primitivos
* Variables 
* Uso de condicionales 
* Uso de bucles/ciclos
* Funciones 
* Módulos de ECMAScript
* Uso de linter (ESLINT)
* Uso de identificadores descriptivos
* Diferenciar entre expresiones (expressions) y sentencias (statements)
* Callbacks
* Promesas

### **Control de Versiones (Git y GitHub)**
* Git: Instalación y configuración
* Git: Control de versiones con git
* Git: Integración de cambios entre ramas
* GitHub: Creación de cuenta y repos, configuración de llaves SSH
* GitHub: Despliegue con GitHub Pages
* GitHub: Colaboración en Github 


### **Centrado en el usuario**
* Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro

### **Diseño de producto**
* Crear prototipos de alta fidelidad que incluyan interacciones
* Seguir los principios básicos de diseño visual

### **Investigación**
* Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad

### **Firebase**
* Firebase Auth
* Firestore

# 6. Creadoras
* [Mariana Sanchez](https://github.com/Mariana-Sanchez21)
* [Andrea Roa](https://github.com/AndreaRoa)
* [Mikaella Muñoz](https://github.com/Mikamub)
