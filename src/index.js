import App, { Test } from './app'
App.init()


/*


const myFunction = (a, b = 6) => {
    const result = a + b
    return result
}

const result = myFunction(3)

const someText = `The result is ${result}`
console.log(someText)


const person = {
    firstName: 'Ivan',
    lastName: 'Petrov',
}
const values = Object.values(person)
console.log(values)
//["Ivan", "Petrov"]

const keys = Object.keys(person)
console.log(keys)
//["firstName", "lastName"]
const entries = Object.entries(person)
// [["firstName", "Ivan"], ["lastName", "Petrov"]]


const hasThree = [1,2,3,{a: 6}]

myArray.forEach((element) => console.log(element))

const hasThree = myArray.some(element => element?.a === 6)

const a = hasThree ? hasThree : 'oh no'

const withoutThree = hasThree.filter(element => element !== 3)
//[1,2,{a: 6}]

const arrayWithPesho = hasThree.map(value => {
    return {
        name: "pesho",
        value,
    }
})
// [{name: "pesho", value: 1},......]

const sumOfNumbers = hasThree.reduce((acc, curr) => {
    if(typeof curr !== 'number'){
        return acc
    }
    return {...acc, [curr]: "pesho"}
},{})

const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, a: 4}




//const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const arr1 = [1,2,3]
const arr2 = [3,5,6]

const arr3 = [...arr1, ...arr2]

*/