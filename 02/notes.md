# Unit 1
## Lesson 02: Storing Data

*Example: Evaluating general polynomial functions*

**Data**: Any information I'll want to use as part of my program.

### Variables
A **variable** is a *box* to hold data in

'''
`let name= "Aniruddh";` (in JavaScript)
'''

The name is a *reference* to a location in memory.

Variables have a **data type**.

In javaScript, we'll be working with:
- Numbers
- Strings (words, characters, symbols)
- Functions
- Boolean (True/False)

Variables need a name, called the **identifier**

Rules of an identifier:
- Any characters including numbers, $, _ (but should not start with a number)
- Can't be any 'reserved' keywords (let, function etc.) Eg: `let let = 4;`)

Best Practices:
- Lowercase variables
- - - camelCase
- - - underscore_delineated

- Uppercase constants
- - - Pi

- Stick to the latin characters:
- - - `Let hello = "Hello World";`  

- Use meaningful names
- - - use `let height = 100` instead of `let x = 100`

### Operators:

**Math Operators**
- Addition
- Subtraction
- Multiplication
- Division
- Modulus
    (Remainder after division)

**String Operators**
- Concatenate

**Assignment Operators**
- Assignment- (stores a value in the variable)
- Operator Assignment: (operator)
    Example: +=, -=, "=, /=

**Boolean Operators**
*Operators on True/False values*
- Negation: ! `! (true)`
- AND: && (return true if both boolean values are true)
- OR: || (return true if at least one boolean value is true)

**Comparison Operators**
*Operators that return True/False values*
- Equality `==`
- Not equal `!=`
- Greater than `>`
- Less than `<`
- Greater than or equal to `>=`
- Lesser than or equal to `<=`

### Constants
Named references to a location in memory whose value cannot chage

In javaScript:
`const PI = 3.14159;`

### Arrays
A simple data strucutre for storing closely related data.

PROS:
