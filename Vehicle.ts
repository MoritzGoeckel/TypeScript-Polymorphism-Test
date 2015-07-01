module Vehicle{

    export class Vehicle
    {
        private name: string;

        constructor (name: string)
        {
            this.name = name;
        }

        do() : string
        {
            return "Im a vehicle";
        }

        getName() : string
        {
            return this.name;
        }
    }

}
