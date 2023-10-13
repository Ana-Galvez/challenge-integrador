const form_login = document.querySelector("#main__login__form")
const mail = document.querySelector("#mail")
const pass = document.querySelector("#contrasena")
let pruebaMail = true
let pruebaPass = true
mail.onblur = function () {

    let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    let valor = document.querySelector("#mail").value

    if (valor === null || valor === '') {
        alert('correo con campo vacio')
       
    } else {
        if (!(expReg.test(valor))) {
            alert('correo no valido')
           
        }
        else {
            pruebaMail = false
        }
    }

}

pass.onblur = function () {

    let valor = document.querySelector("#contrasena").value

    if (valor === null || valor === '') {
        alert('contraseña con campo vacio')
    }
    else {
        pruebaPass = false
    }
}


    form_login.addEventListener('submit', e => {

        if (pruebaMail || pruebaPass) {
            e.preventDefault()
        }

    })
