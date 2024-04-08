

// 1 //

let titulo = document.getElementById('title')

// 2 //

let tituloPrincipal = "Frutas"
titulo.innerText = tituloPrincipal

// 3 //

let cambioColor = document.getElementsByClassName('naranja')

console.log([cambioColor])

for (const iterator of cambioColor) {

    iterator.style.backgroundColor = 'orange'
    console.log(iterator)

}

// 4 //

let footer = document.querySelector('p')

console.log(footer)

footer.innerText += ' Chris Vega - Cohort 54'

// 5 //

let contenedor = document.getElementById('contenedor')

// 6-7 //

function crearCarta(objeto) {
    return `<div class="card">
        <h2>${objeto.nombre}</h2>
        <img src="${objeto.foto}" alt="${objeto.nombre}">
        <p>${objeto.descripcion}</p>
    </div>`
}

// 8 //

for (const iterator of frutas) {
    contenedor.innerHTML += crearCarta(iterator)
    
}

// 9 //

let contenedorLista = document.getElementById('lista')

let nuevoH1 = document.createElement('h1')

nuevoH1.innerText = 'Frutas Dulces'

contenedorLista.appendChild(nuevoH1)

// 10 //

let lista = document.createElement('ul')
let frutasDulces = ''

function crearLista(objeto) {
    for (const iterator of objeto) {
        if (iterator.esDulce) {
            frutasDulces += `<li>${iterator.nombre}</li>` 
        }
        
    }
    return frutasDulces
}

// 11 //

lista.innerHTML = crearLista(frutas)
contenedorLista.appendChild(lista)
