// 1 //

console.log(beers);
let printMessage = message => console.log(message)

// 2 //

let createMultplication = (number1, number2) => number1 * number2

// 3 //

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let array2 = array.map((a) => createMultplication(a, a))

console.log(array2);

// 4 //

//Ordena con toSorted desde mayor a menor abv y con slice retorna 10 elementos desde la posicion 0
let masAlcohol = array => array.toSorted((a, b) => b.abv - a.abv).slice(0, 10)

console.log(masAlcohol(beers));

// 5 //
let menosAmarga = array => array.toSorted((a, b) => a.ibu - b.ibu).slice(0, 10)

console.log(menosAmarga(beers));

// 6 //

let buscarCerveza = (array,nombre) => {
    nombre = nombre.toLowerCase() //Normaliza el valor entregado a minusculas
    let cerveza = array.find((a) => a.name.toLowerCase() == nombre); //Busca el primer elemento con la condición dada y guarda el resultado
    if (cerveza) {
        console.log(cerveza);
        return cerveza
    }
    else {
        console.log(`No beer with the name ${nombre}.`);
    }
}
buscarCerveza(beers,"buzz")

// 7 //

let buscarCervezaIbu = (array,ibu) => {
    let cervezaIbu = array.find((a) => a.ibu == ibu);
    if (cervezaIbu) {
        console.log(cervezaIbu);
        return cervezaIbu
    }
    else {
        console.log(`There is no beer with an ibu of ${ibu}.`);
    }
}
buscarCervezaIbu(beers,60)

// 8 //

let buscarIndexCerveza = (array,nombre) => {
    nombre = nombre.toLowerCase()
    let cerveza = array.findIndex((a) => a.name.toLowerCase() == nombre); //Busca el index del primer elemento que cumpla la condición y guarda el resultado
    if (cerveza !== -1) { //Cuando el elemento no cumple la condición, se devuelde un -1, por lo que se busca un valor dinstinto a -1
        console.log(`The beer is in the position ${cerveza}`);
        return cerveza
    }
    else {
        console.log(`No beer with the name ${nombre}.`);
        return -1 //Por buenas practicas se retorna un -1 para indicar que no se encontró el elmento buscado
    }
}
buscarIndexCerveza(beers,"trashy blonde")

// 9 //

//Crea un nuevo array con los elementos que posean un abv menor al indicado y se utiliza map para que el nuevo array solo tenga las propiedades, name, abv e ibu
let filtrarCervezas = (array, abv) => array.filter(a => a.abv < abv).map(({name,abv,ibu})=>({name,abv,ibu}))

console.log(filtrarCervezas(beers, 5));

// 10 //

let ordenarCervezas = (array, propiedad, booleano) => {
    if (booleano) {
        //Obtener un nuevo array con 10 valores ordenados por la propiedad indicada de forma ascendente si el tercer valor es true o descendente si es false
        let ordenAscendente = array.toSorted((a, b) => a[propiedad] - b[propiedad]).slice(0, 10)
        console.log(ordenAscendente);
        return ordenAscendente
    } else {
        let ordenDescendente = array.toSorted((a, b) => b[propiedad] - a[propiedad]).slice(0, 10)
        console.log(ordenDescendente);
        return ordenDescendente
    }
}

ordenarCervezas(beers, "ibu", true)

// 11 //

//Se crea una fila con las propiedades del elemento iterado
let crearFilaTabla = array => `<tr class="border-2 border-black">
<td class="border-2 border-black p-2">${array.name}</td>
<td class="border-2 border-black p-2">${array.abv}</td>
<td class="border-2 border-black p-2">${array.ibu}</td>
</tr>`


let renderizarTabla = (array, contenedorId) => {
    let contenedor = document.getElementById(contenedorId)//Se obtiene el contenedor requerido
    let tabla = document.createElement("table")
    tabla.className = "text-center"
    //Se crea tabla con el siguiente encabezado
    let encabezado = `<thead class="border-2 border-black bg-green-800">
    <tr>
        <th class="border-2 border-black p-2">Name</th>
        <th class="border-2 border-black p-2">ABV</th>
        <th class="border-2 border-black p-2">IBU</th>
    </tr>
</thead>`
    let body = document.createElement("tbody")//Se crea cuerpo de la tabla
    body.className = "bg-green-500"
    let filasTabla = array.map(crearFilaTabla).reduce((a, b) => a + b);//Se guarda nuevo array con el retorno de crearFilaTabla en cada iteración y se suma cada elemento del nuevo array
    tabla.innerHTML = encabezado //Se añade codigo html de encabezado a tabla
    tabla.appendChild(body)
    body.innerHTML = filasTabla //Se añade codigo html de array sumado en filasTabla a body
    contenedor.appendChild(tabla)

}

renderizarTabla(beers, "contenedor")


