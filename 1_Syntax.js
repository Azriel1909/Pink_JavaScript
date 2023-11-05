// > Basic Constructs

// * Comments

// Single-line comment

/**
 * Comment with multiple lines
*/

// > Primitive Atomic Values

// * Booleans

true
false

// * Numbers

1.141
-123

// * BigInts

17n
-49n

// * Strings

'abc'
'Ximena Toledo'

// > Assertions: Describes what the result of a computation is expected to look like and throws an exception if those exceptions are not correct.

// assert.equal(7+1,8)

// * Login to the console

// - Printing a value to standard out
console.log('Hi, I am Ximena Toledo')

// - Printing erro information to standard error
console.error('Oh no, something went wrong!')

// > Operators

// * Booleans
console.log(true && false)
console.log(true || false)

// * Numbers
console.log(3 + 9)
console.log(3 - 9)
console.log(3 * 9)
console.log(3 / 9)
console.log(3 % 9)

// * BigInts
console.log(3n + 9n)
console.log(3n - 9n)
console.log(3n * 9n)
console.log(3n / 9n)
console.log(3n % 9n)

// * Strings
console.log('Ximena' + ' ' + 'Toledo')
console.log('I am a' + ' ' + 'Engineer')

// * Comparison
console.log(3 < 9)
console.log(3 <= 9)
console.log(3 > 9)
console.log(3 >= 9)
console.log(3  == '3')
console.log(3  === '3')

// > Declaring variables

// -- cons creates immutable variable binding: Each variable must be initialized immediately and we cannot assign a different value later. Const does not make values immutable.

// * Declaring and initializing x (immutable binding)
const x = 9

// x = 10 // ! TypeError: Assignment to constant variable.

// - to create mutable variable binding we use let
let y = 9
console.log(y)

y = 19
console.log(y)

// * Ordinary function declarations

console.log('--------------------- Functions')

function mySum1(a,b){
  return a + b
}

// * Calling the function

console.log(mySum1(5,6))

// * Arrow functions expressions
// - Arrow functions whose body is a code block

const mySum2 = (a,b) => { return a + b }
console.log(mySum2(10,9))

// - Equivalent: Arrow functions whose body is an expression

const mySum3 = (a,b) => a + b
console.log(mySum3(10,3))

// * Plain objects

// - Creating a plain object via an object literal

console.log('--------------------- Objects')

const myObj1 = {
  first: 'Ximena', // Property
  last: 'Toledo', // Property
  getFullName() { // Property (method)
    return this.first + ' ' + this.last
  },
}

// - Getting a property value
console.log(myObj1.first)

// - Setting a property value
myObj1.first = 'Joel'
console.log(myObj1.first)

// - Calling the method
console.log(myObj1.getFullName())

// * Arrays

// - Creating an array via an Array Literal

console.log('--------------------- Arrays')

const myArr1 = ['a', 'b', 'c', 'd', 'e']
console.log(myArr1.length)

// - Getting an array element

console.log(myArr1[1])

// - Setting an element to an array

myArr1[1] = 'B'

// - Adding an element to an array

myArr1.push('f')

console.log(myArr1)

// * Control Flow Statements

console.log('--------------------- Control Flow Statements')

// - Conditional statement

if (x < 0) {
  x = -x
}

console.log(x)

// - for-of loop

for (const element of myArr1){
  console.log(element)
}

// * Modules

// - Each module is a single file: file-tools.msj or main.msj

/**
 * The module in file-tools.msj exports its functions isTextFilePath()
 * 
 * export function isTextFilePath(filePath) {
 *  return filePath.endsWith('.txt')
 * }
 * 
 */

// * Classes

console.log('--------------------- Classes')
class Person {
  constructor(name){
    this.name = name
  }
  describe() {
    return `Your name is ${this.name}`
  }
  static logNames (persons) {
    for (const person of persons) {
      console.log(person.name)
    }
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name)
    this.title = title
  }
  describe() {
    return super.describe() + ` (${this.title})`
  }
}

const ximena = new Employee ('Ximena', 'CEO')
console.log(ximena.describe())

// * Exception Handling

console.log('--------------------- Exceptions')

function throwsException() {
  throw new Error('Here is a problem!')
}

function cachesException() {
  try {
    throwsException()
  } catch (err) {
    console.log(err instanceof Error)
    console.log(err.message)
  }
}

cachesException()

// * Legal Variable and Property Names

// - The grammatical category of variable names and property names is called identifier. Identifier are allowed to have Unicode letter (A-Z, a-z), $, _, Unicode digits (0-9).

// ! Variables names cannot start with a digit

// * Casing Styles

// - Camel case: mySuperCoolVariable
// - Snake case: my_super_cool_variable
// - Kebab case: my-super-cool-variable

// * Capitalization

// - Functions: myFunction
// - Methods: obj.myMethod
// - CSS entity: special-class
// - JavaScript variable: specialClass
// - Classes: MyClass
// - Constants: MY_CONSTANT