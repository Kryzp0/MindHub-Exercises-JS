///////////////////////////////////////////////////////////////////////////////////////////////////

// LOW

///////////////////////////////////////////////////////////////////////////////////////////////////

// CONTADOR EN REVERSA

// let numero = prompt("Ingrese un número entre el 1 y el 100")
// if (!isNaN(numero) && numero <= 100 && numero >= 1) {
//     numero = parseInt(numero)
//     for (let index = numero; index >= 0; index--) {
//         console.log(index);

//     }
// } else{
//     alert("Introduzca un valor válido")
// }

// MULTIPLICACIONES

// let numero

// do {
//     numero=prompt("Ingrese un número del 1 al 10")
//     if (numero == null) {
//         alert("Operacion cancelada")
//         break;
//     }
// } while (isNaN(numero) || numero<1 || numero>10);

// if (numero!==null) {
//     numero = parseInt(numero)
//     for (let index = 1; index <= 10; index++) {
//         let resultado = numero*index
//         console.log( index + "x" + numero + "=" + resultado)
//     }
// }

// SUMAS WHILE

// let suma = 0
// let numero = 1
// let numeros = []

// while (!isNaN(numero) && numero !== 0) {
//     numero = prompt("Ingrese un número para sumar o ingrese 0 para terminar")
//     if (numero == null) {
//         alert("Operacion cancelada")
//         break;
//     }
//     if (!isNaN(numero)) {
//         numero = parseInt(numero)
//         numeros.push(numero)
//     } else {
//         alert("Dije número")
//     }

// }

// if (numero!==null) {
//     for (let index = 0; index < numeros.length; index++) {
//         suma += numeros[index]
//     }
    
//     alert(suma)   
// }

// SUMAS DO WHILE

// let suma = 0
// let numero
// let numeros = []
// do {
//     numero = prompt("Ingrese un número para sumar o ingrese 0 para terminar")
//     if (numero == null) {
//         alert("Operacion cancelada")
//         break;
//     }
//     if (!isNaN(numero)) {
//         numero = parseInt(numero)
//         numeros.push(numero)
//     } else {
//         alert("Dije número")
//     }

// } while (!isNaN(numero) && numero !== 0);

// if (numero!==null) {
//     for (let index = 0; index < numeros.length; index++) {
//         suma += numeros[index]
//     }
    
//     alert(suma)  
// }

// FOR IN

// let persona = {name:"Javier",lastName:"García",origin:"Chile",studies:"ULS"}

// for (const key in persona) {
//     if (Object.hasOwnProperty.call(persona, key)) {
//         console.log(key)

//     }
// }

// for (const key in persona) {
//     if (Object.hasOwnProperty.call(persona, key)) {
//         console.log(persona[key])

//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// MEDIUM

///////////////////////////////////////////////////////////////////////////////////////////////////

// NUMERO SECRETO

// let numeroSecreto = suma 
// let numeroSecreto = 16 // variable para probar aqui mismo y no tener que subir
// let respuesta
// let intento = 0

// do {
//     respuesta = prompt("Ingrese su número aqui")
//     if (respuesta == null) {
//         alert("Operacion cancelada")
//         break;
//     }
//     if (!isNaN(respuesta)) {
//         respuesta = parseInt(respuesta)
//         if (respuesta < numeroSecreto) {
//             console.log("the number entered is less than the secret")

//         } else if (respuesta > numeroSecreto) {
//             console.log("the number entered is greater than the secret")
//         }
//     } else {
//         alert("Dije número")
//     }
//     intento++
// } while (respuesta !== numeroSecreto);
// if (respuesta==numeroSecreto) {
//     alert("You got it right! The secret number was " + respuesta + " and you made " + intento + " attempts")
// }

// DIVISORES

// let divisor
// let numero
// do {
//     numero = prompt("Ingrese un número para averiguar sus divisores")
//     if (numero == null) {
//         alert("Operacion cancelada")
//         break;
//     }
//     if (!isNaN(numero)) {
//         numero = parseInt(numero)
//     } else {
//         alert("Dije número")
//     }

// } while (isNaN(numero));

// for (let index = numero; index >= 0; index--) {
//     divisor = numero % index
//     if (divisor==0) {
//         console.log(index)

//     }
// }

// TIMBRE
// let numero
// let resultado=""

// do {
//         numero = prompt("Ingrese un número de repeticiones")
//         if (numero == null) {
//             alert("Operacion cancelada")
//             break;
//         }
//         if (!isNaN(numero)) {
//             numero = parseInt(numero)
//         } else {
//             alert("Dije número")
//         }

//     } while (isNaN(numero));

//     if (numero!==null) {
//         for (let index = 0; index < numero-1; index++) {
//             resultado += "Ding Dong, "
//         }
//         resultado += "Ding Dong"
//         console.log(resultado)
//     }

// FECHAS

// const dateLimit = "1997-8-3"

// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9", "1997-8-3"]


// for (const iterator of dates) {
//     if (iterator>=dateLimit) {
//         console.log(iterator)

//     }
// }

// COLORES

// function leerColores() {
//     let colores = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"]
//     for (const iterator of colores) {
//         console.log(iterator)
//     }
// }

// leerColores()

// NUMEROS DOBLES

// let numeros = [12, 34, 56, 78, 91];

// for (const iterator of numeros) {
//     doble = iterator*2
//     console.log("the number is " + iterator + " and its double is " + doble)
// }

// MUCHA GENTE

// let personas  = [{name:"María",lastName:"Lopez",integrante:"mother",edad:40},{name:"Juan",lastName:"Perez",integrante:"father",edad:38},{name:"Romina",lastName:"Perez",integrante:"daughter",edad:13},{name:"Tomás",lastName:"Perez",integrante:"son",edad:10}]

// function presentacion() {
//     for (const iterator of personas) {
//         console.log("Hello, I am " + iterator.name + iterator.lastName + " ("+ iterator.integrante + ") and I am "+ iterator.edad + " years old.")
//     }

// }

// presentacion()

///////////////////////////////////////////////////////////////////////////////////////////////////

// HIGH
///////////////////////////////////////////////////////////////////////////////////////////////////

// SUMA IMPARES Y PARES

// function pedirNumeros() {
//     let numerosImpares = []
//     let numerosPares = []
//     let numero
//     let esPar
//     do {
//         numero = prompt("Ingrese un número para sumar o ingrese 0 para terminar")
//         if (!isNaN(numero)) {
//             numero = parseInt(numero)
//             esPar = numero % 2
//             if (numero !== 0) {
//                 if (esPar == 0) {
//                     numerosPares.push(numero)
//                 } else {
//                     numerosImpares.push(numero)
//                 }
//             }
//         } else {
//             alert("Dije número")
//         }
//     } while (!isNaN(numero) && numero !== 0);
//     if (numerosPares > 0 || numerosImpares > 0) {
//         console.log("Even number: " + numerosPares.length)
//         console.log("Even number: " + numerosImpares.length)
//         console.log(numerosPares)
//         console.log(numerosImpares)
//     }
// }

// pedirNumeros()

// NUMERO MAYOR

// function buscarMayor() {
//     let numero
//     let numeros = []
//     do {
//         numero = prompt("Ingrese un número para sumar o ingrese 0 para terminar")
//         if (numero == null) {
//             alert("Operacion cancelada")
//             break
//         } else if (!isNaN(numero)) {
//             numero = parseInt(numero)
//             if (numero !== 0) {
//                 numeros.push(numero)
//             }
//         } else {
//             alert("Dije número")
//         }

//     } while (!isNaN(numero) && numero !== 0);
//     if (numeros.length > 0) {
//         console.log(numeros)
//         console.log(Math.max(...numeros)) //... para descomponer el array en elementos individuales
//     }
// }

// buscarMayor()









