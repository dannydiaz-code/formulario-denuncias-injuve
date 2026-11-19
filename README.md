# Formulario institucional de recepción de denuncias – INJUVE

Esta carpeta contiene la primera versión visual del formulario, preparada para publicarse como sitio estático en GitHub Pages.

## Archivos
- `index.html`: estructura del formulario.
- `assets/css/styles.css`: diseño adaptable con colores institucionales.
- `assets/js/app.js`: barra de progreso y validación básica.

## Publicación en GitHub Pages
1. Crea un repositorio llamado `formulario-denuncias-injuve`.
2. Sube todos los archivos y carpetas conservando su estructura.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. GitHub generará una URL pública para el formulario.

## IMPORTANTE: envío y protección de información
Esta versión es únicamente la interfaz visual. No envía, almacena ni transmite respuestas.
Por tratarse de denuncias, puede contener datos personales y señalamientos delicados. Antes de habilitar el envío:
- INJUVE debe aprobar el canal de recepción y el responsable autorizado.
- Se debe implementar un backend seguro (por ejemplo, API institucional) con HTTPS.
- Se deben definir acceso restringido, retención, respaldos y manejo de incidentes.
- No se deben incluir contraseñas, tokens privados ni credenciales en GitHub Pages.
- No se recomienda enviar el contenido completo de denuncias mediante servicios de correo de terceros sin evaluación y autorización institucional.

La pregunta 4 y las preguntas 6 y 7 son opcionales en esta versión; las demás son obligatorias. Confirmar con el área responsable si esta obligatoriedad refleja el procedimiento oficial.
