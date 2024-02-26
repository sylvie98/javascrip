/*today am going focus on variable and data type*/ 
//1.numeric variables
var age =18;//number type variable
var myName = "sylvie";//string type of variable
const array=["string",12,false];//array type of variable
const myFavFood=["cheaps","rice"];//array type of variable as string
console.log(" my name is "+  myName   + "  and am  "+ age + " years old");//print
console.log(' my name is ${myName} and am ${age} years old');//print
console.log(array);
console.log(myFavFood);
//different between of let,var and const
function myLastName(){
    let me= "masengesho";
    console.log(me);
}
myLastName();

//differednt between primitive and object data types
//primitive ex:number,string,boolen,null underfined
//object ex:array,function,object.
var age = 12;
let str="sylvie";
console.log(typeof age);
console.log(str + age);