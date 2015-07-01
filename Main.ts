import VEHICLE = require("Vehicle");
import CAR = require("Car");
import BOAT = require("Boat");

var outputElement = document.getElementById('output');

var vehicleOne: VEHICLE.Vehicle = new BOAT.Boat("One");
var car: CAR.Car = new CAR.Car("Two");
var vehicleTwo: VEHICLE.Vehicle = car;

outputElement.innerHTML = vehicleOne.do() + " " + vehicleOne.getName() + "<br />"
                        + vehicleTwo.do() + " " + vehicleTwo.getName() + "<br />"
                        + car.do() + " " + car.getName() + " " + car.doCar() + "<br />";
