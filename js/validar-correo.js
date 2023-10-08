
let mail = document.querySelector("#mail")
let correcto

mail.onblur = function validar() {
    
    let valor = mail.value
    let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    if (expReg.test(valor)) {
        alert("correo valido")
        correcto = true
    }
    else {
        alert("correo no valido")
        correcto = false
    }

}

/* expresion regular para validar contraseña 
    ^ (?= (?:.*\\d) {2}) (?=.* [A-Z]) (?=.* [a-z]) (?!. {0,4} (.) (?:.*\\1) {3})\\S {8,15}$


*/ 

const form = document.querySelector("#main__register__form")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
/* const correo = ....  ver esta parte*/
const pass = document.querySelector("#contrasena")
const pass2 = document.querySelector("#contrasena")

form.addEventListener('submit', e => {
    e.preventDefault();

    validarInputs();

});

nombre.onblur = function pruebaNombre() {


    const nombreValor = nombre.value.trim();
      
    const pass2Valor = pass2.value.trim();

    if  (nombreValor === '') {
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
    
    if (expReg.test(passValor)){
        alert('cumple')
    }else{
        alert('no cumple')
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