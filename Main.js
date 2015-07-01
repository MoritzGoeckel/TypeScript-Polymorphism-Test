var CAR = require("Car");
var BOAT = require("Boat");
var outputElement = document.getElementById('output');
var vehicleOne = new BOAT.Boat("One");
var car = new CAR.Car("Two");
var vehicleTwo = car;
outputElement.innerHTML = vehicleOne.do() + " " + vehicleOne.getName() + "<br />" + vehicleTwo.do() + " " + vehicleTwo.getName() + "<br />" + car.do() + " " + car.getName() + " " + car.doCar() + "<br />";
//# sourceMappingURL=Main.js.map