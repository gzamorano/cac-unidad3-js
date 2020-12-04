const btnsubmit = document.getElementById("submit")

function verificarCampos(){
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value


    if(usuario, password !== ""){

        if(usuario.match("@")){
            return true
        } else{
            alert("Falta @ en el campo usuario")
            return false
        }
        
    } else {
        alert("Campos requeridos vacios")
        return false
    }

}


btnsubmit.addEventListener("click", e => {
    if (verificarCampos()){
        alert("Form enviado correctamente")
    } else {
        e.preventDefault()
    }
})