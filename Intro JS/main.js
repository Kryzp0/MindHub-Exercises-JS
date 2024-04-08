let myName = "Chris"
let myLastName = "Vega"
let myAge = 25
let myPet = "Angelo"
let petAge = 4
let fullName = myName + " " + myLastName
let presentationText = myName + " " + myLastName + " " + myAge + " " + myPet + " " + petAge + " " + fullName
let sumAges = myAge + petAge
let subtractAges = myAge - petAge
let productAges = myAge * petAge
let divisionAges = myAge / petAge
let student = {"name":"Tao Pai Pai","age":308,"gender":"male","height":178,"weight":70,"allegiance":"Red Ribbon Army"}
let pet = {"name":"Calcifer","species":"demon","gender":"male","element":"fire","originalName":"Karushifā"}
let fruits = ["palta","damasco","coco","mango","pera","sandía"]
let entryAge = prompt("ingrese su edad aqui")
let numberAge = parseInt(entryAge)
let numbers = [1,2,3,4,5,6]
let family = [{"name":"Juan","age":40},{"name":"María","age":38},{"name":"Santiago","age":15},{"name":"Andrea","age":13},{"name":"Alejandro","age":8},{"name":"Valentina","age":5}]
let randomText = fruits[1] + numbers[3] + family[4].name


console.log(myName)
console.log(sumAges)
console.log(subtractAges)
console.log(productAges)
console.log(divisionAges)
console.log(presentationText)

console.table(student)
console.table(pet)

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
console.log(fruits[5])

if(numberAge>=18){
    console.log("I am an adult")
}

console.log(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])

console.log(family)
console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])
console.log(family[5])

console.log(randomText)
