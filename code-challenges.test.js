// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("hitchhikersGuide", () => {
  it("takes in an array of objects, returns array with sentence", () => {
    expect(hitchhikersGuide(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//---Initial Jest Test---

// FAIL  ./code-challenges.test.js
// hitchhikersGuide
//   ✕ takes in an array of objects, returns array with sentence (1 ms)

// ● hitchhikersGuide › takes in an array of objects, returns array with sentence

//   ReferenceError: hitchhikersGuide is not defined

//     17 | describe("hitchhikersGuide", () => {
//     18 |   it("takes in an array of objects, returns array with sentence", () => {
//   > 19 |     expect(hitchhikersGuide(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |     ^
//     20 |   })
//     21 | })
//     22 |

//     at Object.expect (code-challenges.test.js:19:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.162 s

// b) Create the function that makes the test pass.

// Create a function called hitchhikersGuide which takes array as a parameter
// Create variables for each object in the array
// Set a variable as an empty array
// Set a variable for each object which splits the value of the name key
// Set a variable for split variable which maps over the strings and capitalizes each string using charAt and slice
// Push an interpolated string of each object variable into the empty array and return the new array
// Call the function and pass in the array
// I fully realize this is a "dumb" way of solving this problem and I know there are people with more elegant solutions than this, but it works and my brain is fried.
const hitchhikersGuide = (array) => {
  let obj1 = array[0]
  let obj2 = array[1]
  let obj3 = array[2]
  newArray = []
  let split1 = obj1.name.split(' ')
  let name1 = split1.map(value => value.charAt(0).toUpperCase() + value.slice(1))
  let split2 = obj2.name.split(' ')
  let name2 = split2.map(value => value.charAt(0).toUpperCase() + value.slice(1))
  let split3 = obj3.name.split(' ')
  let name3 = split3.map(value => value.charAt(0).toUpperCase() + value.slice(1))
  newArray.push(`${name1.join(' ')} is ${obj1.occupation}.`, `${name2.join(' ')} is ${obj2.occupation}.`, `${name3.join(' ')} is ${obj3.occupation}.`)
  return newArray
}

hitchhikersGuide(people)

//---Second Jest Test---

// PASS  ./code-challenges.test.js
// hitchhikersGuide
//   ✓ takes in an array of objects, returns array with sentence (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainderOfThree", () => {
  it("takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3", () => {
    expect(remainderOfThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderOfThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//---Initial Jest Test---

// FAIL  ./code-challenges.test.js
// hitchhikersGuide
//   ✓ takes in an array of objects, returns array with sentence (1 ms)
// remainderOfThree
//   ✕ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3 (1 ms)

// ● remainderOfThree › takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3

//   ReferenceError: remainderOfThree is not defined

//      97 | describe("remainderOfThree", () => {
//      98 |   it("takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3", () => {
//   >  99 |     expect(remainderOfThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//         |     ^
//     100 |     expect(remainderOfThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
//     101 |   })
//     102 | })

//     at Object.expect (code-challenges.test.js:99:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s

// b) Create the function that makes the test pass.

// Create a function named remainderOfThree and assign array as the parameter
// Set a variable that filters the array for typeof number
// Map the filtered array for the remainder of each value when divided by three
// Call the function and pass in the arguments
const remainderOfThree = (array) => {
  filterArray = array.filter(value => typeof value === 'number')
  return filterArray.map(value => value % 3)
}

remainderOfThree(hodgepodge1)
remainderOfThree(hodgepodge2)

//---Second Jest Test---

// PASS  ./code-challenges.test.js
// hitchhikersGuide
//   ✓ takes in an array of objects, returns array with sentence (1 ms)
// remainderOfThree
//   ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCube", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumCube(cubeAndSum1)).toEqual(99)
    expect(sumCube(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//---Initial Jest Test---

// FAIL  ./code-challenges.test.js
// hitchhikersGuide
//   ✓ takes in an array of objects, returns array with sentence (1 ms)
// remainderOfThree
//   ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3
// sumCube
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// ● sumCube › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumCube is not defined

//     167 | describe("sumCube", () => {
//     168 |   it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
//   > 169 |     expect(sumCube(cubeAndSum1)).toEqual(99)
//         |     ^
//     170 |     expect(sumCube(cubeAndSum2)).toEqual(1125)
//     171 |   })
//     172 | })

//     at Object.expect (code-challenges.test.js:169:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s

// b) Create the function that makes the test pass.

// Create a function called sumCube and set array as the parameter
// Set a variable as the mapped area where each value is cubed
// Return the new array using reduce to add all the numbers together
// Call the function and pass in the arguments
const sumCube = (array) => {
  cubNum = array.map(value => value ** 3)
  return (cubNum.reduce((a, b) => a + b))
}

sumCube(cubeAndSum1)
sumCube(cubeAndSum2)

//---Second Jest Test---

// PASS  ./code-challenges.test.js
// hitchhikersGuide
//   ✓ takes in an array of objects, returns array with sentence (1 ms)
// remainderOfThree
//   ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3
// sumCube
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.124 s, estimated 1 s