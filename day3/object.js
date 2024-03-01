//to day i learn object
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);
// to day i learn nested object
const object = {
    class:{
        women:20,
        teacher: 3
    },
    shecan: {
        peaple:60,
        trainee :10
    }
};
console.log(object.class.teacher);
console.log(object.shecan.trainee);
for(let key in object.class){
    console.log(key +":"+ object.class[key]);
}
//how to declare object
let people = {
    name: "John",
    age: 25,
    isStudent: false
  };
  console.log(people);
  console.log("name" + people.name + " my age " + people.age + people.isStudent );
  //construction function in object
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  let myCar = new Car("Toyota", "Camry", 2022);
  console.log(myCar);
   //accissing object proporties
   console.log(people.name);
   console.log(people['name']);
   //modification objectproporties
   people.gender = 'Male';
   people.age = 26;
   delete people.isStudent;
   console.log(people);
//using method
let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
  };
  
  console.log(calculator.add(5, 3)); 
  console.log(calculator.subtract(5, 3)); 

  
 

