// alert("hello world!"); //alert the user on load
// console.log("Hello world from the console!"); // logging in the console
// document.write("<h1>Hello world! Im writing this using js!</h1>"); // write directly to the document


//template literals


// console.log(`hello ${name}`);


// variables
let name = "daniel"; //string
let  age = 45.5; //integer/number
let isStudent = false; //boolean
let fruits = ['apple','cherry','banana'];//array
let person = {name:"Alice",age:30} //object

//output variables
console.log("Name:", name);
console.log("Age:", age);
console.log("Student?", isStudent);
console.log("Fruits:",fruits);
console.table(person);


//arithmetic operation
let x = 5;
let y = 3;
let sum = x+y;
console.log("SUM",sum);

// comparison
let isGreaterThan = x > y;
console.log("Is x greater than y?",isGreaterThan)

//logical operation

let isValid = 0 && true; // and op
console.log(isValid);
let isValid2 = true || false; // or op
console.log(isValid2);

//typeof js version of python's type() function

console.log(typeof 42) // output 'number'
console.log(typeof "hello world") //output 'string
console.log(typeof true) // output boolean
console.log(typeof {name:"john",age:42}) // output object
console.log(typeof ['apple','cherry']) // output object
console.log(typeof undefined) // output 'undefined'


// type conversion 
console.log("5" + 5) //output "55" (number to string)
console.log("10" - 5) // 5 (string to number) 
console.log("true" == true) // output false  (string to bool) come back to this in a bit!
/* Why didn't this give true as we expected?
Well what happend here is it converts the boolean value of true to '1', then we compare the string of true
ie. "true" to '1' that is going to be false! so here our implicit  conversion has been more hurtful than helpful!  */

console.log(+"100") // output 100 (string to number)

//type checking
console.log(0 == false); // true
console.log("" == false); //true
console.log(0 === false); //false (strict check)
console.log("" === false); //false (strict check )


const max_moves =7








