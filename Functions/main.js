///////////////////////////////////////////////////////////////////////////////////////////////////

// LOW

///////////////////////////////////////////////////////////////////////////////////////////////////

// let num1 = 100
// let num2 = 20

// let add = function (param1, param2) {

//     let sum = param1 * param2
//     return sum

// }

// let resultado = add(num1, num2);
// console.log(resultado)

///////////////////////////////////////////////////////////////////////////////////////////////////

// MEDIUM

///////////////////////////////////////////////////////////////////////////////////////////////////

// SALUDO

// function greet(nombre) {
//     console.log("Hola, como va tu dia " + nombre + "?")

// }

// greet("Chris");

// MULIPLICACION

// let multiplicacion = function(num1,num2) {
//     let multiplicacion = num1 * num2
//     return multiplicacion
// }

// resultado = multiplicacion(5,6)
// console.log(resultado)

// AREA

// let base = 10
// let height = 20

// function area(x,y) {
//     let area = (x * y)/2
//     return area
// }

// let resultado = area(base,height)
// console.log("The triangle area is = " + resultado)

// PERIMETRO

// let lado1 = 10
// let lado2 = 20
// let base = 30

// function perimetro(a, b, c) {
//     let perimetro = a + b + c
//     return perimetro
// }

// let resultado = perimetro(lado1,lado2,base)
// console.log("The triangle perimeter is = " + resultado)

// COMPRAS

// let precio = 100
// let cantidad = 20

// function descuento(precio, cantidad) {
//     let descuento
//     if ( cantidad<= 10 && cantidad>= 1) {
//         descuento = precio - (precio * 0.1)
//     } else if (cantidad >= 20) {
//         descuento = precio - (precio * 0.2)
//     } else {
//         alert("No estas comprando nada")
//     }
//     return descuento
// }

// let valorTotal = descuento(precio,cantidad)
// console.log("El valor final del producto es = " + valorTotal)

// SER UN ADULTO

// let edad=1000

// function isAnAdult(edad) {
//     if (edad>=18) {
//         console.log("You are an adult")

//     } else if (edad<18 && edad>=0) {
//         console.log("You are not an adult")

//     } else {
//         console.log("Crazy Hamburger")

//     }

// }

// isAnAdult(edad)

///////////////////////////////////////////////////////////////////////////////////////////////////

// HIGH

///////////////////////////////////////////////////////////////////////////////////////////////////

// IMPUESTOS

// let income = 40000

// function impuestos(income) {
//     let impuesto
//     if (income<=10000) {
//         impuesto = income*0.1

//     } else if (income>10000 && income<=20000) {
//         impuesto = income*0.15

//     } else if (income>20000) {
//         impuesto = income*0.2

//     }else{
//         alert("Y si mejor te doy plata?")
//     }
//     console.log(impuesto)
//     return impuesto
// }
// impuestos(income)

// DIAS LABORABLES

// let dia = 3

// function filtroDia(dia) {
//     switch (dia) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             console.log("It is a business day.")
//             break;
//         case 6:
//         case 7:
//             console.log("It's the weekend.")
//             break;
//         default:
//             console.log("Este dia no existe")
//             break;
//     }
// }

// filtroDia(dia)

// INFORMACION PERSONAL

// function pedirDatos() {
//     let persona = {}
//     let nombre = prompt("Ingrese aqui su nombre")
//     if (nombre == "") {
//         console.error("The name cannot be empty")
//     } else if (nombre == null) {
//         console.error("Operation canceled")
//     } else {
//         persona.nombre = nombre
//         let apellido = prompt("Ingrese aqui su apellido")
//         if (apellido == "") {
//             console.error("The last name cannot be empty")
//         } else if (apellido == null) {
//             console.error("Operation canceled")
//         } else {
//             persona.apellido = apellido
//             let edad = prompt("Ingrese aqui su edad")
//             if (edad == "") {
//                 console.error("The age cannot be empty")
//             } else if (edad == null) {
//                 console.error("Operation canceled")
//             } else if (isNaN(edad)) {
//                 console.error("Por qué letras?")
//             } else {
//                 edadNumerica = parseInt(edad)
//                 persona.edad = edadNumerica
//             }
//         }
//     }
//     return persona
// }

// let datosPersona = pedirDatos()
// console.log(datosPersona)

// 3 FUNCIONES

// function saludo() {
//     let nombre = prompt("Ingrese aquí su nombre")
//     if (nombre == "") {
//         alert("No debe estar vacío")
//     } else if (nombre == null) {
//         alert("Operacion cancelada")
//     } else {
//         alert("Hello, my name is " + nombre)
//     }
//     return nombre
// }

// function calcularEdad() {
//     let edad
//     let num1 = prompt("Ingrese año de nacimiento")
//     if (num1 == "") {
//         alert("this box must not be empty")
//     } else if (num1 == null) {
//         alert("Operation canceled")
//     } else if (isNaN(num1)) {
//         alert("Por qué letras?")
//     } else {
//         let num2 = prompt("Ingrese el año actual")
//         if (num2 == "") {
//             alert("this box must not be empty")
//         } else if (num2 == null) {
//             alert("Operation canceled")
//         } else if (isNaN(num2)) {
//             alert("Por qué letras?")
//         } else {
//             edad = num2 - num1
//             alert("im " + edad + " years old")
//         }
//     }
//     return edad
// }

// function presentacion() {
//     let nombre = saludo()
//     let edad = calcularEdad()
//     alert("Hello, my name is " + nombre + " and im " + edad + " years old")
// }

// presentacion()

