let divInteractivo = document.getElementById("divInteractivo")
let inputTexto = document.getElementById("textoDiv")
let botonReset = document.getElementById("boton1")


let imprimirTexto = (input,contenedor) =>{
    input.addEventListener("input", (e) =>{
        let texto = e.target.value
        contenedor.innerHTML = `<p>${texto}</p>`;
    })
}
imprimirTexto(inputTexto,divInteractivo)

let resetearTexto = (input,contenedor) =>{
    contenedor.innerHTML = ''
    input.value = ''
}

botonReset.addEventListener("click", () => resetearTexto(inputTexto,divInteractivo))
