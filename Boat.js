///<reference path='Vehicle.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
//# sourceMappingURL=Boat.js.map