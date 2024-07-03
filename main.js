
// IMP TOpic  FOR JS ------------------------->
// 1 Setting Up Node on Windows
// 2 Setting Up Node on MacOS 
// js 
// 2 How does Javascript attain async behaviour when it is single threaded?
// (Event–Loop)
// 3 Variables 
// 4 Datatypes 
// 5 Operators and expressions
//  diffrence b/w == and === operator 
// null and undefind.
// what id NaN
// 6 Conditionals ----------------------------
// 7 Loops 
// 8 Functions 
// 4 Difference between normal functions and arrow functions.
// 7 What is a callback function?
// ES16  let/ var / const , template litrals , defoult perameter , fat arrow funcation  
// 10 Array & Array Methods  map funcation
// 9 Strings & String Methods 
// 9 Questions on array methods–filter,map, reduce
// 12 set Interval & set Timeout 


// math obj 
// dom /bom 
// event 


// same 
// 3 Explain how ‘this’ works in Java script 
// 8 What is a closure? IMP 
// 11 Destructuring and Spread Operator 
// 13 Promises
// 14 Async Await 
// 15 Exception Handling
// 16 Object Oriented Programming

// 10 What is currying?
// 11 What is composition?
// 12 How does java script code run?
// 10 What is debouncing and throttling?
// 11 What is prototypal inheritance?
// 12 Tricky javascript context questions
// call ,apply , bind:
// review of w3school 




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1 Setting Up Node on Windows-------------------->
// 2 Setting Up Node on MacOS Link
// ()  parentheses, often called "round brackets"
// {}  curly braces or curly brackets
// []  square brackets or  brackets








// Java script--- > 
// js is the prototype based language 
//  js can change html content 

// js is single threaded non blocking, asynchronous concurrent language 

// it has ---->
//       call stack 
//       event loop 
//       callback queue 
//       other api like that  --- >  set time out , fetch api 
        
// v8 is the js run time which has a call stack and a heap (heap use for the memory allocation )
// DOm , set time out , XML, HTTPRequest dont exist in v8 source code 


// Asynchronous callbacks : 
// sometime the js code can take a lot of time and this block the page re render
// js has asynchronous callback for non blocking behaviour 
// js run time can do one thing at a time 


// // Task Queue : 
// js cn do only one think at a time 
// the rest are queued to the task queue waiting to be exucuted 
// when we run setTimeout, webapis will run a timer and push the fun provide to setTimeout to the task queue once the timer end 
// these task will be pushed to the stack where they can executed 


// The event loop : 
// js has runtime model based on an event loop, which is reponsible for executing the ConvolverNode, collection and proccessing events and ececuting queued sub-task
// the event loop pushes the task from the task queue to the call stack 
// setTimeout(func1,0)can be used to defer a function until all the pending task have been ececuted
// we can see howw these things work in action by visiting 


// 2 How does Javascript attain async behaviour when it is single threaded?
// (Event–Loop)

// JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 
// google ---->  Loupe event loop 

// call stack 
// web api 
// callback queue 

// uper se niche jab cade execute hota h to o call stack me ak ak karke code dalta chala jata h 
// jab koi set time out ya fetch api jasi koi chij ati h to vo web api me wait karti h   
// jis fun ko chlana h use call back queue me dal deti h 
// event loop ak ak karke  call back qeue se chijo ko utha ke call stack me dalta rahega 

// 12 How does java script code run?: + call stack ----------------------------->

// js execution context :

// . global execution context 
// . function execution context 
// . eval execution context 


// go to inspect and then go snippets ake new file 
// make debuging point 

// function one(){
//         console.log("one")
//     }
//     function two(){
//         console.log("two ")
//     }
//     function three(){
//         console.log("Three")
//     }
//     one()
//     two()
//     three()

// ye jab ak sath call ati h jab ye hota h 
// three
// two 
// one 




// function one(){
//         console.log("one")
//     two()
//     }
//     function two(){
//         console.log("two ")
//     three()
//     }
//     function three(){
//         console.log("Three")
//     }
//     one()
//     two()
//     three()

// lifo use hota h 

// 3 Variables Link--------------------------->

// variable is type of contener that is used to store the data.

// let a =2;   //need to declared the variable 
// a= 3 ; // if you want to used same variable thata is not want to need declared.

// let name = "Amnesh";
// let name = 'Amnesh';

// =========================================================================
// 4 Datatype ---------------------->

// describe the types of data thats called data type.

//# premitive data type ---->  string, numm , boolean , null, undefine, symbole big int.
//# non premitive data type (references )---->  array, obj, funcation.

// find operator type --------->

// let a = 3 ;
// console.log(typeof a);


// Note:  

// null ka typesof karne per obj ata h 
// console.log(typeof null);

// string, ---- string 
// num ,---- num  
// boolean --- boolean 
// null,----  obj 
// undefine,----  undefined
// symbole --- 
// big int.  





// Note -   array/date / null  also return the obj 




// Undefined ----- >  

// variable without value, and has a value undefiend. the type is also undefined. 

// let car ;   //  undefiend 
// let =  undefiend. //  undefiend 


// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.

// Example
// let car = "";    // The value is "", the typeof is "string"



// IMP 
// Null ---------------->

// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object.

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = null;    // Now value is null, but type is still an object

// You can also empty an object by setting it to undefined:

// Example
// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = undefined;   // Now both value and type is undefined


// Difference Between Undefined and Null
// undefined and null are equal in value but different in type:

// typeof undefined           // undefined   by defoult 
// typeof null                // object      we assign null value ko clear karne ke liye use karte 

// null === undefined         // false      
// null == undefined          // true






// Nan  (not a num )- -- - --  - - >
// In JavaScript, NaN is a number that is not a legal number.

// typeof (nan);     //  number 

// let a =  10 *  "abc";
// console.log(a);          // return nan
// console.log(typeof(a));   // num0 

// ===================================================================

// 5 Operaters and expressions:

// Expressions: -------- >
// Fragment of code that produce value called expression.

// ex 

// 77 
// "amnesh";




// Operaters  in js ---------------------------->

// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators


// Arithmetic Operators:-------------->
// +      addition
// -      subtraction 
// *      multiplecation 
// **     exponential         (es 2016)
// /      division 
// %      modulas 
// ++     inc 
// --      dec 

// let a = 5;
// let b=  3;
// console.log("a+b = ",  a+b);
// console.log("a-b = ",  a-b);
// console.log("a/b = ",  a/b);
// console.log("a*b = ",  a*b);
// console.log("a**b = ",  a**b);   //  5*5*5
// console.log("a%b = ",  a%b);
// console.log("a = ",  a++);
// console.log("a = ",  a--);
// console.log("a = ",  ++a);
// console.log("a = ",  --a);




// console.log("a = ",  ++a);
// console.log("a = ",  a++);
// console.log("a = ",  --a);
// console.log("a = ",  a--);
// console.log("a = ",  a);
// console.log("a = ",  a--);





// Assignment Operators-------------------->
// let a;
// a += 5;   // a = 5+1 


// comparison operator ------------------->
// ==      equal to 
// !=    not equal to 
// ===    equal vlue and type 
// !==    not equal value and not equal type 
// >     grater then 
/* < less then */
// > =    greater then equal to 
/* <= less then equal to */
// ? ternary operotor 


// diffrence bt == and === operator 

// == and === operator are used to compaire operands but in === operator we also compaire its data type. 

// let a = 2;
// let b=  "2";
// console.log(a==b);    //return true 
// console.log(a===b);   // false 
// console.log(a!=b);    //return true 
// console.log(a!==b);     // false.

// Logical Operator -----------> booleanse me worke karte h 

// &&      logical and      T && T  = T 
// ||      logical or       T || F  = F
// !       logical not     ! T   = F 


// AND -----> 
// let x = 5;
// let y = 6;
// console.log(x<y && x ==5)    // t && T =  T


// Or --------->
// let x = 5;
// let y = 6;
// console.log(x<y || x ==5)    // t && T =  F


// Not ----------->

// console.log(! false )




// Ternary operator --------------> (ES 2016)
// it is the shorter form of if else

// a =6;
// if (a>7){
//     console.log("hello ");
// }
// else 
// console.log("hi");



// by usingn ternary operator 

//  a =6;
// console.log (a >7 ?  "hello" : "hi") ;




// JavaScript Bitwise Operators----------------------->

// Operator	Name                 	Description
// &	     AND	                Sets each bit to 1 if both bits are 1
// |	     OR	                    Sets each bit to 1 if one of two bits is 1
// ^	     XOR	                Sets each bit to 1 if only one of two bits is 1
// ~	     NOT	                Inverts all the bits
// <<	     Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	     Signed right shift	    Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	     Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


// JavaScript Bitwise AND
//  it returns 1 if both bits are 1.

// One bit example:
// Operation	Result
// 0 & 0	0
// 0 & 1	0
// 1 & 0	0
// 1 & 1	1
// 4 bits example:
// Operation	Result
// 1111 & 0000	0000
// 1111 & 0001	0001
// 1111 & 0010	0010
// 1111 & 0100	0100


// JavaScript Bitwise OR
//  it returns 1 if one of the bits is 1:

// One bit example:
// Operation	Result
// 0 | 0	0
// 0 | 1	1 
// 1 | 0	1
// 1 | 1	1
// 4 bits example:
// Operation	Result
// 1111 | 0000	1111
// 1111 | 0001	1111
// 1111 | 0010	1111
// 1111 | 0100	1111


// JavaScript Bitwise XOR
//  it returns 1 if the bits are different:

// One bit example:
// Operation	Result
// 0 ^ 0	0
// 0 ^ 1	1 
// 1 ^ 0	1
// 1 ^ 1	0 
// 4 bits example:
// Operation	Result
// 1111 ^ 0000	1111
// 1111 ^ 0001	1110
// 1111 ^ 0010	1101
// 1111 ^ 0100	1011


// for more learn from w3 school -------




// Type operator :---------------->

// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function
// There are 6 types of objects:

// Object
// Date
// Array
// String
// Number
// Boolean
// And 2 data types that cannot contain values:

// null
// undefined



// typeof Operator
// You can use the typeof operator to find the data type of a variable.

// Example
// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object"


// Note -   array/date / null  also return the obj 




// Undefined ----- >  

// variable without value, and has a value undefiend. the type is also undefined. 

// let car ;   //  undefiend 
// let =  undefiend. //  undefiend 


// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.

// Example
// let car = "";    // The value is "", the typeof is "string"




// Null ---------------->

// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object.

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = null;    // Now value is null, but type is still an object

// You can also empty an object by setting it to undefined:

// Example
// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = undefined;   // Now both value and type is undefined


// Difference Between Undefined and Null
// undefined and null are equal in value but different in type:

// typeof undefined           // undefined   by defoult 
// typeof null                // object      we assign null value ko clear karne ke liye use karte 

// null === undefined         // false      
// null == undefined          // true






// Nan  (not a num )- -- - --  - - >
// In JavaScript, NaN is a number that is not a legal number.

// typeof (nan);     //  number 

// let a =  10 *  "abc";
// console.log(a);          // return nan
// console.log(typeof(a));   // num 

// =========================================================================================================================
// 6 Conditionals ----------------------------
// Conditional statements are used to perform different actions based on different conditions.
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// Syntax: ---  
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

// Example : ------

// Make a "Good day" greeting if the hour is less than 18:00:

// if (hour < 18) {
//   greeting = "Good day";
// }




// The else Statement/  if else statement -------------->  
// Use the else statement to specify a block of code to be executed if the condition is false.

// if (condition) {
//   //  block of code to be executed if the condition is true
// } else {
//   //  block of code to be executed if the condition is false
// }

// Example------> 
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }







// else if statement: ------->

// else if statement use one first condition is false ---------> 

// Syntax----------> 
// if (condition1) {
// code 
// } else if (condition2) {
// code 
// } else {
// code 
// } 




// Example : 
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

// let time = 18
// if(time <  10){
// console.log("good morning ")
// }

// else if (time  <  20 ){
//     console.log("after noon ")

// }

// else {
//     console.log ("good evening ");

// }



// switch satatement :    -------------> 

// repelacement  of if else we ue switch statemnte
// Use the switch statement to select one of many code blocks to be executed.
// Syn tax ---- >  
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }


// Example-----> 


// let area = "triangle";
// let pi = 3.14, l = 5, b = 4, r = 3;
// if (area === "circle") {
//     console.log("area of circle is: " + (pi * r ** 2));
// } else if (area === "triangle") {
//     console.log("area of triangle is: " + (l * b) / 2);
// } else if (area === "rectangle") {
//     console.log("area of rectangle is: " + (l * b));
// } else {
//     console.log("please enter valid data");
// }

// let area = "triangle";
// let pi = 3.14, l = 5, b = 4, r = 3;
// switch (area){
// case 'circle ':
// console.log("area of circle is: " + (pi * r ** 2));
// break;
// case 'triangle':
// console.log("area of triangle is: " + (l * b) / 2);
// break;
// case 'rectangle ':
// console.log("area of rectangle is: " + (l * b));
// default : 
// console.log("please enter valid data");
// }

// go to main.html file -------> 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Loops (Iterations )-----------------------> 
// Loops can execute a block of code a number of times.
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


// for loop -----------------------> 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }

// outer loop ak bar chalega or innner loop apni puri ittretion complete karega 

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value:  ${i}`);
//     for (let j = 0; j <= 10; j++) {
//     {
//         console.log(`inner  loop value:  ${j}`);
//     }
// }
// }


// print the table : -----------> 

// for (let i = 1; i <= 100; i++) {
//     console.log(`table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//     {
//         console.log(`${i} * ${j} =${i*j}`);
//     }
// }
// }


// break and continue :  ----------------------------------> 

// for (let i = 0; i <= 20; i++) {
//     if (i ==5){
//         console.log(`Detected :  ${i}`); 
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

// Continue :  jis value per hm continue lagate h use chood ke sari value print ho jati h 

// for (let i = 1; i <= 10; i++) {
//     if (i ==5){
//         console.log(`Detected :  ${i}`); 
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
// }



// while loop -------------------------------->

// while(condition){

// }
// let i =  1
// while(i<10){
//     console.log(i);
//     i++
// }

// let myarray = ['flash','batman','superman']
// let arr =  0
// while(arr< myarray.length ){
//     console.log(myarray[arr]);
//     arr++;
// }




// do while loop: ----------------->



// let score = 1
// do {
// console.log(`score is ${score}`);
// score++;
// }
// while(score<=10);



// for of  loop -------------> if you want to show value use of.
// Allows you to access the value of the obj directly without having to use an index 

// {split the string }
// const myName = "vinod";
// for(let character of myName){
//        console.log(`the letters are ${character}`);
// }

// const num = ["cat", 1,2,3,4,5,6,6,7];
// for(let key of num){
//        console.log(`the keys are ${key}`);
// }



// for/in loop ------------->  if you want to show index use in 
// for in means index provide.

// allow you to access the key of the obj rather then its value 


// syntex :  ----->
// for (key in obj ){
// obj 
// }




// const myName = "vinod";
// for(let character in myName){
//        console.log(`the letters are ${character}`);
// }

// const num = ["cat", 1,2,3,4,5,6,6,7];
// for(let key of num){
//        console.log(`the keys are ${key}`);
// }



// forEach loop: ----------->

// forEach method call a funcation for each element in an array 
// for each method is not executedd for empty element 


// const Language = ["javacript", "PHP" , "java", "c", "pyton"];
// console.log(Language[0]);
// console.log(Language[1]);
// console.log(Language[2]);

// second way ---------->

// for(let i = 0 ; i < Language.length; i++)
// {console.log(Language[i]);

// }

// third way --------->
// for(let i of Language )
//        {console.log(i);
//        }


// forth way ---- foreach 

// Language.forEach(function(value, index){
//        console.log(index + "--"+ value);
// })


// fat arrow funcation with foreach  ---->
// const Language = ["javacript", "PHP" , "java", "c", "pyton"];
// Language.forEach((value, index )=>{
//        console.log(value + " - " + index )
// })



// var x = 10;

// function foo() {
//   var y = 20; // free variable
//   function bar() {
//     var z = 15; // free variable
//    return x + y + z;
//   }
//   return bar;
// }



// 8 Functions :--------------->

// funcation is a block of code design to perfome a perticular task 

// funcation definiation 
// funcation call 
// funcation perameter 
// funcation argument 
// funcation expression 
// return keyword
// anaonymous function

// why function :    we can use same code many times 

// funcation definiation : before we use fun need to define it.

// function funNamne(){
//        // code 
// }
// ex: 
//  function sum(){
//        var a = 10, b=  20;
//        var total =  a+b;    
// }

// funcation call : fun executed when somthing call it / invoke it.


//  function sum(){
//        var a = 10, b=  20;
//        var total =  a+b;    
// }
// sum();  //-----> call

// Diff  funcation perameter / funcation argument 
// funcation perameter  : 
// function perameter are the name listed in the funcation defination. 
// funcation defination me write karte h 
// funcation argument : 
// function argument are the real value passed to the function.
// jab hm funcation call karte h jab write krt h 

// ex :
// function sum (a,b){    //  funcation perameter 
//        var total = a+b;
//        console.log(total);
// }
// sum();
// sum(10,20);
// sum(5,6);      //  funcation argument 


// funcation expression : --------------->
// create a fun and put it into the variable.

// function fun(a, b){
// var  total =  a+b;
// console.log(total);
// }
// var funEXP = fun(2,6);   //------>  fun exp 


// return keyword----------------->

// when js reach return statement js code stop executing

// function fun(a, b){
// return total =  a+b;
// console.log("return ke bad kam nahi karega ")
// }
// var funEXP = fun(2,6); 
// console.log (funEXP);


// anaonymous function
//  fun without name call anaonymous fun 

// var funExp =  function(a,b){
//        return total =  a+b;
// }
// var sum= funExp(4,5);
// console.log(sum);


// --------------------------------------------------------

// note  :  fun argument me koi value nahi hoti to vo undefiend deta h na ki nall

// function fun(username) {
//        if (username === undefined) {
//               console.log("enter the user name");
//               return;
//        }
//        return `${username} just logged in`
// }
// console.log(fun());




// pass defoult value :  ab undefiend nahi show karega 
// function fun (username= "amnesh"){
//        if(username ===  undefined){
//               console.log("enter the user name");
//               return;
//        }
//        return `${username} just logged in`
// }
// console.log(fun());



// 7 What is a callback function/ high order funcation ?--------------->
// A callback is a function, passed as an argument to another function
// A callback function can run after another function has finished
// ye wha use hota h jha jada time lagta h 


// // function -------?

// function greet(name, callback){
//        console.log(`hi ${name}`);
//        callback();
// }
// // callback funcation 
// function callMe(){
//        console.log('i am callback funcation');
// }
// // passing function as an argument 
// greet('peter' , callMe);

// Another ex 

// const calculate =  (a,b,cb)=>{
//        return cb(a,b);
// };


// method 1:------------->
// function addition(a,b){
//        return a+b;
// }
// const  c=  calculate(3,4, addition);
// console.log (c);

// method 2:------------->
// const addition =  (a,b)=>a+b;
// const c = calculate(3,4, addition);
// console.log(c);

// method 3 : ------->
// const addition = calculate(3,4, function(num1,num2){
//        return num1 + num2;
// });
// console.log (addition);

// A funcation that takes a funcation as an argument. 

// Ecmascript: IMP


//1  Let / Const 
//2  Arrow function 
//6 Template Strings 
//7 Default argument
//3 spread operator
//4 rest operator
//5 object Properties  
//8 destructring 

// invalid directory error when  we install any think 

// C:\Users\Abhishek>subst I: c:\




// let /const / var ------>


// for var --------> variable is the funcation scope 
// for let  -------->  let is the  block scope  
// for const  --------> const is the  block scope / its a constant 




// for var --------> variable is he funcation scope 
// function fun()
// {
//        var myfirstname =  "Amnesh";
//        if (true){
//               var myLastName = "pal";
//                console.log ("inner " + myLastName)
//                console.log ("inner " + myfirstname)
//        }
//        console.log("innerouter " + myLastName + "\n" );
// }
// fun();

// no error --becaluse we can access the value inside the block and out side the block 


// for let  -------->  let is the  block scope 
// function fun()
// {
//        let   myfirstname =  "Amnesh";
//        if (true){
//                let   myLastName = "pal";
//                console.log ("inner " + myLastName)
//                console.log ("inner " + myfirstname)
//        }
//        console.log("innerouter " + myLastName);
// }
// fun();

// let  throw a ReferenceError because myLastName is not accessible outside the if block.

// note :  block ke bhar ki vlue ko access kar sakte h but block ke ander ki value ko bhar se access nahi kar sakte 


// for const  --------> const is the  block scope  

// function fun()
// {
//        const  myfirstname =  "Amnesh";
//        if (true){
//               const  myLastName = "pal";
//                console.log ("inner " + myLastName)
//                console.log ("inner " + myfirstname)
//        }
//        console.log("innerouter " + myLastName);
// }
// fun();

// const   throw a ReferenceError because myLastName is not accessible outside the if block.

// Template litrals : (template string ):
// allow you to create strings with embedded expressions.  

// const name = 'John';
// console.log("your name is "+  name );
// console.log(`your name is ${name }`) 


// Defoult perameter ------------>

// it  is a way to set default values for function parameters.

// function mul (a,b){
//        return a*b;
// }
// console.log(mul(5));


// so b = 4 is the defoult perameter 
// function mul (a,b = 4 ){
//        return a*b;
// }
// console.log(mul(5));



//  Difference between normal functions and arrow functions.
// arrow funcation is the shortest form of normal fun 

// function sum (){}  
//  const  sum =()=>{}

// console.log(sum());
// function sum (){
//        let a = 3, b= 4;
//        let c =  a+b;
//        return c 
// }
// console.log(sum());


// fat arrow funcation---->


// console.log(sum()); // Error we can't access this
//   const sum =   ()=>{
//        let a = 3, b= 4;
//        let c =  a+b;
//        return c 
// }
// console.log(sum());

// or 

// const sum =   ()=>{return `${(a=3 ) + (b=4) }`}
// console.log(sum());

// or  

// const sum =   ()=> `${(a=3 ) + (b=4) }`
// console.log(sum());



// 10 Array & Array Methods : --->

// Array :  when we want to store one value we use var if we want to store multiple value we use array 


// Note :  in other language we can write same data type in one variable but in js we can multiple.

// jab hm koi copy operation karete h to ye ak shallow copy banata h 

// shallow copy :  jo bhi hm change karte h vo original array me bhi chang hoga 

// A shallow copy creates a new array, but it does not create new copies of the elements within the array.
//  Instead, it points to the same elements as the original array. 
//  A deep copy,creates a completely independent copy of both the array and its data. 
//  It does not share any data with the original array



// const myArr =  [0,1,2,3,4,5,6, true, "hitesh"]
// console.log(myArr[0]);

// second way to create the Array

// const myArr = new Array (0,1,2,3,4,5,6);
// console.log(myArr[3]);



// Traversal in array ---- >
// if we want get the single data and change the data. 

// var a = ["vinod", "ram ", "arjun", "visahl "];
// find the element 
// console.log(a[2]);
// if we want to find the array lenth 
// console.log(a.length);
// if we want to find last element 
// console.log(a[a.length-1] );

// for loop on array 
// for(let i in a){
//     console.log(a[i]);
// }






// Array method 
//push();  add value at the last. 
//pop();  remove value at the last/  no perameter need.
//unshift() : add at  the first index of an array 
// shift() :  remove first index of an array  no perameter want 
// includes(9):  agar array me 9 h to ye true return karega otherwise false 
// IndexOf  :  index batayega agar value nahi h index me to -1 
// join() ---- >  array ko string me convert kar deta h 
// slice (): 
// splice (): 
// Imp // filter()
// find(): ------> use to find element 
// foreach() ---  use to access each element in array.
// some()----  item available the return true otherwise false 
// every()-------> 
// IMP // Map() --------> 
// IMP // reduce()-------- > 




// Crud operation in array------->
// Insert // add   --- Push ,  unshift 
// replace 
// delete   // pop , shift 


// Array.prototype.push()------------------> add one or more element to the end of an array and return the new length of array.
// array.prototype.unshift():
// array.prototype.pop()
// Array.prototype.shift()

// const myArr =  [0,1,2,3,4,5,6,7]
// myArr.push(7);
// myArr.push(8);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);      
//  myArr.unshift(5);
//  console.log(myArr);
//  myArr.shift();
//  console.log(myArr);
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(13));

// const newArr=  myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);
// const myArr =  [0,1,2,3,4,5,6,7]
// // slice : 
// const myn1 = myArr.slice(1,3)
// console.log("A", myArr);   //koi chnage nahi hoga 
// console.log("A", myn1); // 1 or 3 ke bich ke element return karega 

// // splice : 
// const myn2=  myArr.splice(1,3)   // modify arrya 
// console.log("B", myArr);  // 1 or 3 ke bich ke elemnt  arry me se hata dega 
// console.log("B", myn2); // ak or thin ke elemnt return karega including 3 




// Explination :
// myArr is an array containing the numbers from 0 to 7.
// myn1 is assigned the result of slicing myArr from index 1 (inclusive) to index 3 (exclusive), so it will contain elements [1, 2].
// console.log("A", myArr) prints the original array myArr.
// console.log("A", myn1) prints the sliced array myn1.

//  splice operation:
// myn2 is assigned the result of splicing myArr starting from index 1(inclusiv), removing 3 elements.
//  This will modify myArr and remove elements [1, 2, 3] from it.
// console.log("B", myArr) prints the modified array myArr.
// console.log("B", myn2) prints the elements removed from myArr during the splice operation, which are [1, 2, 3]. 



// filters ---->filter is use to filtering the items in array.

// const items = [ 
//        {name: "bike", price:100 },
//        {name: "tv", price:200 },
//        {name: "album", price: 10},
//        {name: "phone", price:5 },
//        {name: "computer", price: 500},
//        {name: "keyboard", price: 25}
// ]

// const filterItems =  items.filter((item)=>{
//        return item.price<=100
// })
// console.log(filterItems);


// find :-------> used to find the element 

// const items = [ 
//        {name: "bike", price:100 },
//        {name: "tv", price:200 },
//        {name: "album", price: 10},
//        {name: "phone", price:5 },
//        {name: "computer", price: 500},
//        {name: "keyboard", price: 25}
// ]
// const findItems =  items.find((item)=>{
//        return item.name=== 'bike' 
// })
// console.log(findItems);




// const items = [ 
//        {name: "bike", price:100 },
//        {name: "tv", price:200 },
//        {name: "album", price: 10},
//        {name: "phone", price:5 },
//        {name: "computer", price: 500},
//        {name: "keyboard", price: 25}
// ]
// const findItems =  items.find((item)=>{
//        return item.name=== 'bike' 
// })
// console.log(findItems);


// Some :   ----------------> 

// const items = [ 
//        {name: "bike", price:100 },
//        {name: "tv", price:200 },
//        {name: "album", price: 10},
//        {name: "phone", price:5 },
//        {name: "computer", price: 500},
//        {name: "keyboard", price: 25}
// ]
// const hasInexpensivItems =  items.some((item)=>{
//        return item.price <= 25
// })
// console.log(hasInexpensivItems);



// Every : ------ >
// const items = [ 
//        {name: "bike", price:100 },
//        {name: "tv", price:200 },
//        {name: "album", price: 10},
//        {name: "phone", price:5 },
//        {name: "computer", price: 500},
//        {name: "keyboard", price: 25}
// ]
// const hasInexpensivItems =  items.every((item)=>{
//        return item.price <= 1000
// })
// console.log(hasInexpensivItems);





// forEach : --------------------->
// const Language = ["javacript", "PHP" , "java", "c", "pyton"];
// const items = [ 
//        {name: "bike", price:100 },
//        {name: "tv", price:200 },
//        {name: "album", price: 10},
//        {name: "phone", price:5 },
//        {name: "computer", price: 500},
//        {name: "keyboard", price: 25}
// ]
//  items.forEach((item )=>{
//        console.log(item.name)
// })

// Language.forEach(function(value, index){
//        console.log(index + "--"+ value);
// })


// fat arrow funcation with foreach  ---->
// const Language = ["javacript", "PHP" , "java", "c", "pyton"];
// Language.forEach((value, index )=>{
//        console.log(value + " - " + index )
// })




// 9 Questions on array methods–filter,map, reduce, 
// MAP / Reduce/ Filter-------------->

// Map  ---->
// map method is similiar to foreach method in map we create new array and can't change in orignal array. 
// Array.prototype.map() --------------> map method orignal  array ko change nahi kargta vo new array return karta h 
// syntex 
//  Array.map(funcation (currentValue, index, arr), thisValue)
// or 
//  Array.map((currentValue, index, arr)=>{}, thisValue)

// let arr=  [1,4,9,16,25];
// let newArr =  arr.map ((currentValue, index, arr )=>{
//     return currentValue>9
// })
// console.log(arr);
// console.log(newArr);



// let arr=  [1,4,9,16,25];
// let newArr =  arr.map ((currentValue, index, arr )=>{
//     return indexnum= `${index} and the value is  ${currentValue} belong to ${arr}`
// })
// console.log(arr);
// console.log(newArr);


// shortest form 

// let arr=  [1,4,9,16,25];
// let newArr =  arr.map ((currentValue, index, arr )=>indexnum = `${index} and the value is  ${currentValue} belong to ${arr}`)
// console.log(arr);
// console.log(newArr);

// return array without changing orignal array 





// Note : map / forEach just like same:----------->


//  foreach :
// let arr=  [1,4,9,16,25];
// arr.forEach(function(value, index){
//        console.log(index + "--"+ value);
// })


// diff b/w map and foreach -------------->

// forEach -----return-------> undefined 
// map ------- return ------> new array with the transformd element

// even its doing same job returning value is diff 

// map new array me array ko change nahi karna but foreach karta h to ye undefined show karta h 
// Map ()-->

// let arr=  [1,4,9,16,25];
// let newArr =  arr.map ((currentValue, index, arr )=>indexnum = `${index} and the value is  ${currentValue} belong to ${arr}`)
// console.log(arr);
// console.log(newArr);

// forEach --->

// let arr=  [1,4,9,16,25];
// let newArr =  arr.forEach ((currentValue, index, arr )=>indexnum = `${index} and the value is  ${currentValue} belong to ${arr}`)
// console.log(arr);
// console.log(newArr);

// even its doing same job returning value is diff 
// sortest way -->


// let arr=  [1,4,9,16,25];
// let newArr =  arr.forEach ((currentValue, index, )=>indexnum = `${index} and the value is  ${currentValue} `)
// console.log(arr);
// console.log(newArr);


// let arr1=  [1,4,9,16,25];
// arr.forEach((value, index)=> console.log(index + "--"+ value))

// Ablity to change other method : 

// Map() is chainable this means that you can attach Reduce () , start (), filter (), and so on after performing a map () method as an array. \

// you cant do it with foreach because it return undefine 

// check note book :



// Note :  flatten an array meanse convert 2D ,3D into single dimesional array 




// reduse  Method : -------------->

// At the first callback, there is no return value from the previous callback.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
// reduce method not change oregnial array 


// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// it take 4 argument -------->

// accumlator 
// currentValue 

// index 
// array



// const myNums =  [ 1,  2,3]
// const mytotal =  myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0) // accumlator ki value h ye hm per depend karti h 
// console.log(mytotal);


// arrow fun se : ---->
// const myNums =  [ 1,  2,3]
// const mytotal =  myNums.reduce( (acc,currval)=>acc + currval,0)
//     console.log(`acc: ${acc} and currval: ${currval}`)
// console.log(mytotal);





// why we use reduce :------>

// when we have more shoppingCart and want to (add) + price 

// total find kar liya  
// const shoppingCart = [
//     {
//         intemName: "js course",
//         price : 299
//     },
//     {
//         intemName: "css course",
//         price : 255
//     },
//     {
//         intemName: "java course",
//         price : 249
//     },
//     {
//         intemName: "python course",
//         price : 482
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item)=>(acc + item.price),0)
// console.log(priceToPay);

// bills ke price ko add kar diya h 

// how to flat an array ,convertiong 2d and 3d array into one d array 
// const arr =  [['zone_1', 'Zone_2'], ['zone_3','zone_4'], ['zone_5','zone_6'],['zone_7','zone_8']];
// let a  =  arr.reduce((accum, currval)=>accum.concat(currval))
// console.log(a);
// yha accume ki value + ya -nahi hori h isliye 0 nahi lagaya





// if we have nested array vo reduce method se nhi hoga vo es 16 me ak dfun h usse hoga 

// 9 Strings & String Methods : 

// 0 or more charcter written inside the quates " " / ' ' is called string. 



// let a =  "djfbdjvj";
// console.log(a);

// const gameName =  'amnesh's ' //error 
// const gameName = "amnesh's "
// console.log(gameName);
// second way to write the string--------->

// const gameName =  new String('amnesh ')




// methods of string : ---------->
// length :   ------------ >  describe lenght of string  it is also  count the space. 
// to upperCase  convert string in upper case  
// charAt :   describe in witch char string have 
// indexOf:  finding the string in string,  use find the index 

// extracting string  : ----->

// substring(start, end ) :  use to split the string  , similiar to slice.  , cont accept negetiv value 
// slice(start, end ) :  are also doing same work but it also have negetive value 
// substr(start,  length) :  similiar to slice(), main difference is second perameter specified the length of the extracting part 

// trim() :   trim starting or ending space ko remove kar deta h 
// trimStart():
// trimEnd():
// Replacde ()  use to replace value 
// includes():  kiya value availible h ki nahi 
// split ():  use to convert in array, use to split the value 
// Search() :  search string in string. 
// concat() :  join two or more string 

// Ex : 

// const gameName =  new String('amnesh')
// console.log(typeof(gameName)); //-------  object 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.substring(0,4)) agar isme - value de to ye  0  se start karta h -value ko ignore kar deta h 

// console.log(gameName.slice(0 , 4))// start position include end position not include.
// console.log(gameName.slice( -4, 3))  /// pichhe se start karta h 
// 012345678910          -2-1

// var str =  "Apple, Banana, kiwi, mango";
// console.log(str.slice(7, -2));
// let  a=  "   amnesh pal   "  ;
// console.log(a);


// focus we have error in that 
// var str =  "Apple, banana, kiwi";
// let a=  str.substr(0,4);
// console.log(a)


// console.log(a.trim); //error ye show kara h [Function: trim] iska mtlb ki () lagana h 
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());

// const url = "https://hitesh.com/amnesh%20pal"  
// console.log(url.replace('%20', '-'))
// console.log(url.includes('amnesh'))
// console.log(url.split('/'))


// const a  =  " i am the amnesh pal ";
// console.log(a.search( "Amnesh"));  //  -1 return karega kiuki ye case senesetve h 



// let a  =  "amnesh";
// let b  =  "pal";
// console.log(`${a}  ${b}`);
// console.log(a +" " +b );
// console.log(a.concat(b));
// console.log(a.concat(" " ,b));


// Converting string to an array----------->

// a string convert in array to a split method 
// var txt =  "a,b,c,d";
// console.log(txt)
// console.log(txt.split());
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));








// if you write  in browser console then 
// const a = new String("Amnesh");
// undefined
// a


// String {'Amnesh'}

// string id the collection of key value pair 
// 0: "A"
// 1: "m"
// 2: "n"
// 3: "e"
// 4: "s"
// 5: "h"
// length: 6[[Prototype]]: Stringanchor: ƒ anchor()length: 1name: "anchor"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]at: ƒ at()length: 1name: "at"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()length: 1name: "charCodeAt"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()length: 1name: "fontcolor"arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//     at Function.invokeGetter (<anonymous>:3:28)]caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//     at Function.invokeGetter (<anonymous>:3:28)][[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()length: 0name: "valueOf"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()length: 1name: "set __proto__"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0][[PrimitiveValue]]: ""[[PrimitiveValue]]: "Amnesh"





// date & time in js  -----------------------> 

// date ka type obj hota h 


// date obj created with new date constructor 

// date method (get and set )
// time method (get and set )

// new date(year, month, day, hours, minutes, second, millisecconds)   //  takes 7 arguments 


// let currDate =  new Date();
// console.log(typeof currDate); // object 
// // console.log(currDate)  //2024-05-31T08:52:11.119Z gerrn witch mean time 
// console.log(new Date());
// console.log(new Date().toString());// fri May 31 2024 14:25:33 GMT+0530 (India Standard Time)
// console.log(new Date().toDateString());// Fri May 31 2024
// console.log(new Date().toLocaleString())//31/5/2024, 2:24:42 pm





// date method :  Get  --->
// console.log(currDate.getFullYear())
// console.log(currDate.getMonth())
// console.log(currDate.getDate())
// console.log(currDate.getDay())    //firday -5 pe ata h




// Date.now()--------->
// console.log(Date.now())  // return the numeric value  1717145849414  from 1970 miliseconds 
// var a = new Date (2021, 0, 5)
// var a = new Date ("2021-01-14")//  yy-mm-dd
// var a = new Date ("01-14-2023") // mm/dd/yy
// console.log(a.toDateString())
// var a = new Date (2021, 0, 5, 20, 33, 30, 0)
// console.log(a.toLocaleString());//  5/1/2021, 8:33:30 pm

// Note :  js me month 0 se start hote h , 0 to 11  january is 0 and dec is 11 

//   y  m d  h  m  s
// var d  =  new Date (2021,0,5,10,33,0);
// console.log(d.toLocaleString());





// Time method :  get   ---> 

// const currtime =  new Date();
// console.log(currtime.getTime()); //1717150542849return the num since jan ,1, 1970
// console.log(currtime.getHours())
// console.log(currtime.getMinutes())
// console.log(currtime.getSeconds())
// console.log(currtime.getMilliseconds()) 



// Date method :  set   ---> 

// let currtime =  new Date();
//  console.log(currtime.setTime());
// console.log(currtime.setHours(5))
// // console.log(currtime.setMinutes(5))
// console.log(currtime.setSeconds(5))
// console.log(currtime.setMilliseconds(5)) 


// NaN
// NaN
// NaN
// NaN



// set Interval & set Timeout---------------->
// jab kuch time bad update karna hota h 


// set Timeout---------------->

// set time out allows us to run a fun once after the interval of time 


// alert("hello ");

// syntax 
// setTimeout(() => {

// }, timeout);


// document.write("hello")
// let a= setTimeout(() => {
//     alert ("i am inside of set time out ")
// }, 2000);   //2 second complete hone ke bad fun chalega 

// // console.log(a)
// clearTimeout(a);     // set time ki excution ko clear karne ke liye  set time vala fun nahi chal rha h 








// Set setInterval : ------------------------>

// set time out ak bar run karta h set intervel har ak second ke bad run karta 
// similar sentex as set time out 

// let timerId =  setInterval(() => {
//     // alert("hi");

// }, 3000);


// clear intervel : ---- >  set intervel ke excusion ko band karta h 


// let mycreatDate =  new Date("01-14-2023")   //  yha se aaj tak ki value 
// let myTimeStamp =  Date.now()
// console.log(myTimeStamp)
// console.log(mycreatDate.getTime());
// console.log(Date.now());   // seconds me 






// math obj ----> 



// const score =  400;
// console.log(score);

// // if we want the nujm 

// const balance =  new Number(100);
// console.log(balance);
// console.log(balance.toString());// string me convert ho  jayegab 
// console.log(balance.toFixed(2)) //  . ke bad 0 add karne ke liye 


// const a = 123.8966
// const a = 123.8966

// console.log(a.toPrecision(3)) //  round of karkega  neer by value ke 


// const hundreds   =  10000000;
// console.log(hundreds.toLocaleString());

// console.log(hundreds.toLocaleString('en-IN'));


// Math :  by defount library 
// console.log(Math.PI);
// console.log(Math.pow(2,3)) // 2*2*2
// console.log(Math.sqrt(25)) 
// console.log(Math.trunc(4.6))  // . ke phle vala num retuen karta  S
// console.log(Math) //  obj 
// console.log(Math.abs(-4));  //   retune the absulute positiv integer  - se   +  me karne ke liye  
// console.log(Math.abs(4)); //  ye change nah hoga 
// console.log(Math.round(4.3)); //  round off karke deta h value 
// console.log(Math.ceil(4.3));  //  apne aap control karne ke liye 4 se next value ke liye 
// console.log(Math.floor(4.9));  mtlb 4 vali vlue hi dega 
// console.log(Math.max(4,3,6,8));
// console.log(Math.min(4,3,6,8));


// console.log(Math.random())
// console.log(Math.random()*10 +1)
// console.log(Math.floor(Math.random()*10) +1 )

// if we want a range in 10 to 20: 

// const min  =  10;
// const  max  =  20 ;

// console.log(Math.floor(Math.random()*(max - min +1 )) + min)


// --------------------------------------------------------------------------------------------------------------------------------------------

// DOM :---------------------------------> 
// console.log(window);

// undefined
// console.log(window.document)

// undefined
// console.dir(document);  jab hidden cheje bbhi chahiye ho 
// VM510:1 #document

// document.getElementById("firstHeading").innerHTML = "<H1>abhishek</H1>"

// ocument.getElementById("title")
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.getElementById("title").id
// 'title'
// document.getElementById("title").class
// // undefined
// document.getElementById("title").className
// 'heading'
// document.getElementById("title").getAttribute
// ƒ getAttribute() { [native code] }

// document.getElementById("title").getAttribute("id")
// 'title'
// document.getElementById("title").getAttribute("class")
// 'heading'
// document.getElementById("title").setAttribute("class", "test")
// undefined
// document.getElementById("title").setAttribute("class", "test heading")
// undefined
// document.getElementById("title")
{/* <h1 id=​"title" class=​"test heading">​…​</h1>​
const title = document.getElementById("title")
// undefined */}
// title


// diffrence b/w textcontent, innerhtml, innerText
// title.textContent
// 'Dom learning  with amnehs pal test text '
// title.innerHTML
// 'Dom learning  with amnehs pal <span>test text</span> '
// title.innerText
// 'Dom learning with amnehs pal test text'

// title.innerText 
// 'Dom learning with amnehs pal'
// title.textContent // ye sara text provide karne ke liye 
// 'Dom learning  with amnehs pal test text '

// title.innerHTML
// 'Dom learning  with amnehs pal <span style="display: none;">test text</span> '

// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolore.​</h2>​
// document.querySelector('h1')
// <h1>​fjvnfejrejve​</h1>​


// document.querySelector('title')
// <title>​DOM​</title>​
// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('input[type="password"]')
// <input type=​"password">​


// myul.querySelector('li')
// <li>​…​</li>​
// const turnGreen = myul.querySelector('li')
// undefined

// turnGreen.style.backgroundColor = 'green'
// 'green'
// turnGreen.style.padd = 'green'
// 'green'
// turnGreen.style.padding = '10px'
// '10px'





// QuerySelctorAll :----->  

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]
// const tempLiList = document.querySelectorAll('li')
// undefined

// tempLiList
// NodeList(3) [li, li, li]

// tempLiList.style.color = 'green'
// VM3734:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:24
// (anonymous) @ VM3734:1

// tempLiList[0].style.color = 'green'
// 'green'



// foreach  :  ------>
// tempLiList.forEach((l)=>{l.style.backgroundColor='green'})
// undefined





// GetElementByClassName : --------------->


// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// const tempClassList = document.getElementsByClassName('list-item')
// undefined

// // isme hm sare eleent ko access nahi kar sakte kiuki isme foreach method nahi h 
// tempClassList.forEach(function(li){
//     console.log(li))
// })


// to hm isse convert karenege arry me 

// Array.from(tempClassList)  //  array convert 
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]


// const convertedArray =  Array.from(tempClassList)
// undefined
// convertedArray.forEach((li)=>{li.style.color= 'orange'})
// undefined




// wikipedia: --->
// document.querySelectorAll("h2")
// NodeList(5) [h2.vector-pinnable-header-label, h2, h2, h2, h2]
// const allH2= document.querySelectorAll("h2")
// undefined

// allH2[1].innerText
// 'Early life[edit]'


// const allH2= document.querySelectorAll("h2")
// undefined
// allH2[1].innerText
// 'Early life[edit]'
// const allH2= document.querySelectorAll("h2")
// undefined

// document.querySelectorAll("h2")
// NodeList(5) [h2.vector-pinnable-header-label, h2, h2, h2, h2]0: h2.vector-pinnable-header-label1: h22: h23: h24: h2length: 5[[Prototype]]: NodeList
// document.querySelectorAll('.mw-headline')

// NodeList(8) [span#Early_life.mw-headline, span#Career.mw-headline, span#Netscape.mw-headline, span#Mozilla.mw-headline, span#Appointment_to_CEO_and_resignation.mw-headline, span#Brave_Software.mw-headline, span#References.mw-headline, span#External_links.mw-headline]0: span#Early_life.mw-headline1: span#Career.mw-headline2: span#Netscape.mw-headline3: span#Mozilla.mw-headline4: span#Appointment_to_CEO_and_resignation.mw-headline5: span#Brave_Software.mw-headline6: span#References.mw-headline7: span#External_links.mw-headlinelength: 8[[Prototype]]: NodeList
// const myh2= document.querySelectorAll('.mw-headline')
// undefined

// myh2[0].innerText
// 'Early life'

// myh2.forEach((h)=>{h.style.color = 'red'})
// undefined

// myh2.forEach((h)=>{
//     h.style.color = 'red';
//     h.style.backgroundColor= '10px';
//     h.innerText = "hitesh"
//                   })








// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// event --- --- --- ----->




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// Global variables : --------------->
// can  assess from anyware within the program 

// let name = "John"; // Global variable 

// function sayHello() { 
//       console.log("Hello " + name); 
// } 

// sayHello(); // Output: "Hello John"



// Local variable : ------------------>
// can be assess within the function/ block in witch they are defined.  
// function sayHello() { 
//     let name = "John"; // Local variable 

//     console.log("Hello " + name); 
// } 


// Nested Scope:--------> 

// When a function is defined within another function, 
// it has access to variables defined in the parent function.
//  This is known as nested scope.

// function outer() { 
//     let name = "John"; // Outer function variable 

//     function inner() { 
//         console.log("Hello " + name); 
//     } 

//     inner(); // Output: "Hello John" 
// } 
// outer();


// Block Scope: 
// ES6 introduced the let and const keywords, which allow variables to have block scope.

// function sayHello() { 
//     let name = "John"; // Function variable 

//     if (true) { 
//         let message = "Hello"; // Block variable 
//         // var message =  "hello "  //  ye chanlega only
//         console.log(message + " " + name);  
//         // Output: "Hello John" 
//     } 

//     console.log(message);  
//     // Output: Uncaught ReferenceError:  
//     // message is not defined 
// } 
// sayHello();



// lexical scoping/ static scope ----------------->
// if variable is defined outside a fun, and it is automatically accessible inside nested fun. is called lexical Scope .
// the lexical scope is used to determine the accessibility of variables and functions within a program.



// function outer(){
//     let username =  "hitesh"
//     function inner(){
//         console.log("inner", username);
//     }
//     inner()
//     }
//     outer()


// when we have a function and inside fun we have two more fun so we cant share data in that fuction 

// function outer(){
//     let username =  "hitesh"

//     function inner(){
//         let secret =  "my123"
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         console.log(secret); //   bhai bhai apas me share nahi kar sakte 
//     }
//     inner()
//     innerTwo()
//     }
//     outer()



// function outer(){
// let username =  "hitesh"  
// console.log("OUTER", secret);   //  no access  chote bado se mang sakte h but bade choto se nahi mang sakte 
// function inner(){
//     let secret =  "my123"
//     console.log("inner", username);
// }
// function innerTwo(){
//     console.log("innerTwo", username);
//      // console.log(secret);
// }
// inner()
// innerTwo()
// }
// outer()








// 8 What is a closure? IMP


//  A closure is the combination of a function bundled together with refenence to its surrounding state.(the lexical environmen).
// in other word : --->
// clouser gives you access to an outer function's scope from an inner funcation. 



// function makeFunc(){
// const name =  "mozilla";
// function displayName(){
//     console.log(name)
// }
// return displayName;
// }

// const myFunc =  makeFunc();
// myFunc();


// yha per only displayname nahi return hora h pura pura lexical scope jara h 


// lexical ----->

// function outer(){
//     let username =  "hitesh"
//     function inner(){
//         console.log("inner", username);
//     }
//     inner()
//     }
//     outer()


// closour example : ------ > // main.html



// 3 Explain how ‘this’ works in Java script

// this keyword refers to the current context or scope.

// const user = {
//     username: "amnesh",
//     price: 999,

//     welcomeMassage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMassage()
// user.username= "sam"   // yha current context updaagte ho rha h 
// user.welcomeMassage()

// console.log(this)  // return empty if you check in browser return window 

// browser ke ander jo object hota h vo window obj hota h 


// const chai = ()=>{
//     let username =  "hitesh"
//     console.log(this);
// }
// chai() 

// yha pe arraw function me  bhi this ka  use ho rha h  



// {} ---- > isme return keyword likhna padega 

// Explicitly return () ---------- > 
// const addTwo =  (num1 , num2 )=>{
// return     num1+num2
// }
// console.log(addTwo(3,4))


// or 
// implecit return 
// const addTwo =  (num1,num2 )=> num1+num2
// console.log(addTwo(3,4))

// return keyword nahi likhana padega 
//  const addTwo =  (num1,num2 )=>(num1+num2)
//  console.log(addTwo(3,4))

// const addTwo =  (num1, num2)=>({Username: "hitesh"})
// console.log(addTwo(3,4));


// Using this in a method :----------->
// Using this in a Function: ----------> 
//  Using this alone---------->
// 4. Implicit Binding------->
// Explicit Binding --------->
// 6. Default Binding---------->
// 7. Arrow Function Binding --------->


// Using this in a method :----------->
// const person = {
//     name: 'John',
//     age: 30,
//     fun() {
//         console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
//     };
//     person.fun(); // Output: Hello, my name is John and I am 30 years old.







// 11 Destructuring and Spread Operator

// destructuring :       unpack value from an array 
                     //  unpack property from object    into distinct variable 

// destructring assignment is used to unpack value from an arry or property from Object, into distinct variable. 


// let arr = [3,5,8,9,12,14]

// no need to do this -->
// let a = arr[0];
// let b = arr[1]; 

// let[a,b]=  arr
// console.log(a,b)

// let [a, b, c, d, ...rest] = arr //  space dena padega 
// console.log(a, b, c, d, rest); 

// let [a, , b, ...rest] = arr
// console.log(a, b, rest )

// similarly we can destructure object on the left hand side of the assignment 

// const obj = {a :1, b:2}
// const{a,b} = obj;
// console.log(a,b)


// const {a, b} = {a:2,b:4}
// console.log(a,b);



// spread operator: ----------->

// in spread operator we use ...and  that access all element in array. 


// let  a =  [1,2,3,"a"];
// console.log(a);

// let  b=  [4,5,6];
// let c=  [...a ,...b]
// console.log(c);


// syncronous : jo on the spot available ho jate h or ak sync me chalte h sencronous formate me 

// Asyncronous :  jo promis witten karte h.  outside data fatch kara jata h. because inke result ko time lag sakte h ane me   

// await :   only valied for async fun means i am waiting 

// callback hell : --> callback ke ander callback fir call back ke ander call back is called callback hell 

// 13 Promises: ----- >

// syncroios : on the spot result provide karta h 
// let a =  5; 
// let b =  6;
// let result =  a+b;  

// async function getData(){
//     let resultFromServer =  await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );
//     console.log(await resultFromServer.json()); // json convert karne me delay karta h isliye lagana padta h 
// }

// getData();

// isi kam ko then catch method se karke dekhte h 

// fetch("https://jsonplaceholder.typicode.com/users")   // ye chiz 
// .then((data )=>{
//     console.log(data); //  yha mil jayegi 
// }).catch((error )=>{
//     console.log(error);
// });



// the solution to the callback hell is promises   
// a promise is a promise of code execution, the code either executs or fails, in both the cases the subscriber will be nortifid
// Promise is an object representing the eventualy completion or failure of asynchronous operation 


// // promise has 3 state :
// pending: initial state neither fulfilled nor rejected
// fulfill: operation completed successfully 
// rejected: operation failed

// fetch('https://somthing.com').then().catch().finally()
// syntex :  
// promises has two part resolve or rejection 

// let promise = new promise(function(resolve, reject){
//     // do an async task 
        // DB calls ,  cryptography, network call 
// }
// );


// let promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve();  // Resolves the promise after 1000ms
//     }, 1000);
// });

// promiseOne.then(function() {
//     console.log("Promise consumed");
// });


// 2nd :----------->

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// }).then(function(){        // resolve hone ke bad ye task chalega 
//     console.log("Async 2 resolve")
// })


// 3rd :  


// const promiseThree =  new promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})   // jo bhi perametter pass karoge vo peramettr 
//     },1000)
// })
// promiseThree.then(function(user){    // yha mill jayeg 
//     console.log(user);
// })



// 4th 

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error =false
//         if(!error){
//             resolve({username:"hitesh", password : "123"})
//         }
//         else{
//             reject("ERROR: something went wrong")
//         }
//     },1000)

// })
// promiseFour.then( (user)=>{
//     console.log(user);
//     return user.username

// } ).then((username)=>{
// console.log(username)
// }).catch((error )=>{   ///  chaning 
//     console.log(error );
// }).finally(()=>{console.log("the promis is either resolve or rejected ")}) // ye to hamesa chalega or ye batata h ki promis complete ho gaya 


// 5th 


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//                 let error = true  
//                 if(!error){
//                     resolve({username:"js ", password : "123"})
//                 }
//                 else{
//                     reject("ERROR: js  went wrong")
//                 }
//             },1000)
// });
// // thoda wait karta h h kam ke hone ka jab kam ho jta h to error de dete h isme hm catch handle nahi karte h 
// async function consumePromiseFive(){ 
//     // const response =   await promiseFive  
//     // console.log(response)          
//     try {
//     const response =   await promiseFive  
//     console.log(response); 
//     } catch (error) {
//         console.log(error);      
//     }
// }
// consumePromiseFive()





// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // ye json convert hone me tie lagta h 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()



// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.



// fetch () :  global method start the proess of fetching a resource from the network, aand returning the promise.

// note :
// agar hamne promis se hamne error code kari vha se request code a gya 404  to vo resolve me milga ki reject me milega?
// vo hme as a response milega vo koi error nahi h. 

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permission issue or similar). 
// A fetch() promise does not reject on http erro (404, ect) instead, a then() handler must check the response.ok and/or response.status properties.

// go to digRAM ----> chai with code 


// Syncronous task :  jo ak hi sink me chalte h use syncronous task bolte h 

// async : // 14 Async Await : jo kuch time bad result dete h. 

// project with async :  video chai with code 



// what is async :
// what is awaait :
// how async await works behind the scenes.async
// example of using async/ await 
// error handling 
// interview
// async await vs promise.then/ . catch  
// async fun always return the promise 



// Async/ Await: ------> 
// kisi bhe function ko async bana sakte h or uske bad proiss ko await kar sakte h 
// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();


// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();


// .then .then .... vali problem ko solve karne ke liye hm async await ka use karte h 
// there is a special syntex to work with promises in js. 
// a function can be made async by using async keyword like this: 

// async funtion amnesh(){
//     return 5;
// }

// An async function alwase returns a promise, other value are wrapped in a promise automaticlly 
// we can do somthing like this :

// amnesh().then (alert)

// so , async ensures that the function returns a promise and wraps non promises in it 


// The Await keyword : ----->

// there is another keyword called await that works only inside async function 
// let value = await promise ;
// the await keyword makes js wait until the promise settles and returns its value.

// its just a more elegant syntex of getting the promise result than (promise.then).
// its easier to read and write .
// Ex : 
 
// async function harry() {
//     return 5
// }

// harry().then((x)=>{
//     console.log(x)
// })


// agar m async hata don to . then  nahi chalga 
//  function harry() {
//     return 5
// }

// harry().then((x)=>{
//     console.log(x)
// })

// 15 Exception Handling/ error handling : 

// The try statement defines a code block to run (to try).
// The catch statement :  handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.



// let a = prompt("Enter the num ")  // ye string me num add kara h to hme inhe intiger me lena padega 

// let b =  prompt("Enter the second num ") 
// if(isNaN(a)||isNaN(b)){

//     // error throw   kate h to script vahi ruk jati h 
//     throw SyntaxError("this is not allow ") //  bhot sari error js me define hoti h 
// }
// let sum = parseInt(a)+ parseInt(b)
// console.log("the num is ", sum)

// // x= 6;
// try {
//     console.log("the sum is ", sum*x)
// } catch (error) {
//     console.log("error a gya bhai")
// }

// finally { // ye jarur chalega 
//     console.log("files ko close kar dega and db connection being close ")
// }

// Interview question 
// jab finaly chalega hi to finaly ki jarurat kiya h  ?
// jab hm function me hote h to hm function ko return karte h to use bad ka code nahi chalgta h to iske liye hm finaly ka use kargte h jisme chalta h 

// let a = prompt("Enter the num ")  // ye string me num add kara h to hme inhe intiger me lena padega 

// let b =  prompt("Enter the second num ") 
// if(isNaN(a)||isNaN(b)){

//     // error throw   kate h to script vahi ruk jati h 
//     throw SyntaxError("this is not allow ") //  bhot sari error js me define hoti h 
// }
// let sum = parseInt(a)+ parseInt(b)
// console.log("the num is ", sum)
// function main(){
// x= 6;
// try {
//     console.log("the sum is ", sum*x)
//     return true
// } catch (error) {
//     console.log("error a gya bhai")
//     return false 
// }

// finally { // ye jarur chalega 
// // ye vala console nahi chalega agar finally nahi lagayennge to 
//     console.log("files ko close kar dega and db connection being close ")
// } 
// }

// let c =  main()



// imp // hoisting :-------------------->
//  sabhi declaration ko current scope ke top per le jata h 
// default behavior of moving all declarations to the top of the current scope 
// variable can be referenced before they are declared in js 

// console.log(a);  // undefiend print hoga  // agagr hm var a nivhe bhi define kar rahe h to vo access kar le rha h 
// greet ()       // sari declaration top per aati hui pratit hoti h
// function greet (){
//     console.log("good morning ");
// }
// // var a; 
// var a =  9;  // declaration hoisted to the top but initialization is not 
// console.log(a)



// Note : 
// js only hoists declaration, not initialization the variable will be undefined until the line where its initialize is reached 


// hoisting with let and var :

// with let and var hoisting is different 

// console.log( num)   //  error if let or const 
// let num = 6;


// console.log( num)   //  error if let or const 
// const  num = 6;
// function expression and class expression are not hoisted 


// console.log(a)
// greet()
// let  greet =  function greet(){
//     console.log("good morning")
// }
// var a =  5;
// console.log(a);

// to avoid bugs, alwase declare all variable at the beginning of every scope . 
// since this is how js interpretes the ConvolverNode, it is alwase a good rule 


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 16 Object Oriented Programming: ------->

// js and classes  : 
 
// js me classess hoti h ? -- > nahi hoti 

// oop  :   ye ak programming paradie h mtlb code likhne ka tarika 

// object: collection of property and method 
// -  toLowerCase 

// why use oop : 

// parts of oop :
// object literal{}

// constructor function 
// prototype 
// classes 
// instances (new, this)

// 4 pillers  -- >  chat gpt 
// abstraction  detail hide karna ex fetch ()     
// encapsulation  rapup data 
// inheritance 
// polimorphism one method do many works 


// object litrls 

// const user = {
//     username : "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("got user details from database ")
//         // console.log(`username: ${username}`);  // error dega kiuki ise pata hi nah h ki kon se user name kei batg hori h 
//         // console.log(`username: ${this.username}`);
//            console.log(this); //  ise pata h ki current cotex e kiya kiya rkha h 
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  //  window hota h





// Constructor function :  call itsself  // new instence / new copy provide karta h 

// Sometimes we need to create many objects of the same type.
// function Person(first, last, age, eye) {
//     this.firstName = first;  //  this has no value 
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
// //   Now we can use new Person() to create many new Person objects:
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");
// const mySelf = new Person("Johnny", "Rally", 22, "green");




// const promis =  new Promise()  // new keywod constructor h 
// const date =  new Date();

// new keyword use karne per empty obj create hota h jise instence bolte h 
// fir constructor fun call hota h 
// this keyword me argument inject ho jata h 
// forth step in fun me mil jata h 


// function User(username, loginCount, isLoggedIn){
   
//    // property :
//     this.username = username;
//     this.loginCount= loginCount;
//     this.isLoggedIn =  isLoggedIn
//        // ise likhne ki jarurat nahi h by defoult hota h  (implecitly defind )

// // method 
// this.greeting = function(){
//     console.log(`welcome ${this.username}`)
//     return this 
// }
// }
// const userOne =  User("hitesh", 12,true)
// const userTwo = User("ram", 11,false) //   yha per value override hori h

// isliye new keyword ka use karte h 
 

// const userOne = new User("hitesh", 12,true)
// const userTwo = new User("ram", 11,false)
// console.log(userOne);//   yha per value override hori h
// console.log(userTwo);  





// Built-in JavaScript Constructors
// JavaScript has built-in constructors for all native objects:

// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object

// new keyword :

// js class ke through constructor fun nhi deti h new keyword ke through constructor fun deti h 


// function createUser(username, price){
//         this.username =  username
//         this.price= price
// }
// createUser.prototype.printMe= function(){
//         console.log(`price is ${this.price}`);
// }

// // const chai  =  createUser("chai", 25)
// // const tea  =  createUser("tea", 250)

// const chai  = new createUser("chai", 25)
// const tea  = new createUser("tea", 250)
// chai.printMe()


/*

here what happens behind the scenes when the new keyword is used:

A new object is created: the new keyword initiates the creation of a new js object.

A prototype is linked: the newly creted object gets linked to the prototype property of the constructor function.
this means that it has access to properties and method  defined on the constructors prototype.

the constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is 
specified fro the constructor, j assumes this the newly created object, to be the intended return value.


the new object is retuned: After te costrctor fnction has been called, if it doesnt return a non premitive value (object, array, fun ) the newly created object is retuned

*/









// truelenth() ---  is property 
// truelenth ---- method 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Prototype :---------------->  
// Every object in JavaScript has a built-in property, which is called its prototype. 

// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain

// const myObject = {
//         city: "Madrid",
//         greet() {
//           console.log(`Greetings from ${this.city}`);
//           console.log(  myObject) //  pop up list of the all property available in this obj 
//         },
//       };
//       myObject.greet();
    

//       __defineGetter__
//       __defineSetter__
//       __lookupGetter__
//       __lookupSetter__
//       __proto__
//       city
//       constructor
//       greet
//       hasOwnProperty
//       isPrototypeOf
//       propertyIsEnumerable
//       toLocaleString
//       toString
//       valueOf


                //      prototype object 
                //              |       
                //              |         
                //            object 
                
// Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
// By definition, null has no prototype and acts as the final link in this prototype chain. 



// prototype Inheritence : ------> 
// Objects inherit the properties and the methods from the other objects.
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype




// Prototypal Inheritance
// Classical Inheritance
// Functional Inheritance



// Prototypal Inheritance:------------>
// Objects inherit from other objects through their prototypes.
// Each object has a prototype, properties, and methods inherited from that prototype. 


// let animal = {
//         eats: true,
// };
// let rabbit = {
//         jumps : true,
// };

// rabbit.__proto__ =  animal;
// console.log(rabbit.eats);
// console.log(rabbit.jumps)


// Classical Inheritance--------------->
// Introduced in ECMAScript6 (ES6) with the class keyword. Uses a class-based approach similar to other programming languages like Java or C++. 
// Example: Demonstrating class inheritance and method overloading in JavaScript.

// class automobile {
//         constructor(name, cc) {
//             this.name = name;
//             this.cc = cc;
//         }
//         engine() { 
//         //          console.log(this.name, "has ", this.cc, "cc engine");
// }
//     }
//     class car extends automobile {
//         engine() { 
//                   console.log(this.name, "has ", this.cc, "cc engine");
//         }
//     }
//     let carz = new car('Rex', "1149");
//     carz.engine();




// Inheritance in static members:   
// Static members belong to their own class and not to their instances because inheritance also applies to the static members of the class.

// Example: Demonstrating the inheritance in static members in JavaScript.


// class Automobile {
//     static staticMethod() {
//         return 'Automobile static method';
//     }
// }
// class car extends Automobile {
//     static staticMethod() {
//         return 'Car static method';
//     }
// }
 
// console.log(Automobile.staticMethod());
// console.log(car.staticMethod());


// Inheritance using the super keyword
// Super keyword is used in classes to call the properties and methods of the parent class.


// Ex 


// Functional Inheritance
// Objects inherit properties and methods from other objects through function constructors

// The methods through which functional inheritance is achieved in JavaScript
// Constructor overriding
// Inheritance from Built-in data types


// Constructor overriding



// prototype learn ith chai or code  : using prototype we can change the propery of overall array 

// classes and object : -->
// JavaScript Classes are templates for JavaScript Objects.
// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.


// Use the keyword class to create a class.
//  class is the collection of constructor(), method 

// Syntax
// class ClassName {
//   constructor() { ... }
//    method_1() { ... }
//    method_2() { ... }
//    method_3() { ... }
// }


// class Car {
//         constructor(name, year) {
//           this.name = name;
//           this.year = year;
//         }
//       }

// //       the Car class to create two Car objects.
// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);


// console.log(myCar1)
// console.log(myCar2)




// 10 What is currying?
// curry is the high oreder fun 
// you take a function with multiple arguments, and you turn it into smaller sequential functions where you pass one argument at a time.

                                //   turn 
// multiple argument fun   ----------------->  smaller  sequential fun 
                                //  where we pass 
                                //  one argument at a time        
// normal fun 
// function add(a,b,c){
//         return a+b+c;
// }
// console.log(add(2,5,10));


// m ye add operation jab hi karna chahata hu jab mere pass tino permiter availaible h 
// to h curry use kar sakte h 

// function add(a){
//         return function (b){
//                 return function (c){
//                         return a+b+c;
//                 };
//         };
// };
// console.log(add(1)(2)(3));

// in short form  :

// const add = (a) =>(b)=>(c)=> a+b+c;
// console.log(add(1)(2)(3));


// practical use : ---->  in mail 

// function sendAutoEmail(to){
//         return function (subject){
//                 return function (body){
//                         console.log(`Sending Email to ${to} with the subject ${subject}: ${body}`)
//                 }
//         }
// }

// let step1 = sendAutoEmail("piyushgarg.dev@gmail.com");
// let step2 = step1("New Order Confirmation");
// step2("hey Piyush, HEre is soething for you ")


// sort form  : 
// const sendAutoEmail = (to )=>(subject)=>(body)=>  console.log(`Sending Email to ${to} with the subject ${subject}: ${body}`)

// let step1 = sendAutoEmail("piyushgarg.dev@gmail.com");
// let step2 = step1("New Order Confirmation");
// step2("hey Piyush, Here is sothing for you")


// 11 What is composition?

// composition is the powerfull technique that allow developer to combine  multiple fun into single fun 

// add and then square 
// function add (a, b ){
//         return a+b;
// }
// function square (val){
//         return val*val;
// }

// const addResult =  add(2,3);
// console.log(square(addResult));




// add and then square 


// Composition EX : 

// function add (a, b ){
//         return a+b;
// }
// function square (val){
//         return val*val;
// }

// function multiply (a,b){
//         return a*b;
// }

// function composeTwoFunction(fn1, fn2){
//         return function(a,b){
//                 return fn2(fn1(a,b));
//         };
// }

// // //const task =  composeTwoFunction(multiply, square);
// const task =  composeTwoFunction(add, square);
// console.log(task(2,3))



// E6 ---->

// function add (a, b ){
//         return a+b;
// }
// function square (val){
//         return val*val;
// }
// function multiply (a,b){
//         return a*b;
// }
// const c2f =  (fn1, fn2) => (a,b) => fn2(fn1(a,b));
        
// // //const task =  composeTwoFunction(multiply, square);
// const task =  c2f(add, square);
// console.log(task(2,3))






// 10 What is debouncing and throttling?
// Throttling is a similar technique to debouncing, but instead of delaying the execution of a function, it limits the rate at which a function.
// maintain the performance

// normal count      bar bar fun call hona 
// throttle Count    ak set time intervel ke bad chalga / after fixed intervel of time 
// jab time intervel ke bad data dikhao 

// ex samne vala firing kar rh h to ak set intervel ke bad firing karna 2 min 



// debounce count      jab koi event fire kar rahe h to jb event rokte h jab chalta h jase againg event chalega to debounce ruk jayega 

// jab pura nam likh to jab o/p show karo 

// ex : army ka head bolta h jab tak vo ruk nahi jate jab tak fire mat karna jase vo ruk jaye to 2 mint tak fire karena 
// agar vo 2 mint se phle firing start kar de to tum ruk jana 


// where you delay the execution of a function until after a certain amount of time has passed.



                // document.getElementById("myid").disabled = true ;





// normal  ----->  ye application ki performance ko doun krega

// let counter =  0 ; 
// function getData(){
//         console.log("fetching Data " + counter ++)
// }

// debouncing ------> 

// let counter =  0 ; 
// function getData(){
//         console.log("fetching Data " + counter ++)
// }

// function myDebounce(call , d){
//         let timer;
//         return function(...args){
//                 if(timer)clearTimeout(timer);
//              timer=   setTimeout(()=>{
//                         call();
//                 },d);

//         }
// }


// const BetterFunction = myDebounce(getData, 1000)


// throttling: -------> 

// Throttling is a similar technique to debouncing, but instead of delaying the execution of a function, it limits the rate at which a function.
// const mythrottle=(fn, d)=>{
      
//         return function(...args){
//                 document.getElementById("myid").disabled = true ;
//              setTimeout(()=>{
//                         fn();
//                 },d);

//         }
// }

// const newFun = mythrottle(()=>{
//         document.getElementById("myid").disabled = false  ;

//         console.log("user Clicked ")
// },5000)




// ajax -----> AJAX = Asynchronous JavaScript And XML. 

// AJAX is not a programming language.

// AJAX just uses a combination of:

// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)



// AJAX is a developer's dream, because you can:

// Read data from a web server - after the page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background




// 13  Api   :Application Programming Interface

// contract of providing services between two application. 
// communicate with each other using requests and responses.

// tweeter api 
// weather api 
// google maps Api 




// Fetch API:------------------->
// The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.

// js cb be used to send and retrive information from the network when needed (AJAX)

// ajax: bina load kare page update karna 

// Fetch API

// fetch is use to get data  over the network 
// let promise  =  fetch (fetch [option ]) // without option a get request is sent 



// example : 

// let p  = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((value1)=>{
//         return value1.json()
// }).then((value2)=>{
//         console.log(value2)
// })



// Getting a responce is a 2 stage prosess


// 1) // An object of response class containing "status" & "ok" properties 

// status - the http sttatus code eg 200.
// ok -  boolean true if the HTTP status code is 200 - 299     // mtlb inke bich me a rha h  to apka data sahi h 300, 400 ataa h to error h 


// 2) After that we need to call another method to access the body in fiffrent forment: 

// Response.text()------>   read and return the text 
// Response.json() ------->  response as json 
// ak time per ak hi chalega ya to json ya text 


// Other method include response from Data(), Other method include response from Data(),  response.arrayBuffer() 

// NOTE--  we can use one body reading method example if we have already get the response with response.text() then response.json() not work 

// let p  = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response)=>{
//         console.log(response.status)     //200
//         console.log(response.ok)     // true 
//         // console.log(response.text )
//         return response.json()
        
// }).then((value2)=>{
//         console.log(value2)
// })



// Response headers :  --- >

// the rsopnse header are available in response Headers

// request header  :  

// to set a request header in fetch , we can use the header option.

// let res =  fetch(url ,  {
//         headers :  {
//                 authentication : 'secret'
//         }
// });


// high order and  callbacks in function :------>
// a function takes a function as an arguments 

// ak function , function ko hi as a arguments leta h use high order function bolte h 

// function add(a,b,cb){
//       let result  =a+b ;
//       cb(result);
// }
// add(2,4,(val)=> console.log(val))
// add(6,4,(result)=> console.log(result))

// another way 


// function add(a,b,cb){
//         let result  =a+b ;
//         cb(result);

//         return () => console.log(result);
//   }
// let resultFunction =  add(2,4,()=>{});
// resultFunction();
  

// it is use in plce of promisis but we face callback hall problem so we start to use promisis 
  
// setTimeout is the high oeder fuction you know about that 


// pure fun :---------------->

// functions in JavaScript that produce the same output for a particular input every time they are called.
// a function that is not dependent on the external factor 

// function calculate (num1,  num2){
//         //console.log(num1*num2 ) // ye bhi hamara impure function h kiuki console.log bhar se access hota h 
//         return num1 *num2;
// }
// const result =  calculate(4,6)
// console.log(result )



// impure function  :  jiska output menupulate karne ke liye ya lane ke liye external fector per depend hota h 

// const discount =  25 ;
// function calculateDis(price){
//         return price-discount;   // 
// }
// let a =  calculateDis(25)
// console.log(a)




// call ,apply , bind in js 

// call :  // function borrowing 

// let userDetails = {
//         name :"amnehs ",
//         age :  28,
//         Designation :  "software Engneer ",
//         printdetails:  function(){
//                 // console.log(name )// ye work nahi karega 
//                 // console.log(this.name)
//                 console.log(this); //  // ye this userdetails2 ko access kare to hm call method ka use karenge 

//         }
// }
// // userDetails.printdetails();

// let userDetails2 = {
//         name :"abhi ",
//         age :  29,
//         Designation :  "software developer  ",
//         printdetails:  function(){
//         }
// }

// // function borrowing 
// userDetails.printdetails.call(userDetails2)    // yha this userDetails2 ko access kar rha h 




// in another case  : 
// agar function bhar ho to scope ke 

// is bar print details dondo me hep karega  


// let userDetails = {
//         name :"amnesh ",
//         age :  28,
//         Designation :  "software Engneer ",  
// }
// let printdetails =  function(){
//         console.log(this); 
// }
// printdetails.call(userDetails);


// let userDetails2 = {
//         name :"abhi ",
//         age :  29,
//         Designation :  "software developer  ",    
// }
// printdetails.call(userDetails2)



// apply : ------>
// The apply() method is similar to the call() method
// The apply() method takes arguments as an array.

// let userDetails = {
//         name :"amnesh ",
//         age :  28,
//         Designation :  "software Engneer ",  
// }
// let printdetails =  function(state, country){
//         console.log(this.name + " "+ state+ " " + country); 
// }
// printdetails.call(userDetails, "Delhi", "India");

// let userDetails2 = {
//         name :"abhi ",
//         age :  29,
//         Designation :  "software developer  ",    
// }
// printdetails.call(userDetails2, "Delhi", "India ")
// printdetails.apply(userDetails2, ["Delhi", "India "]) //  isme hm array ki form me rakhte h 


// bind : ----------->

// bind is similiar to call fun but isme hm ak coppy bana lete h bad me invok karte 
// let userDetails = {
//         name :"amnesh ",
//         age :  28,
//         Designation :  "software Engneer ",  
// }
// let printdetails =  function(state, country){
//         console.log(this.name + " "+ state+ " " + country); 
// }
// printdetails.call(userDetails, "Delhi", "India");

// let userDetails2 = {
//         name :"abhi ",
//         age :  29,
//         Designation :  "software developer  ",    
// }
// // printdetails.call(userDetails2, "Delhi", "India ")
// // printdetails.apply(userDetails2, ["Delhi", "India "]) //  isme hm array ki form me rakhte h 
// // bind :  

// let newfun =  printDetails.bind(userDetails,"Delhi", "India")
// newfun();



// 12 Tricky javascript context questions


// let num =  1; //------> need to declare variable.
// console.log(num);
// console(num +1 );  // ----> error

// let name =  "amnesh";  // '' // -----> reperesent string.
// console.log(name );

// name =  "abhi";  // '' // -----> agar same variable use karenge to againg name mension karne ki jarurat nahi h
// console.log(name );

// let name =  "amnesh's wife ";
// console.log(name);


