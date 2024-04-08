///////////////////////////////////////////////////////////////////////////////////////////////////

// LOW

///////////////////////////////////////////////////////////////////////////////////////////////////

// let num1 = 20
// let num2 = 10
// let date1 = "2023-9-2"
// let date2 = "2024-7-5"
// let number1 = 7
// let number2 = 9
// let number3 = 9

// if (num1 > num2) {
//     console.log(num1)
// }
// else if (num1 < num2) {
//     console.log(num2)
// }
// else if (num1 == num2) {
//     console.log("The numbers are equal")
// }
// else {
//     console.log("The numbers are different")
// }

// if (date1 > date2) {
//     console.log("The date " + date1 + " is greater than " + date2)
// }
// else if (date1 == date2) {
//     console.log("The dates are the same")
// }
// else {
//     console.log("The date " + date2 + " is greater than " + date1)
// }


// if (number1 >= number2 && number1 >= number3) {
//     console.log("The number " + number1 + " is the largest”")
// } else if (number2 >= number1 && number2 >= number3) {
//     console.log("The number " + number2 + " is the largest”")

// } else {
//     console.log("The number " + number3 + " is the largest”")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// MEDIUM

///////////////////////////////////////////////////////////////////////////////////////////////////

// COLOR
// let color = prompt("ingrese uno de los siguientes colores: red, blue or green")

// switch (color) {
//     case "red":
//         console.log("The color of passion.")
//         break;

//     case "blue":
//         console.log("The color of the sea.")
//         break;

//     case "green":
//         console.log("The color of nature.")
//         break;

//     default: 
//     console.log("ASI NOOOOOO!")
//         break;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// NUMEROS
// let introNumero1 = prompt("ingrese un numero del 1 al 100")
// let introNumero2 = prompt("ingrese un segundo numero del 1 al 100")
// let numero1 = parseInt(introNumero1)
// let numero2 = parseInt(introNumero2)
// let suma = numero1+numero2 
// let resta = numero1-numero2
// let multiplicacion = numero1*numero2
// let division = numero1/numero2

// if (numero1>=0 && numero1<=100 && numero2>=0 && numero2<=100) {
//     let operacion = prompt("ingrese una operación (adicion, subtraccion, multiplicacion, division")
//         switch (operacion) {
//             case "adicion":
//                 console.log("La adicion de " + numero1 + " y " + numero2 + " es = " + suma)
//                 break;

//             case "subtraccion":
//                 console.log("La subtraccion de " + numero1 + " y " + numero2 + " es = " + resta)
//                 break;

//             case "multiplicacion":
//                 console.log("La multiplicacion de " + numero1 + " y " + numero2 + " es = " + multiplicacion)
//                 break;

//             case "division":
//                 console.log("La division de " + numero1 + " y " + numero2 + " es = " + division)
//                 break;

//             default:
//                 console.log("Silencio platita")
//                 break;
//             }
// } else {
//     console.log("Ingresó un número incorrecto")

// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// PERSONAS
// let persona1 = { "nombre": "María", "edad": 20, "altura": 180 }
// let persona2 = { "nombre": "Carlos", "edad": 20, "altura": 180 }

// if (persona1.edad > persona2.edad && persona1.altura > persona2.altura) {
//     console.log(persona1.nombre + " is taller and older than " + persona2.nombre)
// }
// else if (persona1.edad > persona2.edad && persona1.altura < persona2.altura) {
//     console.log(persona1.nombre + " is smaller and older than " + persona2.nombre)
// }
// else if (persona1.edad < persona2.edad && persona1.altura < persona2.altura) {
//     console.log(persona1.nombre + " is smaller and younger than " + persona2.nombre)
// }
// else if (persona1.edad < persona2.edad && persona1.altura > persona2.altura) {
//     console.log(persona1.nombre + " is taller and younger than " + persona2.nombre)
// }
// else if (persona1.edad == persona2.edad && persona1.altura > persona2.altura) {
//     console.log(persona1.nombre + " is taller but the same age than " + persona2.nombre)
// }
// else if (persona1.edad == persona2.edad && persona1.altura < persona2.altura) {
//     console.log(persona1.nombre + " is smaller but the same age than " + persona2.nombre)
// }
// else if (persona1.edad > persona2.edad && persona1.altura == persona2.altura) {
//     console.log(persona1.nombre + " is the same tall but older than " + persona2.nombre)
// }
// else if (persona1.edad < persona2.edad && persona1.altura == persona2.altura) {
//     console.log(persona1.nombre + " is the same tall but younger than " + persona2.nombre)
// }
// else {
//     console.log(persona1.nombre + " is the same height and age than " + persona2.nombre)
// }

// console.log(persona1)
// console.log(persona2)

///////////////////////////////////////////////////////////////////////////////////////////////////

// PERMISO DE CONDUCIR
// let permisoNombre = prompt("Ingrese aqui su nombre")
// let permisoEdad = prompt("Ingrese aqui su edad")
// let permisoAltura= prompt("Ingrese aqui su altura") 
// let permisoVision = prompt("Ingrese aqui su vision") 
// let cursante= {"nombre":permisoNombre,"edad":permisoEdad,"altura":permisoAltura,"vision":permisoVision}

// console.log(cursante)
// if (cursante.edad>=18 && cursante.altura>=110 && cursante.vision>=8) {
//     console.log("You are qualified to drive")

// } else {
//     console.log("You are not qualified to drive")
// }

// CLASIFICACION EDADES
// let clasificacionEdad = prompt("Ingrese aqui su edad")
// if (clasificacionEdad >= 0 && clasificacionEdad <= 12) {
//     alert("You are Infant");

// } else if (clasificacionEdad >= 13 && clasificacionEdad <= 18) {
//     alert("You are adolecent");

// } else if (clasificacionEdad >= 19 && clasificacionEdad <= 45) {
//     alert("You are older young");

// } else if (clasificacionEdad > 45) {
//     alert("You are elderly");

//     if (clasificacionEdad > 100) {
//         alert("Is he really that old?");
//     }

// }else{
//     alert("3l diavlo")

// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// MUKTIPLICACION
// let soloNumeros = prompt("Ingrese aqui un número del 1 al 3 como multiplicador")

// if (!isNaN(soloNumeros) && soloNumeros >= 1 && soloNumeros <= 3) {
//     let otroNumero = prompt("Ingrese aquí el número que desea multiplicar")
//     if (!isNaN(otroNumero)) {
//         let multiplicador = parseInt(soloNumeros)
//         let multiplicando = parseInt(otroNumero)
//         let resultado = multiplicando * multiplicador
//         switch (multiplicador) {
//             case 1:
//                 alert("The number entered is [" + resultado + "]")
//                 break;

//             case 2:
//                 alert("Twice the number entered is [" + resultado + "]")
//                 break;

//             default:
//                 alert("Three times the number entered is [" + resultado + "]")
//                 break;
//         }

//     } else {
//         alert("That value is not allowed")
//     }

// } else {
//     alert("That value is not allowed")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// HIGH

///////////////////////////////////////////////////////////////////////////////////////////////////

let nombrecito = prompt("Ingrese aqui su nombre con mayuscula al inicio")

if (nombrecito == "Chris") {
    alert("¡Bienvenido al recinto! Esperamos que disfrutes de tu estancia con nosotros.")

} else {
    let pass = prompt("Ingrese su pase VIP o Normal")
    if (pass == "VIP") {
        alert("¡Bienvenido al recinto! Esperamos que disfrutes de tu estancia con nosotros.")

    } else if (pass == "Normal") {
        let entrada = confirm("Tienes un ticket de entrada?")
        if (entrada) {
            let respuesta = confirm("Deseas usar el ticket?")
            if (respuesta) {
                alert("¡Bienvenido al recinto! Esperamos que disfrutes de tu estancia con nosotros.")

            } else {
                alert("Y PARA QUE ME HACES PREGUNTAR")
            }

        } else {
            let pregunta = confirm("Quieres comprar un ticker de entrada?")
            if (pregunta) {
                let dinero = prompt("Cuanto dinero tienes?")
                if (!isNaN(dinero)) {
                    if (dinero >= 1000) {
                        alert("¡Compra realizada con éxito!. ¡Bienvenido al recinto! Esperamos que disfrutes de tu estancia con nosotros.")
                    } else {
                        alert("Vamos agarrando una pala")
                    }
                } else {
                    alert("PERO NO ME PONGAS LETRAS CUANDO TE PIDO NUMEROS")
                }

            } else {
                alert("PAL LOBBY")
            }
        }
    } else {
        alert("Ese no me sirve")

    }
}






