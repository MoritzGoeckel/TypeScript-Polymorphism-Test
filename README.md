# TypeScript Test
A quick test in TypeScript for OOP and polymorphism. This is to get a feeling for OOP in Typescript, which is transcripted to Javascript in the end.

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
outputElement.innerHTML = vehicleOne.do() + " " + vehicleOne.getName() + "<br />" //Everyone can do and getName
                        + vehicleTwo.do() + " " + vehicleTwo.getName() + "<br />"
                        + car.do() + " " + car.getName() + " -> " + car.doCar() + "<br />"; //Only cars can doCar
```

##Vehicle
```js
module Vehicle{
    export class Vehicle
    {
        private name: string;

        constructor (name: string)
        {
            this.name = name;
        }

        do() : string
        {
            return "Im a vehicle";
        }

        getName() : string
        {
            return this.name;
        }
    }
}
```

##Car
```js
module Car {
    export class Car extends Vehicle.Vehicle {
        constructor(name:string) {
            super("CAR: " + name);
        }

        do():string {
            return "Im a car";
        }

        doCar():string {
            return "Only cars can do this :)";
        }
    }
}
```

##Boat
```js
module Boat {
    export class Boat extends Vehicle.Vehicle {
        constructor(name:string) {
            super("BOAT " + name);
        }

        do():string {
            return "Im a boat";
        }
    }
}
```
