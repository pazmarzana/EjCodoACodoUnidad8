function validarDatos(form){

    if (validarUsuario(form))
    {
        if (validarClave(form)){
            form.submit();
        }
    }
}

function validarUsuario(form) {
const campo = form.usuario;
    if (campo.value == "" ){
        alert("Debe ingresar un usuario");
        campo.focus();
        return(false);
    }else{
        if (campo.value.indexOf('@',0) == -1){
            alert("El usuario debe ser una direccion de email");
            campo.focus();
            return(false);
        }else{
            return(true);
        }
    }
}

function validarClave(form) {
    const campo = form.clave;
    if (campo.value == "" ){
        alert("Debe ingresar una clave");
        campo.focus();
        return(false);
    }else{
        return(true);
    }
}

document.getElementById("btnSubmit").addEventListener("click", function(event){
    event.preventDefault();
    const form=document.getElementById("form");
    if(validarDatos(form)){
        form.submit();
    };
});