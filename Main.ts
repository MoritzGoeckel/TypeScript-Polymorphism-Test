///<reference path='Vehicle.ts'/>
///<reference path='Car.ts'/>
///<reference path='Boat.ts'/>

var outputElement = document.getElementById('output');

var vehicleOne: Vehicle.Vehicle = new Boat.Boat("One");
var car: Car.Car = new Car.Car("Two");
var vehicleTwo: Vehicle.Vehicle = car;

outputElement.innerHTML = vehicleOne.do() + " " + vehicleOne.getName() + "<br />"
                        + vehicleTwo.do() + " " + vehicleTwo.getName() + "<br />"
                        + car.do() + " " + car.getName() + " -> " + car.doCar() + "<br />";