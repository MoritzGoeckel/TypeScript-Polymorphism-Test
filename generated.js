var Vehicle;
(function (_Vehicle) {
    var Vehicle = (function () {
        function Vehicle(name) {
            this.name = name;
        }
        Vehicle.prototype.do = function () {
            return "Im a vehicle";
        };
        Vehicle.prototype.getName = function () {
            return this.name;
        };
        return Vehicle;
    })();
    _Vehicle.Vehicle = Vehicle;
})(Vehicle || (Vehicle = {}));
///<reference path='Vehicle.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Car;
(function (_Car) {
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(name) {
            _super.call(this, "CAR: " + name);
        }
        Car.prototype.do = function () {
            return "Im a car";
        };
        Car.prototype.doCar = function () {
            return "Only cars can do this :)";
        };
        return Car;
    })(Vehicle.Vehicle);
    _Car.Car = Car;
})(Car || (Car = {}));
///<reference path='Vehicle.ts'/>
var Boat;
(function (_Boat) {
    var Boat = (function (_super) {
        __extends(Boat, _super);
        function Boat(name) {
            _super.call(this, "BOAT " + name);
        }
        Boat.prototype.do = function () {
            return "Im a boat";
        };
        return Boat;
    })(Vehicle.Vehicle);
    _Boat.Boat = Boat;
})(Boat || (Boat = {}));
///<reference path='Vehicle.ts'/>
///<reference path='Car.ts'/>
///<reference path='Boat.ts'/>
var outputElement = document.getElementById('output');
var vehicleOne = new Boat.Boat("One");
var car = new Car.Car("Two");
var vehicleTwo = car;
outputElement.innerHTML = vehicleOne.do() + " " + vehicleOne.getName() + "<br />" + vehicleTwo.do() + " " + vehicleTwo.getName() + "<br />" + car.do() + " " + car.getName() + " " + car.doCar() + "<br />";
//# sourceMappingURL=generated.js.map