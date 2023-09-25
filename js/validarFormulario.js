const datos = {
    nombre:'',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', LeerTexto)  

email.addEventListener('input', LeerTexto)   

mensaje.addEventListener('input', LeerTexto)  

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    // Validar el formulario
    const{ nombre, email, mensaje} = datos;  // Extraer los valores y crear las variables en un solo paso

    if(nombre === '' || email === '' || mensaje === ''){
        MostrarAlerta('Todos Los Campos Son Obligatorios', 'error')

        return; // Corta la Ejcucion del Codigo
    }

    MostrarAlerta('Enviado Correctamente');
})


function LeerTexto(e) {

    datos[e.target.id] = e.target.value;
}

function MostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

 // Mostrar error en pantalla
/*function MostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // Desaparesca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

//mostrar alerta de envio correctamente
function MostrarMensaje(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);

    // Desaparesca despues de 5 segundos
    setTimeout(() => {
        correcto.remove();
    }, 5000);
}*/
