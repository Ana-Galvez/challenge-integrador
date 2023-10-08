let mail = document.querySelector("#mail")
let pass = document.querySelector("#contrasena")
const form_login = document.querySelector("#main__login__form")

form_login.addEventListener('submit', e => {

    e.preventDefault();

    mail.onblur = function () {
        let valor = mail.value
        let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
        if (valor === null || valor === '') {
            alert('correo con campo vacio')
        } else {
            if (expReg.test(valor)) {
                alert("correo valido")
            }
            else {
                alert("correo no valido")
            }
        }
    }
    pass.onblur = function () {
        let valor = pass.value
        if (valor === null || valor === '') {
            alert('pass con campo vacio')
        }
    }
});






/* expresion regular para validar contraseña 
    ^ (?= (?:.*\\d) {2}) (?=.* [A-Z]) (?=.* [a-z]) (?!. {0,4} (.) (?:.*\\1) {3})\\S {8,15}$




const form_register = document.querySelector("#main__register__form")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")

const pass = document.querySelector("#contrasena")
const pass2 = document.querySelector("#contrasena")

form_register.addEventListener('submit', function (e) {
    e.preventDefault();
    validarInputsRegister();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validarInputsRegister = () => {
    nombre.onblur = function pruebaNombre() {
        const nombreValor = nombre.value.trim();

        if (nombreValor === '') {
            alert("nombre vacio")
        }
    }

    apellido.onblur = function pruebaApellido() {
        const apellidoValor = apellido.value.trim();
        if (apellidoValor === '') {
            alert('apellido vacio')
        }


    }

    pass.onblur = function pruebaPass() {
        const passValor = pass.value.trim();
        let expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

        if (expReg.test(passValor)) {
            alert('cumple')
        } else {
            alert('no cumple')
        }
    }
}
/*
COMPROBACION DE CONTRASEñAS
pass2.onblur = function pruebaPass2 () {
    const passValor = pass.value.trim();
    const passValor2 = pass2.value.trim();

    if (passValor !== passValor2) 
    {
        alert('no son iguales')
    }
}
*/