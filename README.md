# TypeScript Test
A quick test in TypeScript for OOP and polymorphism. This is nothing useful, its just for training purpose.

##I used the following compiler command line options:
```
--module "commonjs" --out "generated.js"
```

##This it what it does
```js
///<reference path='Vehicle.ts'/>
///<reference path='Car.ts'/>
///<reference path='Boat.ts'/>

var vehicleOne: Vehicle.Vehicle = new Boat.Boat("One");   //Creating a Boat that is a Vehicle
var car: Car.Car = new Car.Car("Two");    //Creating a Car that is a Car
var vehicleTwo: Vehicle.Vehicle = car;    //Referencing the Car as a Vehicle

var outputElement = document.getElementById('output');    //Output the results
outputElement.innerHTML = vehicleOne.do() + " " + vehicleOne.getName() + "<br />"
                        + vehicleTwo.do() + " " + vehicleTwo.getName() + "<br />"
                        + car.do() + " " + car.getName() + " -> " + car.doCar() + "<br />";
```

