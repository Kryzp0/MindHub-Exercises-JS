
let generarDiv = (texto, contenedor, colorDiv, fuenteTexto) => {
    let contenedorObtenido = document.getElementById(contenedor)
    let nuevoDiv = document.createElement("div")
    nuevoDiv.innerText = texto
    nuevoDiv.innerHTML = `<p class="${fuenteTexto}">${texto}</p><span class="cursor-pointer ml-auto pr-1""> X </span>`
    nuevoDiv.className = `overflow-x-auto flex w-[300px] h-[300px] bg-[${colorDiv}] border-[#cee6ca] border-2 rounded-lg`
    nuevoDiv.querySelector("span").addEventListener("click", () => {
        contenedorObtenido.removeChild(nuevoDiv);
    });
    contenedorObtenido.appendChild(nuevoDiv);
}

let nuevoEvento = (inputBoton, inputTexto, inputColor, contenedor) => {
    let textoDiv = document.getElementById(inputTexto)
    let botonGenDiv = document.getElementById(inputBoton)
    let nuevoColor = document.getElementById(inputColor)
    let inputFuente = [...document.querySelectorAll('input[type="radio"]')]
    let estiloFuente = 'non-italic'
    inputFuente.forEach(input => input.addEventListener("change", () => estiloFuente = input.value));
    botonGenDiv.addEventListener("click", (event) => {
        event.preventDefault();
        generarDiv(textoDiv.value, contenedor, nuevoColor.value, estiloFuente)
        limipiarInputs(textoDiv, nuevoColor, inputFuente[0])
    })
}

let limipiarInputs = (input1, input2, input3) => {
    input1.value = ''
    input2.value = '#000000'
    input3.checked = true
}

nuevoEvento("botonGenDiv", "textoDiv", "botonColor", "contenedorNuevoDiv")