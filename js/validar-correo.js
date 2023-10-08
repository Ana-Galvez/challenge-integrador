
let mail = document.querySelector("#mail")


mail.onblur = function validar() {
    
    let valor = mail.value
    let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    if (expReg.test(valor)) {
        alert("correo valido")
    }
    else {
        alert("correo no valido")
    }

}