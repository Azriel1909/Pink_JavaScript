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

// -- to create mutable variable binding we use let
let y = 9
console.log(y)

y = 19
console.log(y)