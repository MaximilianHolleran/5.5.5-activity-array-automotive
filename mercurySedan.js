//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...
let v = new VehicleModule("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
            this.maximumPassenger = 5;
            this.passengers = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
    }

    loadPassenger(num){
        if((num + this.passenger) <= this.maximumPassenger){
            return("Car has room for" + " " + (this.maximumPassenger - num) + " " + "more")
            }
        else{
            return("Car is full")
            }
        }

    start(){
        if(this.fuel > 0){
            console.log("engine has started")
            return this.start = true
        }
        else{
            console.log("no fuel")
           return this.start = false
            }
        }

    checkService(){
        if(this.mileage > 30000){
            console.log("Time for maintenance")
            return this.timeForMaintenance = true
        }
        else{
            console.log("No need for maintenance")
            return this.timeForMaintenance = false
        }
    }
}

let newCar = new Car("Mercury", "Sedan", "1965", "blue", "31000")
console.log(newCar)
console.log(newCar.checkService())
console.log(newCar.loadPassenger(4))
console.log(newCar.start())











//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
