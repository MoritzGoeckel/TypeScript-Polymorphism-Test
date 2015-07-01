///<reference path='Vehicle.ts'/>

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
