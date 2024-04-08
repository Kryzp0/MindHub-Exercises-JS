// 1 //
let colores = ["gray","blue","red"]
let divInteractivo = document.getElementById("divColores")
let botonCambioColor = document.getElementById("boton1")
let index = 0
let color

let cambiarColor = (div,arrayColores) =>{
    let nuevoColor = arrayColores[index]
    if (!color) {
        color = document.createElement("h1")
        color.className = "text-6xl"
        div.appendChild(color)
    }
    color.innerText = `${nuevoColor}`
    div.className = `bg-${nuevoColor}-200 h-5/6 w-11/12 border-2 border-[#ffd5a0] rounded-lg flex flex-col justify-evenly items-center`
}
divInteractivo.innerText

let evento = input => {
    input.addEventListener("click", () => {
        index++
        if (index>=colores.length) {
            index = 0
        }
        cambiarColor(divInteractivo,colores)
    })
}

evento(botonCambioColor)
cambiarColor(divInteractivo,colores)
