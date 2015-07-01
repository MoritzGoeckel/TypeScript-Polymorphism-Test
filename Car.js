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
//# sourceMappingURL=Car.js.map