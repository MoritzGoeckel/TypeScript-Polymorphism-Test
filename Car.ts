import VEHICLE = require("Vehicle");

export class Car extends VEHICLE.Vehicle
{
    constructor (name: string)
    {
        super("CAR: " + name);
    }

    do() : string
    {
        return "Im a car";
    }

    doCar() : string
    {
        return "Only cars can do this :)";
    }
}
