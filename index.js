// let x = {a:1}
// let y = x
// y.a =2
// console.log(x);
// console.log(y);

// console.log('null :>> ',typeof null);

// const a = null;
// const b = null;
// console.log(a==b);

// let a = {x:1}
// let b = a
// let c = {x:1}
// let d =  {x:1}
// console.log(a == b)
// console.log(c == d)

// let num1 = 1
// let num2 = num1
// num2 = 2
// console.log(num1)
// console.log(num2)

// let a = "11"
// let b = "10"
// let c = "10"
// let d = "5"
// console.log(a<b)
// console.log(c<d)

// let x= 5
// let z=x**3
// console.log(z)

// let y =( 100 + 50 )* 3;
// console.log(y)

// let x;
// x=5;
// x= "volvo"
// console.log(x)

// let a = 2
// a<<=1;
// console.log(a)

// let x=5;
// x&=1;
// console.log(10)

// function myFunction(a,b){
//  return a*b
// }

// // let x= myFunction(3,4);
// // console.log(x);

// let car = new Object();
// car.name= "verna";
// car.year = 2019;
// car.startEngine= function(){
//     console.log("engine starts!")
// }

// car.startEngine();

// let a="hello guys hello"
// let b=a.replace("hello","hii")
// console.log(b);

// here only first hello is replaced by hii

// let a1="hello guys hello"
// let b1=a1.replace(/hEllo/i,"hii")
// console.log(b1);

// let a2="hello guys hello"
// let b2=a2.replace(/hello/g,"hii")
// console.log(b2);

// let x="100"
// let y = "100";
// console.log(x/y);

// let x = new Number(500);
// let y = new Number(500);
// console.log(x==y)

// const a = ["banana","orange","watermelon"];
// console.log(a.length)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// for (let i = 0; i < fLen; i++) {
//   console.log(fruits[i]);
// }

// map

// const array = [1,2,3,4];
// const double = array.map(i=>i*2);

// console.log(typeof (double),double);

// filter

// const numbers = [1,2,3,4];
// const even = numbers.filter(item=>item%2===0);
// console.log(even)

// reduce

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum)

// let a= 5;
// a=6;
// console.log(a);

// const a = [1,2,3,4];
// const b=a.filter(i=>{
//     i/2});
// console.log(b)

// const salary = [10000,20000,30000,40000];
// const newSalary = salary.map(function())

// let a = 5;
// a = 6;
// console.log(a);

// const b = 5;
// console.log(b);

// {
//     let b=6;
//     console.log(b);
// }

// console.log(b);

// let a="Hepin"
// let b = "Jay"
// console.log(a>b)
// console.log(a<b)

// let x = 55
// let y = 66
// console.log(x+y)

// let m = -60;
// let n = 1;

// console.log(m>>>n);
// console.log(m>>n);

// let m = "-60";
// let n = "Hepin";

// console.log(m-n);
// console.log(m/n);
// console.log(m+n);

// let a="12";
// let b = "20"
// console.log(a<b)

// let x = "Hello";
// x -= 5;
// console.log(x)

// let x = 10;
// x |= 5;
// console.log(x);

// console.log(typeof null);

// function car(name,color){
//     this.name = name;
//     this.color = color;
//     console.log(`${this.name} has a unique ${this.color} color.` )
// }

// let x = car("Verna","red velvet");

// let car = {
//     name : "verna",
//     engine : "V8",
//     color : "Red",
//     start : function(){
//         console.log( this.name + " has " + this.color + " color and "+ this.engine+ " Engine");
//         }
// }

// carStart = car.start();

// let x = "Hepin"
// console.log(x.charAt(0));
// console.log(x.charCodeAt(0));
// console.log(x.at(0));

// let a = " ";
// console.log(a.charAt(0));
// console.log(x[0]);

// let x = "hello world";
// console.log(x.indexOf("hello"));

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/gi));

// let text1 = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text1.matchAll(/Cats/gi);

// let a = `10+5`
// console.log(a)

// let x = 5;     //number
// let y = new Number(5);    //object
// console.log(x===y);

// let int = BigInt(9999999999999);  // let int = 99999999999n
// console.log(typeof int);

// const a = [1,2,3,4,5,6,"Hepin"];
// for (i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// const points = new Array(40);
// const points = [40,20,10,50,30];
// points.unshift(60);
// console.log(points);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2,0);
// // fruits.unshift("Lemon");
// console.log(fruits);

// x = "50";
// y = "6";
// console.log(x<y)

// const points = [40, 100, 1, 5, 25, 10];

// function minFind(arr){
//     console.log( Math.max.apply(null,arr));
// }

// minFind(points);

// const staffsDetails = [
//     { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//     { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//     { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//     { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
//   ];

//   staffsDetails.forEach(staffDetail);

//   function staffDetail(value){

//   let sentence = `I am ${value.name} a staff of Royal Suites.`;
//   console.log(sentence);
//   }

//   const staffsDetails = [
//     { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//     { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//     { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//     { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
//   ];

//   sd2=staffsDetails.map(staffDetail);

//   function staffDetail(value){

//   let sentence = `I am ${value.name} a staff of Royal Suites.`;
//   console.log(sentence,"hii");
//   }

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }

//   const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value>18;
// }

// const a = [["Hepin"]];
// b=a.map(myFunction);

// function myFunction(value){
//     value[0] = "utsav"

// }
// console.log('a :>> ', a);

// console.log(typeof Number(5))

// let a = 12;
// console.log(typeof a.toFixed(5),a.toFixed(5));

// const a = ['Hepin'];
// a.forEach(myFunction);

// function myFunction(value,index,a){
//   a[0] = 0;
//   console.log(a);
// }

// const a = [1,2,3,4];
// const b = a.map(myFunction);

// function myFunction(value,index,a){
//    return value>2;
// }

// console.log(b)

// const a = [21,[1,2,3,4,5]];
// a1 = a.flatMap(myFunction);

// function myFunction(value,index,a){
//   return value*2;
// }
// console.log(a1);

// const words = ["Hello", "world", "how", "are", "you"];
// const result = words.map(myFunction);

// function myFunction(word,index,words){
//   return word.split('');
// }
// console.log(result,typeof result);

// const a = [1,2,3,4,10,,1,30];
// b = a.filter(myFunction);

// function myFunction(value,index,a){
//   return value>=10;
// }
// console.log(b);

// const a = [1,2,3,4,5,6];
// b = a.reduce(myFunction);

// function myFunction(total,vale,index,a){
//   return total+vale;
// }
// console.log(b);

// const a = [1,2,3,4,5,6];
// const b = a.reduce(function(accumulator,value,index,a){
//   return accumulator+value;
// },0)

// console.log(b);

// const a = [1,2,3,4,5,6];
// const b = a.reduce((accumulator,value,index,a)=>{
//   return accumulator+value;
// },0)

// console.log(b);

// const a = [1,2,3,4,5,6];
// const b = a.reduce((accumulator,value,index,a)=> accumulator+value,0)

// console.log(b);

// const a = [1,2,3,4,5,6];
// const b = a.some(function(value,index,a){
//   return value>5;
// })
// console.log(b);

// const d = new Date();
// console.log(d.getFullYear());

// const d = new Date();
// console.log(d.getMonth());
// console.log(Date.now());

// const d = new Date();
// d.setMonth(11);
// console.log(d);

// a = Math.max(64,2,3,4,5,-1);
// console.log(a);

// const b = Math.floor((Math.random()) * 10);
// console.log(b);

// let x = 5;
// let y = "5";
// console.log(x==y);

// const a =18;
// const b = (a>=18)?"Great":"oops!";
// console.log(b);

// const a = [1,2,3,4,5];
// const b = a.reduce(function(text,value,index,a){
//     console.log(text,value,index);
//     return (text);
// },0);

// console.log(b);

// function myFunction(text,value,index,a){
//     console.log(text,value , index);
//     return (text , value);
// }

// console.log(b);

// const a = "hepin";
// if (a > 15) {
//   console.log("a is greater than 15");
// } else if (a > 10) {
//   console.log("a is between 10 and 15");
// } else {
//   console.log("a is less than 15");
// }

// switch (new Date().getDay()) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 5:
//     day = "saturday";
//   // break; it is fine if at last we cannot use break
// }
// console.log(day);

// const a = [true,2,3,"volvo",5.4,6e6];
// for (let i = 0 ;i<a.length;i++){
//    console.log("here are the value:",a[i]);
// }

// let i = 0;
// for(;;){
//     if(i>3) break;
//     console.log(a[i]);
//     i++;
// }

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
// console.log(object);

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + " ";
// }
// console.log(txt);

// const numbers = [45, 4, 9, 16, 25];
// const a = numbers.forEach(function(value,index,numbers){
//     console.log(value);
// })

// console.log(a);

// const a =[1,2,3,4,5];
// let show = "";

// for(let i of a){
//     show+=i;
// }

// console.log(show);

// let j = 0;
// let text = " ";
// while (j > 0 && j < 5) {
//     text += `${j}`;
//     j++;
//   }

// console.log(text);

// let result = "";
// let i = 0;
// do {
//   i += 1;
//   result += `${i} `;
// } while (i > 0 && i < 5);
// // Despite i === 0 this will still loop as it starts off without the test

// console.log(result);

// let i1 = 0;
// let text1 = " ";

// for(;i1<10;i1++){
// if(i1===3) break;
//  text1 += `${i1} `;
// }
// console.log(text1)

// let i = 0;
// let text = " ";

// for(;i<10;i++){
// if(i===3) continue;
//  text += `${i} `;
// }
// console.log(text)

// const letters = new Set(["a","b",3,"3"]);
// letters.add("b");
// console.log(letters);
// console.log(letters.size);

// let i, j;

// // The first for statement is labeled "loop1"
// loop1: for (i = 0; i < 3; i++) {
//   // The second for statement is labeled "loop2"
//   loop2: for (j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       break loop1;
//     }
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }
// let text="";
// const a = new Map([["a1","apple"],[2,2],["a3","watermelon"],[2,2]]);
// for (let keys in a.entries()){
//   text+= keys;
// }
// console.log(text);
// a.forEach(function(value,key){
// text+= key + "="+value+ " ";
// });
// console.log(text);
// a.set("a1","orange");
// b= a.get("a2")
// console.log(a,b,a.size);

// const fruits = ["Banana", "Orange", "Apple"];

// function isArray(myArray) {
//   return myArray.constructor.toString().indexOf("Array") > -1;
// }

// console.log(isArray(fruits));
// console.log(typeof "john".constructor);
// console.log(typeof (3.14).constructor );
// console.log(typeof false.constructor );
// console.log(typeof [1,2,3,4].constructor );
// console.log(typeof {name:'john', age:34}.constructor );
// console.log(typeof new Date().constructor );
// console.log(typeof function () {}.constructor);
// console.log(typeof Number(""));

// d = new Date();
// console.log(Number(d));

// let a =new Set([1,2,3,4,5,2,3]);
// a.add(3);
// console.log(a);

// let a = " ";
// loop1 : for(let i = 0;i<5;i++){
//    if(i==1){
//     break loop1;
//    }
//    a+=i;
// }
// console.log(a);

// const a = "Hello World";
// const result = a.match(/[hw]/gi);
// console.log(result);
// const a =12;
// const b = "2";

// try{
//   //code that you need to try
//   console.log(typeof (a+b));
// }
// catch(error){
//    console.log("error message:" + error)
// }
// finally{
//   console.log("hello")
// }

// function reactArea(height,width){
//    if(isNaN(height) || isNaN(width)){
//     throw("Enter value is not a number")
//    }
// }

// try{
//   reactArea(210,"HEllo")
// }
// catch(e){
//   console.log(e);
// }

// let a = [1,2,3,4,5];

// try{
//   console.log( (a+b));
// }
// catch(e){
//   console.log(e);
// }

// var x = 10;
// y = 20;
// console.log(x+y);
// let y;

// const person = {
//   firstName : "Hepin",
//   lastName : "Viradiya",
//   fullName : function (){
//     return this.firstName + " " + this.lastName;
//   }
// }

// console.log(person.fullName());
// "use strict";
// let x= this;
// console.log(x,typeof x);

// function myFunction(){
//   return this;
// }
// myFunction();

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }

// // Return "John Doe":
// console.log(person1.fullName.call(person2));

// class rectangle {
//   constructor(width, height) {
//     this.height = height;
//     this.width = width;
//   }
//   getArea(){
//     return this.height*this.width;
//   }
// };
// const squere = new rectangle(10,20);
// console.log(squere.getArea());

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name); // call the super class constructor and pass in the name parameter
//   }

//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const d = new Dog("Mitzie");
// d.speak(); // Mitzie barks.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes noise`);
//   }
// }

// class dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const d = new dog("Tommy");
// d.speak();

// const a = 1;
// const b = 12;
// function ()
// var a = 2;
// console.log(a);
// function a() {}
// console.log(a);

// const arr = [0, 1, 2, 3, 4, 5, 6];
// // console.log(arr)
// let text = 0;
// arr.forEach(function(value,index,arr){
//   text = text +value;
// console.log(text);
// })
// for(let i of arr){
//   if(i==0){
//     arr[i] = text;
//   }
//   else{

//     arr[i] = text -arr[i] ;
//   }
// }
// console.log(arr[i]);
// for(let i = 0 ;i<=arr.length;i++){
//   text += arr[i];

//   console.log(text);

// }

//Output
// [21,21,20,18,15,11,6,0]

// const arr = [0, 1, 2, 3, 4, 5, 6];
// // console.log(arr)
// let text = 0;
// arr.forEach(function (value, index, arr) {
//   text = text + value;
// });
// console.log('arr :>> ', arr);
// const arr2 = arr.reduce(
//   function (a, value, index, arr) {
//     console.log(a);
//     a.push(a[a.length - 1] - value);
//     // console.log(a);
//     return a;
//   },
//   [text]
// );

// console.log(arr2);

// for (let i = 0;i<=arr.length;i++){
//     if(i==0){
//     text = text;

//     }
//    text = text - (i+1);
//    console.log(text);
//   }

// {
//   "employees"=[
//     {"firstName":"Hepin","lastName":"Viradiya"},
//     {"firstName":"Bhargav","lastName":"Valani"}
// ]
// }

// let text1 = '{ "employees":['+
//     '{"firstName":"Hepin","lastName":"Viradiya"},'+
//     '{"firstName":"Bhargav","lastName":"Valani"}]}';

// const a = JSON.parse(text1);
// console.log(a,typeof a);
// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// let x = 0.1;
// let y = 0.2;
// let z = (x*10 + y*10)/10;
// console.log(z);

// const date= new Date();
// dateToday = date.toISOString();
// console.log(dateToday);

// var person = {
//   "firstName": "Hepin",
//   "lastName": "Viradiya",
//   "language": "No"
// }

// Object.defineProperties(person,"language",{
//   value : "En",
//   writable : true,
//   Enumerable : true,

// })

// var text = " ";

// for (var x in person){
//   text += person[x];
// }
// console.log(text);

// const person = new Object();
// person.firstName = "Hepin";
// person.lastName = "Viradiya";
// person["age"] = 20;
// person.fullName= function(){
// return (this.firstName + " " + this.lastName);
// };

// console.log(person.fullName());
// let text=" ";
// for (let i in person){
//   text += person[i] + " ";
// }
// console.log(text);

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myStr = JSON.stringify(person);
// console.log(myStr);

// const myArray = Object.values(person);
// console.log(myArray);

// const person = {
//   name: "John",
//   age: function ()
//   {return 30;}
// };
// person.age = person.age.toString();
// let myString = JSON.stringify(person);
// console.log(myString);

// const person = {
//   name:"Hepin",
//   get getName(){
//     return this.name;
//   }
// }

// console.log(person.getName);

// const person = {
//   name:"Hepin",
//   set setName(newName){
//     this.name = newName;
//   }
// }
// console.log(person.name);
// person.setName="Bhargav";
// console.log(person.name);

// constructor function
// function Person(person_name, person_age, person_gender) {
//   // assigning  parameter values to the calling object
//   (this.name = person_name),
//     (this.age = person_age),
//     (this.gender = person_gender),
//     (this.greet = function () {
//       return "Hi" + " " + this.name;
//     });
// }

// creating objects
// const person1 = new Person('John', 23, 'male');
// const person2 = new Person('Sam', 25, 'female');

// accessing properties
// console.log(person1.name); // "John"
// console.log(person2.name); // "Sam"

// const a = 2;
// if (a == "2") {
//   console.log("hii");
// }

// const str = "abcd";
// console.log(str.split(""));

// console.log(Number.parseInt("123"));

// const arr = [1,2,"3",4];
// console.log(arr.toString());

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

// let arr3 = "1,2,3 4";
// arr4 = arr3.split(", ");
// console.log(arr4);

// function person(firstName,lastName,age,color){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.color = color;
//   this.language = "english";
// }
// delete person[age];
// person.prototype.language = "hindi";
// person.prototype.name = function(){
//   return this.firstName + " "+ this.lastName;
// }
// const hepin = new person("Hepin","Viradiya",21,"Human");
// hepin.language = "hindi";
// const valo = new person("Bhargav","valani",22,"Human");
// console.log(hepin.name(),hepin);
// console.log(hepin.age,hepin);
// console.log(valo);

// let text = " ";
// const arr = new Set(["a","b","c"]);
// arr.add("a");
// arr.add("a");
// arr.add("a");
// arr.add("a");
// // arr.forEach(element => {
// //   text = text + element;
// // });
// arr.forEach(function(value){
//   text = text + value;
// });
// console.log(text.split("|"));

// let text = '';
// const arr = new Map([
//   ["apples",500],
//   ["banana",700],
//   ["orange",500]
// ]);

// arr.set("mapples",600);

// arr.forEach(function(value,index,array){
//   text = text +" "+ value;
// })
// console.log(text);

// let x = function (){
//   console.log("Hello!");
// };
// console.log(typeof x,x());

// (function myName(){
//   console.log("Hello!");
// }());

// function sum(...args){
//   let sum1 = 0;
//   for (let arg of args){
//     sum1 += arg;
//   }
//   return sum1;
// }

// let x1 = sum(12,23,34,45,56);
// console.log(x1);

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }
// console.log(person.fullName.call(person2));

// const key = 1;
// switch (1) {
//   case key == 1:

//     console.log("key 1:>> ", key);
//     break;
//   default:
//     console.log(key);
//     console.log("key default:>> ");
//     break;
// }

// const person = {
//   firstName : "Hepin",
//   lastName : "Viradiya",
//   getFullName : function (){
//     return this.firstName + " " + this.lastName;
//   }
// }
// const hepin = {
//   firstName : "hepin",
//   lastName : "viradiya",
// }
// let fullName = person.getFullName.bind(person)
// console.log(fullName());

// function sum (num1,num2,callBack){
//   let sum= 0;
//   sum = num1 +num2;
//   return callBack(sum);
// }

// function displayer(some){
//   console.log(some);

// }

// sum(12,12,displayer);

// let greet_one = "Hello"
// let greet_two = "World!!!"
// console.log(greet_one)
// for(let i=0;i<10000000000;i++){
// }
// console.log(greet_two);

// let greet_one = "Hello"
// let greet_two = "World!!!"
// console.log(greet_one)
// setTimeout(function(){
//     console.log("Asynchronous");
// }, 1000)
// console.log(greet_two);

// const obj = {
//     firstName : "Hepin",
//     lastName : "Viradiya",
// }

// let text = "";
// for (let x in obj){
//     text += obj[x] + " ";
// }
// console.log(obj);
// console.log(obj.firstName);
// console.log(text);
// // console.log(Object.values(obj));

// const a= new Set(["a","b","c"]);
// a.add(5);
// a.add(true);
// console.log(a.values())
// console.log(a.entries())

// const person = {
//     firstName : "hepin",
//     lastName : "viradiya",
//     display : function(){
//         console.log(this.firstName + " "+this.lastName);
//     }
// }
// let x = person.display.bind(person);
// setTimeout(x,3000);

// let sum = 0;
// function myCalculator(num1,num2,myCallBack){
// sum = num1+num2;
// return myCallBack(sum);
// }

// function myDisplay(some){
//     console.log(some);
// }

// let a1 = myCalculator(23,32,myDisplay);

// function displayer(some){
//     console.log(some);
// }
// let promises = new Promise(function(myResolve,myReject){
//     let x = "0";

//     if (x==0){
//         myResolve("ok");
//     }
//     else{
//         myReject("Error!!!");
//     }
// })
// promises.then(
//     function(value){displayer(value);},
//     function(error){displayer(error);}

// )

// let car = new Promise(function(resolve,reject){

// fuel_fullTank = 1;

//          if(fuel_fullTank)

//          resolve()

//    else

//                reject()

//            });

// car.then(function(){

//      console.log("The fuel tank is full. Happy Driving!!")

// }).catch(function(){

//            console.log("The fuel tank is not empty.")

// })

// const a = {firstName : "hepin"};
// console.log(Array.from(a));

// const a = [11,2,3,4];
// const a1 = ["b","c","a"];
// let find = a.find(myFunction);
// let sorted = a.sort();

// function myFunction(value,index,array){
//   return value>2;
// }

// console.log(find);
// console.log(sorted);

// let x = 10;
// console.log(x);

// let z = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(console.log("this will see after 3 second!!!"))
//     },3000)
// });

// let y = 20;
// console.log(y);

// let x1 = new Promise(function(resolve,reject){
//     const a = "a";
//     const b = "a"
//     if(x == y){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// x1.then(function() {
//     console.log("sucess");
// }).catch(function() {
//     console.log("error");
// });

// function resolveAfter5Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 5000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter5Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }

//   asyncCall();

// let a = [1,2,3,4,5,6];
// let b = a.reduce(myReduce);

// function myReduce(total,value){
//     console.log(total);
// }
// console.log(b);
// a = a.join(" ")
// console.log(a);

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }

//   myDisplay();

// const arr = new Set([1,2,3,4,5,5,3,2,4,2]);
// console.log(arr);
// const arr1 = [1,2,3,4,5];
// console.log(Array.from(arr));
// arr2 = arr.find(function(value,index,arr){
//     return value<1;
// })

// console.log(arr2);

// const biodata = {
//     name:"Hepin bhai",
//     city:"Surat",
//     age:21,
//     email:"hapin@gmail.com",
//     mobile:"+91987687876"
// }

// console.log(biodata['email']);

// const a= [1,2,3,4,5,-6];
// // console.log(a.toString(" - "));
// // console.log(a.join("-"));
// // console.log(a.shift());
// console.log(Math.min.apply(100,a));

// let a = 30;
// a = 20;
// console.log(typeof null);
// console.log(typeof undefined);

// let x = sum(2,3);

// function sum(num1,num2){
// return num1+num2;
// }
// console.log(typeof NaN);

// const object = {
//   firstName : "xyz",
//   lastName : "abc"
// }
// console.log(object.firstName);
// console.log(object["lastName"]);

// const a1 = "sdvdvfdv";
// a1[0] = "a";
// console.log(a1);

// let y = new String("fssdvhsfswf");
// console.log(y.slice(0,3));

// let b = "Hello world hello hi hello";
// let b1 = b.slice(7,6);
// console.log(b1);

// let  firstName = "xyz";
// let lastName = "abc";

// let txt = `${firstName} ${lastName} `
// console.log(txt);
// console.log(y);
// console.log(y.charAt(-2));
// console.log(y.charCodeAt(10));
// console.log(y.at(10));
// console.log(y[10]);

// const a = 10;
// const b2 = new Number(10);
// const y1 = BigInt(999999999999);
// console.log(Number(y1)/2);
// console.log(typeof a);
// console.log(typeof b2);
//  let text = "ferferfherf";
// let arr4 = [];
//  for(let i in text){
//    arr4.push(text[i]);
//  }
//  console.log(arr4);
//  let array = text.split("")
// let array1 = Array.from(text);
// let array2 = [...text];
// console.log(array);
// console.log(array1);
// console.log(array2);

// console.log(y.split(" "));
// console.log(Array.from(y));
// console.log(typeof y);

// const newArray = [[1,2],[3,4],"hepin",function(){}];
// let newArray1 = newArray.flat();
// newArray[10]= "gvde";
// console.log(newArray.unshift("gdfgvdf"),newArray);
// console.log(newArray1);

// const x= [1,2,31,4,5,6,237,8,93,10];
// const x1 = x.with(2,3);
// console.log(x1);
// const x1 = x.some(function(a){
//   return a>0;
// })
// console.log(x1);
// console.log(myFunction(x));
// function myFunction(arr){
//   return Math.max.apply(null ,arr);
// }
// let y = x.sort(function(a,b){
//   return a-b;
// })
// console.log(y);

// let x1 = x.slice(2,4);
// console.log(x1);
// console.log(typeof x.indexOf(2));

// function myFunction(){
//   console.log("this is a async");
// }

// setTimeout(myFunction,3000);

// setTimeout(function(){
//   console.log("HEllo");},2000);

// const a = [1,2,2,3,4,4,5,6,6];
// const a1 = new Set(a);
// console.log(a1);
// console.log([...a1]);

// console.log(Array.from(a1));

// function x(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const y = 'some data';
//       resolve(y);
//     },1000);
//   });
// }

// x().then((y)=>{
//   console.log(y);
// })
// .catch((error)=>{
//   console.log(error);
// })

// async function x(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const y = 'some data';
//       resolve(y);
//     },1000);
//   });
// }

// async function main(){
//   const data =await x();
// console.log(data);
// }

// main();
// debugger;
// function print(i){
//   console.log("This is call number "+i);
// }

// function fun1(callback){
//   setTimeout(()=>{

//       let i = 1 ;
//       callback(i); i++ ;
//       setTimeout(()=>{

//           callback(i); i++;
//           setTimeout(()=>{

//             callback(i); i++ ;
//             setTimeout(()=>{

//                 callback(i); i++ ;
//                 setTimeout(()=>{

//                 }, 800)
//             }, 700)
//           }, 500)
//       }, 300)
//   }, 100)
// }

// // Calling fun1 with print function as parameter
// fun1(print);

// var DidPayment = false;

// function message(){
//     console.log("Payment Successful");
// }

// function UserPayment(DidPayment, callback){

//     if(DidPayment){
//         callback();
//     }else{
//         UserPayment();
//         if(DidPayment){
//             callback();
//         }else{
//             UserPayment();
//             if(Didpayment){
//                 callback();
//             }else{
//                 UserPayment();
//                 //... And so on
//             }
//         }
//     }
// }

// Making the call
// UserPayment(DidPayment, message);

// var DidPayment = false;

// var promise = new Promise((resolve, reject) => {
//   if (Didpayment) {
//     // Calling the resolve method
//     resolve();
//   } else {
//     // Calling the reject method
//     reject();
//   }
// });

// promise
//   .then(() => {
//     console.log("User Payment Successful!");
//   })
//   .catch(() => {
//     console.log("User Payment Canceled");
//   });
// var first = function () {};
// var second = function () {};

// var x = function (y) {
//   console.log(y);

//   first(y, (first) => {
//     console.log("first");

//     second(first, (second) => {
//       console.log(second);
//     });
//   });
// };

// x(10);

// fetchRandomJoke((joke) => {
//   console.log(joke);

//   translateJoke(joke, (translatedJoke) => {
//       console.log(translatedJoke);

//       postJoke(translatedJoke, () => {
//           console.log("Joke posted successfully!");
//       });
//   });
// });

// let message1 = function () {
//   console.log("hello");
// };

// var promise1 = new Promise((resolve, reject) => {
//    resolve();
//    reject();
// });

// promise1
//   .then(() => {

//   })
//   .catch(() => {
//     console.log("Error");
//   });

// console.log("Hepin");
// function add(value) {
//   return new Promise((resolve, reject) => {
//     if (typeof value == "string") {
//       return reject("invalid type");
//     }
//     return resolve(value + 50);
//   });
// }
// function sub(value) {
//   return new Promise((resolve, reject) => {
//     return resolve(value - 30);
//   });
// }

// function div(value) {
//   return new Promise((resolve, reject) => {
//     if(value == "string"){
//       return reject("string")
//     }
//     return resolve(value + 50);
//   });
// }
// function subReject (value){
// console.log('error :>> ', value);
// }
// add(20)
//   .then(sub,subReject)
//   .then(div)
//   .then((value) => {
//     console.log("value :>> ", value);
//   });
// add(50, function (addres, err) {
//   if (!err) {
//     sub(addres, function (subres, err) {
//       if (!err) {
//         div(subres, function (divRes, err) {
//           if (!err) {
//             console.log(divRes);
//           }
//         });
//       }
//     });
//   }
// });

// let arr = [
//   { value: 1 },
//   { value: 2 },
//   { value: 3 },
//   { value: 4 },
//   { value: 5 },
//   { value: 6 },
//   { value: 7,name:'hepin' },
//   { value: 8 },
// ];
// const result = arr.filter(({ value }) => value > 5);
// console.log(result);
// timeout_vs_immediate.js

// console.log('Hello => number 1');
// setImmediate(() => {
//   console.log('Running before the timeout => number 3');
// });
// setTimeout(() => {
//   console.log('The timeout running last => number 4');
// }, 0);
// process.nextTick(() => {
//   console.log('Running at next tick => number 2');
// });

// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   console.log('start');
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then(resolve => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start();

// const fs = require('node:fs');
// fs.stat('./sample.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//  console.log(stats.isFile());  // true
//  console.log(stats.isDirectory());  // true
//  console.log(stats.isSymbolicLink());  // true
//  console.log(stats.size);  // true

//    // false
//  // false
//   // 1024000 //= 1MB
// });

// const fs = require('node:fs/promises');
// async function example() {
//   try {
//     const stats = await fs.stat('./sample.txt');
//  console.log(stats.isFile());  // true
//   console.log(stats.isDirectory());  // true
// console.log(stats.isSymbolicLink());  // true
//   console.log(stats.size);  // true
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();

// const path = require('node:path');
// const notes = './sample.txt';
//  console.log(path.dirname(notes));
//  console.log(path.basename(notes));
//  console.log(path.extname(notes));

// const fs = require('node:fs/promises');
// async function example() {
//   let filehandle;
//   try {
//     filehandle = await fs.open('/Users/joe/test.txt', 'r');
//     console.log(filehandle.fd);
//     console.log(await filehandle.readFile({ encoding: 'utf8' }));
//   } finally {
//     if (filehandle) await filehandle.close();
//   }
// }
// example();
// let myArray = [
//     {"id": 1, "name": "Alice"},
//     {"id": 2, "name": "Peter"},
//     {"id": 3, "name": "Harry"}
// ];

// // Get the Array item which matchs the id "2"
// let result = myArray.find(item => item.id === 2);

// console.log(result.name);
// async function abc(){
//     return promise.resolve("Hello World");
// }
// console.log(abc()+1);

async function getData() {
    return "Hello World";
}
getData().then(data => console.log(data + 1));
// output : Hello World1 ave

async function getData2(){
    return Promise.resolve("hello world");
}

getData2().then(data =>{
    console.log(data + 1 + "this is print by getData2(*)");
})