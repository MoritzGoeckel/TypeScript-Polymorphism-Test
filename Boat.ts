///<reference path='Vehicle.ts'/>

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
