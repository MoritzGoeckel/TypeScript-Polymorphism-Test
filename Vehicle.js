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
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map