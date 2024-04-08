let convert1 = document.getElementById("convert1")
let convert2 = document.getElementById("convert2")
let delete1 = document.getElementById("delete1")
let delete2 = document.getElementById("delete2")
let inputLocal = document.getElementById("inputLocal")
let inputDolares = document.getElementById("inputdolares")
let outputLocal = document.getElementById("outputLocal")
let outputDolares = document.getElementById("outputDolares")


let localADolares = numero => numero / 500
let dolaresALocal = numero => numero * 500

let borrarInputs = (input1, input2) => {
    input1.value = 0
    input2.value = 0
}

inputLocal.addEventListener("click", (e) => e.target.value = '')
inputDolares.addEventListener("click", (e) => e.target.value = '')

convert1.addEventListener("click", () => outputDolares.value = localADolares(inputLocal.value))
convert2.addEventListener("click", () => outputLocal.value = dolaresALocal(inputDolares.value))

delete1.addEventListener("click", () => borrarInputs(inputLocal, outputDolares))
delete2.addEventListener("click", () => borrarInputs(inputDolares, outputLocal))