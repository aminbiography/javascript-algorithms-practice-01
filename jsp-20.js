// what is programming language in computer science? #
// A programming language is a set of instructions and syntax used to create software programs, scripts, and applications. 
// It acts as a medium of communication between the developer and the computer, allowing the developer to give instructions to the computer in a language it can understand and execute.

// Classification of programming language? #
// machine language. Ex- Binary digits, which the computer's central processing unit (CPU) interprets and executes.
// assembly language. EX-A program for converting instructions written in low-level assembly code into relocatable machine code and generating along information for the loader. "EAX," "EBX" and "ECX" are the variables.  
// High-level language. Ex-Python, Java, C++, JavaScript, Ruby, Swift, PHP, C#, etc.

// Types of programming languages? #
// Object-Oriented Programming (OOP) languages (e.g. Java, Python, Ruby)
// Procedural languages (e.g. C, Pascal)
// Functional languages (e.g. Haskell, Lisp)
// Scripting languages (e.g. JavaScript, Perl, PHP)
// Markup languages (e.g. HTML, XML)
// Database programming languages (e.g. SQL)


// what is javascript? #
// a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

// How JavaScript works? #
// JavaScript works as a scripting language in web browsers to add interactivity and dynamic behavior to web pages. 
// The HTML and CSS code defines the structure and styling of a web page.
// JavaScript works by being included in HTML pages and interacting with the Document Object Model (DOM) of the web page, allowing it to dynamically update the content and style of the page in response to user interactions and server requests.

// How to declare variables? #
// To declare variables in programming, you need to specify the name and type of the variable and assign a value to it. The syntax varies depending on the programming language you're using:
// In Python:
// variable_name = value
// In Java:
// data_type variable_name = value;
// In C:
// data_type variable_name = value;
// In JavaScript:
// var variable_name = value;
// let variable_name = value;
// const variable_name = value;

// How to change or update the value of a variable javascript? #
// In JavaScript, we can change the value of a variable by re-assigning a new value to it:
// let x = 5;
// console.log(x); // Output: 5
// x = 10;
// console.log(x); // Output: 10

// What are variables? #
//  vari + able = variable, 
//  are three types.

//  numeric --
//  var price = 10;
//  var age = 18;
//  var tempareture = 26;

//  string --
//  var name = 'jam mia';
//  var name = '10';
//  var area = 'dhaka';

//  boolean --
//  var serious = 'true';
//  var single = 'false';
//  var student = 'true';

// variable output or summetion --
// var onionPrice = 50;
// var eggPrice = 40;

// console.log(onionPrice);
// terminal-50

// console.log(eggPrice);
// terminal-40

// console.log(onionPrice+eggPrice);
// terminal-90

// var totalPrice = (onionPrice+eggPrice);
// console.log(totalPrice);
//  terminal-90











// 20-1 Module Introduction and Concept Recap/////////////////////////////


// Array-First-add
// var person = ['sodu', 'jodu', 'kodu', 'bodu'];
// person.unshift('rodu');
// console.log(person);
// terminal-['rodu''sodu', 'jodu', 'kodu', 'bodu']

// Array-First remove
// var person = ['sodu', 'jodu', 'kodu', 'bodu'];
// person.shift('rodu');
// console.log(person);
// terminal-['jodu', 'kodu', 'bodu']

// # Array number slice
// var numbers = [10, 20, 30 ,40, 50, 60, 70, 80];
// numbers.slice(3, 5);
// console.log(slice);

// Array includes 
// var num = [10, 20, 30, 40, 50, 60];
// console.log(num.includes(30));
// terminal-true 

// var pet = ['cat', 'dog', 'cow', 'bird'];
// console.log(pet.includes('cow'));
// terminal-true 

// var pet = ['cat', 'dog', 'cow', 'bird'];
// console.log(pet.includes('fish'));
// terminal-false


// 20-2 Declare a Function, call function, function vs loop/////////////////////////////////

// function declaration 
//  js objsection

// function bringBanana(){
//     console.log('go to shop');
//     console.log('purchase by money');
//     console.log('get banana')
// }
// bringBanana();

// terminal-
// go to shop
// purchase by money      
// get banana

// function bringBanana(money){
//     console.log('go to shop');
//     console.log('purchase by money');
//     console.log('get banana')
//     console.log(money);
// }
// bringBanana(50);

//terminal-
// go to shop
// purchase by money
// get banana
// 50

//     function bringBanana(money){
//     console.log('go to shop');
//     console.log('purchase by money');
//     console.log('get banana')
//     console.log('payment done', money);
// }
// bringBanana(50);

// terminal-
// go to shop
// purchase by money
// get banana
// payment done 50

// function bringBanana(money){
// console.log('go to shop');
// console.log('purchase by money');
// console.log('get banana')
// console.log('payment done', money);
// }
// var taka = 100
// bringBanana(taka);

// terminal-
// go to shop
// purchase by money
// get banana
// payment done 100



// 20-3 Add Function parameter, handle multiple parameters//////////////////////////////

// function add(num1, num2){
//     console.log('going to add', num1, num2);
// }
// add(120);

// tarminal-
// going to add 120 undefined

// function add(num1, num2){
//     console.log('going to add', num1, num2);
// }
// add(120,240);

// terminal-
// going to add 120 240

// function sum(a,b, c, d, e, f, g ){
//     console.log(a,b, c, d, e, f, g)
//     var sum = a,b, c, d, e, f, g 
// }
// sum()

// tarminal-
// undefined undefined undefined undefined undefined undefined undefined

// function sum(a,b, c, d, e, f, g ){
//     console.log(a,b, c, d, e, f, g)
//     var sum = a,b, c, d, e, f, g 
// }
// sum(10, 20, 30)

// terminal-
// 10 20 30 undefined undefined undefined undefined




// 20-4 Everything you need to know about return from a function////////////////////////////
// js return 

// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     console.log(sum);
// }

// add(50, 60)

// tarminal-
// 50 60
// 110

// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }

// var total = add(30, 70);
// console.log('total', total)

// terminal-
// 30 70
// total 100

//     function bringBanana(money){
//     var bananaPrice = 10;
//     var quantity = money / bananaPrice;
//     return quantity;
//     }

// var bananas = bringBanana(200);
// console.log('testy banana', bananas);

// terminal-
// testy banana 20

//     function bringBanana(money){
//     var bananaPrice = 10;
//     var quantity = money / bananaPrice;
//     return quantity;
//     }

//     var myTaka = 150
//     var bananas = bringBanana(myTaka);
//     console.log('testy banana', bananas);

//     terminal-
//     testy banana 15



//     20-5 Function examples and Function summary//////////////////////////////////////////

//         function functionName(parameters){
//         function body
//         return
//         }

//         var returnedValue = functionName(parameters value)



//         function getAverage(assigment1, assigment2, assigment3){
//             const total = assigment1 + assigment2 + assigment3;
//             const average = total / 3;
//             return average;
//         }
        
//         const assigment1Marks = 60;
//         const assigment2Marks = 28;
//         const assigment3Marks = 52;
        
//         var myAverage = getAverage(assigment1Marks, assigment2Marks, assigment3Marks);
//         console.log('my average so far:', myAverage);

//         terminal-
//         my average so far: 46.666666666666664


//         function add(num1, num2){
//             const sum = num1 + num2;
//             return sum;
//         }

//         const result1 = add(12, 13);
//         const result2 = add(35, 7);
//         const finalResult = add(result1, result2);

//         terminal-
//         no result...error


//         20-6 Declare multiple objects with multiple properties//////////////////////////

//         var myComputer = {
//             brand: 'Assus',
//             price: 42000,
//             color: 'pearlBlue',
//             processor: 'i7'
//         }

//         console.log(myComputer);

//        terminal-
//         { brand: 'Assus', price: 42000, color: 'pearlBlue', processor: 'i7' }


//         var myComputer = {
//             brand: 'Assus',
//             price: 42000,
//             color: 'pearlBlue',
//             processor: 'i7'
//         }

//         console.log(myComputer.price);

//         tarminal-
//         42000


//         var myComputer = {
//             brand: 'Assus',
//             price: 42000,
//             color: 'pearlBlue',
//             processor: 'i7'
//         }
//         myComputer: 'i79'
//         console.log(myComputer.price);
//         console.log(myComputer)

//         terminal-
//         42000
// { brand: 'Assus', price: 42000, color: 'pearlBlue', processor: 'i7' }


// 20-7 multiple ways to get and set object property///////////////////////////////////////

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// console.log(shoppingCart);

// terminal-
// { books: 3, sunglass: 1, keyboard: 5, mouse: 1, pen: 25 }

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// var properties = Object.keys(shoppingCart);
// console.log(properties);

// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]


// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// var propertieValues = Object.values(shoppingCart);
// console.log(propertieValues);

// terminal-
// [ 3, 1, 5, 1, 25 ]

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// var properties = Object.keys(shoppingCart);
// console.log(properties);

// var propertieValues = Object.values(shoppingCart);
// console.log(propertieValues);

// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]
// [ 3, 1, 5, 1, 25 ]    


// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// var penCount2 = shoppingCart['pen'];
// var propertyName = 'mouse';

// var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

// var properties = Object.keys(shoppingCart);
// var propertieValues = Object.values(shoppingCart);

// terminal-
// mouse 1



// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// var penCount2 = shoppingCart['pen'];
// var propertyName = 'books';

// var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

// var properties = Object.keys(shoppingCart);
// var propertieValues = Object.values(shoppingCart);

// terminal-
// books 3

// set property values

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// var penCount2 = shoppingCart['pen'];
// var propertyName = 'books';

// var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

// var properties = Object.keys(shoppingCart);
// var propertieValues = Object.values(shoppingCart);

// set property values

// shoppingCart.mouse = 15;
// console.log(shoppingCart);
// shoppingCart['mouse'] = 29;
// console.log(shoppingCart);
// shoppingCart[propertyName] = 89;
// console.log(shoppingCart)

// set property values



// 20-8 (advanced) Looping through an Object and Object summary/////////////////////////////



// var shoppingChart ={
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2
// }

// const keys = Object.keys(shoppingChart);
// console.log(keys);

// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]


// var shoppingChart ={
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2
// }

// const keys = Object.keys(shoppingChart);
// console.log(keys);

// const values = Object.values(shoppingChart);
// console.log(values);


// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
// [ 3, 1, 5, 1, 25, 2 ]


// var shoppingChart ={
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2 
// }

// const keys = Object.keys(shoppingChart);

// console.log(keys);

// const values = Object.values(shoppingChart);

// console.log(values);

// for(var i = 0; i <keys.length; i++){
//     console.log(keys[i]) 
// }

// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
// [ 3, 1, 5, 1, 25, 2 ]  
// books
// sunglass
// keyboard
// mouse
// pen
// shoes



// var shoppingChart ={
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2 
// }

// const keys = Object.keys(shoppingChart);

// console.log(keys);

// const values = Object.values(shoppingChart);

// console.log(values);

// for(var i = 0; i <keys.length; i++){
//     console.log(keys[i]) 
// }

// var propertyName = keys [i];

// var propertieValues = shoppingChart[propertyName];

// console.log(propertyName, propertieValues);



// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
// [ 3, 1, 5, 1, 25, 2 ]  
// books
// sunglass
// keyboard
// mouse
// pen
// shoes
// undefined undefined   




// var shoppingChart ={
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25,
//     shoes: 2 
// }

// const keys = Object.keys(shoppingChart);

// console.log(keys);

// const values = Object.values(shoppingChart);

// console.log(values);

// for(var i = 0; i <keys.length; i++){
//     console.log(keys[i]) 
// }

// var propertyName = keys [i];

// var propertieValues = shoppingChart[propertyName];

// for(var propertyName in shoppingChart){
//     console.log(propertyName);
// }


// terminal-
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
// [ 3, 1, 5, 1, 25, 2 ]
// books
// sunglass
// keyboard
// mouse
// pen
// shoes
// books
// sunglass
// keyboard
// mouse
// pen
// shoes



// 20-9 Module summary and practice problem////////////////////////////////////////////////

// problem solving