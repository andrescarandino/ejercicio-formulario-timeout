// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD


const formulario = document.querySelector('form');
const btnInicioSesion = document.querySelector('.login-btn');
const ingresando = document.querySelector('#loader');
const inputEmail = document.querySelector('#email-input');
const inputPassword = document.querySelector('#password-input')
const containerError = document.querySelector('#error-container');
const h1 = document.querySelector('h1');


// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

btnInicioSesion.setAttribute('type', 'submit');

formulario.addEventListener('submit', function(e){
  containerError.innerText = '';
  containerError.classList.add('hidden');
  
  e.preventDefault();
  ingresando.classList.remove('hidden');
  setTimeout(iniciarSesion, 3000);
  

})


// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."


const iniciarSesion = () => {

  console.log('Iniciar sesión');
  ingresando.classList.add('hidden');
  validarPassword(inputPassword.value);
  ValidarEmail(inputEmail.value);
  comprobarDatos(inputEmail.value, inputPassword.value);

}


// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"


const ValidarEmail = (email) => {
  const regEx = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i; 
    if (regEx.test(email)){
      return email;
    }else{
      renderizarErrores();
    }
    
}

const validarPassword = (password) => {

  if(  password.length >= 6  && !password.includes(' ') ){
    return password;
  }else {
    renderizarErrores();
  }
}

const renderizarErrores = () => {

  containerError.innerText = "Alguno de los datos ingresados son incorrectos";
  containerError.classList.remove('hidden');

}

const comprobarDatos = (email, password) =>{ 
  let contador = 0;
  baseDeDatos.usuarios.forEach(usuario => {
    
    
    if ( usuario.email == email && usuario.password == password){
      contador++;
    }
  });
  
  if (contador > 0 ){
      formulario.classList.add('hidden');
      h1.innerText = "Bienvenido al sitio 😀 "
  }else{
    renderizarErrores();
  }

}

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.


/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
