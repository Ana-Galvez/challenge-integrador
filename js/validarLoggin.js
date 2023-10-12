const form_login = document.querySelector("#main__login__form")
const mail = document.querySelector("#mail")
const pass = document.querySelector("#constrasena")
const btn = document.querySelector('#button__login')


form_login.addEventListener('submit', e => {
  
    mail.onblur = function () {
       
        let expReg = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
        let valor = document.querySelector("#mail").value

        if (valor === null || valor === '') {
            alert('correo con campo vacio')
            e.preventDefault()
        }
        if (!(expReg.test(valor))) {
            alert('correo no valido')
            e.preventDefault()
        }
    }

    pass.onblur = function () {
       
        let valor = document.querySelector("#constrasena").value
       
        if (valor === null || valor === '') {
            alert('constraseña con campo vacio')
            e.preventDefault()
        }
    }

})