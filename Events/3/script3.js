let inputEstatura = document.getElementById("inputEstatura")
let inputPeso = document.getElementById("inputPeso")
let contenedorResultado = document.getElementById("inputResultado")
let botonCalcular = document.getElementById("boton1")

let calcularIMC = (altura, peso) => peso/((altura/100)**2)

let mostrarResultado = (contenedor,resultado) =>{
    contenedor.value=resultado
}

botonCalcular.addEventListener("click", ()=>{mostrarResultado(contenedorResultado,calcularIMC(inputEstatura.value,inputPeso.value).toFixed(1))})