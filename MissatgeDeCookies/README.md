
# Creación ventana de cookies

 1. Primero hacemos un div (en content.html) con una id para poder mas tarde interactuar con dicho div a través de js. Dicho div tendrá el contenido de la ventana de las cookies.   ![image](https://user-images.githubusercontent.com/73952835/162231331-77682710-081e-4c91-b29f-88a2f734a2d1.png)
  **Elementos del div:**
  Empezando por la id que es la que nos permitirá interactuar con js mas tarde, tenemos también la etiqueta a que es un link para ir a la pagina de política de cookies de lordsergio.online, el atributo target="_blank" es para que dicha pagina se abra en una pestaña nueva del navegador.
  Finalmente tenemos la etiqueta button que es básicamente un botón que con el atributo onclick cuando se acciona dicho botón se ejecuta una función de js que se explicara a continuación.
****
 2. Ahora vamos a crear la secuencia que seguirá la web para hacer funcional la ventana de cookies. La crearemos en scripts.js
![image](https://user-images.githubusercontent.com/73952835/162233951-c6b5ef4f-6525-4629-bc3f-58011af955e0.png)
**Elementos de la secuencia de código:**
Empezamos creando una variable llamada data que contendrá un objeto de tipos fecha de js, después creamos otra variable llamada storage que contendrá el local storage del navegador, ahora creamos la variable diaAnterior que guardara los datos del local storage.
A continuación creamos un if (condición) que si se cumple (para que se cumpla han de haber pasado 3 días o mas des de que se accionó el botón de la ventana de cookies o que no se haya accionado nunca), se mostrara la ventana de cookies para que el usuario la acepte, si no se cumple quiere decir que el usuario hace menos de 3 días que ha aceptado las cookies y por lo tanto no se mostrara la ventana de cookies.
**Función guardarDatos()**
Esta función esta hecha de tal manera que una vez accionas el botón de aceptar cookies se oculta dicha ventana y se guarda en el local storage el día actual, así cada vez que se actualiza la pagina y se repita la secuencia descrita anteriormente al haber guardado el día actual en el local storage no se mostrara la ventana hasta pasados 3 días.
***
## Progreso
 - [ ] Creación nueva rama
 - [ ] Implementación de la ventana de cookies en content.html
 - [ ] Creación de la sequencia de codigo js en scripts.js
 - [ ] Validar funcionamiento y corregir posibles errores
 - [ ] Hacer un merge a la rama principal
 - [ ] Que el pardo vea este README y me ponga un 9.99 y marque esta casilla :)
