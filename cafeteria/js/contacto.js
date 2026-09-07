const nombre = document.getElementById('name')
const correo = document.getElementById('email')
const formulario = document.getElementById('formulario')
const warningNombre = document.getElementById('valnombre')
const warningCorreo = document.getElementById('valcorreo')
const validarCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validarFormulario(){
    let datosValidos = true

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        warningNombre.textContent = "El nombre no puede contener números ni símbolos"
        nombre.value = ""
        datosValidos = false
    }else{
        warningNombre.textContent = ""
    }

    if (!validarCorreo.test(correo.value)){
        warningCorreo.textContent = "El correo debe contener un @ y un dominio (.com)"
        datosValidos = false
    }else{
        warningCorreo.textContent = ""
    }

    return datosValidos
}

nombre.addEventListener('input', validarFormulario)
correo.addEventListener('input', validarFormulario)

formulario.addEventListener('submit', (event) => {
    const datosValidos = validarFormulario()

    if (!datosValidos){
        event.preventDefault()
    }
})

