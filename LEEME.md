# Página web personal
Se ha pasado el [validador html](https://validator.w3.org/nu/) para index.html, aficciones.html, intereses.html, proyectos.html y Calcetines.html
Se ha pasado el [validador CSS](https://jigsaw.w3.org/css-validator/) para style/style.css y style/reset.css

## Arquitecura
Página web estática con 5 páginas. Se ha usado computación para generar un nav consistente en todas las páginas de navegación, 
tengo un json con el mapa de navegación y luego todas las pagínas de la web lo cargan y en base a la url se carga de una forma 
u otra para que no haya links a la propia página

### Estructura de carpetas
 - \*            : Directorio padre donde se encuentra el html de la aplicación web
   - js          : Directorio donde se encuentra el código fuente de la aplicación
   - styles      : Directorio donde se encuentran las hojas de estilo de la aplicación web
   - media       : Directorio donde se encuentran videos, imagenes y audios

### Tecnologías utilizadas:
 - HTML
 - CSS
 - JavaScript
	- JQuery para manipular el DOM con el mapa de navegación


## Importante
Al pasar el validador de CSS en styles/style.css, me salta redificinición de max-width al redefinirlo de forma distinta
en las media queries para hacer el sitio responsivo, también me dice que hay redefinción de grid-row-start, grid-row-end, grid-row-start y grid-row-end
en la lina 0, se refiere también a el uso de grid-row dentro de media queries, la única forma de hacer que no me salten las advertencias es
quitando las media queries y no voy a hacer eso.