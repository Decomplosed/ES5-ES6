
// 1)

// // Person constructor
// function Person(name, dob) {
//   this.name = name
//   // this.age = age
//   this.birthday = new Date(dob)

//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime()
//     const ageDate = new Date(diff)
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }
// }

// // const brad = new Person('Brad', 36)
// // const john = new Person('John', 30)

// // console.log(john.age)

// const brad = new Person('Brad', '9-29-1993')

// console.log(brad.calculateAge())





//2) Build in Constructors

//String

// const name1 = 'Jeff'
// const name2 = new String('Jeff')

// // console.log(name2)

// // console.log(typeof name1)
// // console.log(typeof name2)

// if (name2 === 'Jeff') {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// //Number

// const num1 = 5;
// const num2 = new Number(5)

// console.log(num2)

// // Boolean

// const bool1 = true
// const bool2 = new Boolean(true)

// console.log(bool2)

// // Function

// const getSum1 = function (x, y) {
//   return x + y
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 1')

// console.log(getSum2(1, 1))

// // Object

// const john1 = { name: 'John' }
// const john2 = new Object({ name: 'John' })

// console.log(john2)

// // Arrays 

// const arr1 = [1, 2, 3, 4]
// const arr2 = new Array(1, 2, 3, 4)

// console.log(arr2);

// // Regular expressions 

// const reg1 = /\w+/
// const reg2 = new RegExp('\\w+')

// console.log(reg2);




// // 3) Prototypes


// // Object.prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.birthday = new Date(dob)
//   // this.calculateAge = function () {
//   //   const diff = Date.now() - this.birthday.getTime()
//   //   const ageDate = new Date(diff)
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970)
//   // }
// }

// // Calculate age

// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime()
//   const ageDate = new Date(diff)
//   return Math.abs(ageDate.getUTCFullYear() - 1970)
// }

// // Get full name

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// // Get Married

// Person.prototype.getsMarried = function (newLastName) {
//   this.lastName = newLastName
// }

// const john = new Person('John', 'Doe', '8-12-90')
// const mary = new Person('Mary', 'Jane', 'March 20 1978')

// console.log(mary)

// console.log(john.calculateAge())
// console.log(mary.getFullName())

// mary.getsMarried('Smith')

// console.log(mary.getFullName())

// console.log(mary.hasOwnProperty('firstName')); //true
// console.log(mary.hasOwnProperty('getFullName')); //false



// 4) Prototypal Inheritance 


function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Greeting

// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`
// }

// const person1 = new Person('John', 'Doe')

// // console.log(person1.greeting());

// // Customer constructor

// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName)

//   this.phone = phone
//   this.membership = membership
// }

// // Inherit the Person prototype method

// Customer.prototype = Object.create(Person.prototype)

// // Make customer.prototype return Customer()

// Customer.prototype.constructor = Customer

// // Create a customer 

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard')

// console.log(customer1)

// // Customer greeting

// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} - Welcome to our company`
// }

// console.log(customer1.greeting());




// 5)Using Object.create