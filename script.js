let n;
let a;
let b;

let car = 
{
    name: "",
    mileage: undefined,
    number: undefined,
    engine: function turnEngine(n)
    {
        n = prompt("Enter off or on:");
        if(n === "on")
        {
            document.write("Engine is on!");
        }
        else if(n === "off")
        {
            document.write("Engine is off!");
        }
    },
    peredacha: function(a)
    {
        switch(a)
        {
            case 1: document.write("First peredacha is on!");
            break;
            case 2: document.write("Second peredacha is on!");
            break;
            case 3: document.write("Third peredacha is on!");
            break;
            case 4: document.write("Fourth peredacha is on!");
            break;
            case 5: document.write("Fifth peredacha is on!");
            break;
            case 6: document.write("Back peredacha is on!");
            break;
            default: document.write("It is neitralka!");
            break;
        }
    },
    typeOfEngine: function()
    {
         b = prompt("Enter your type of engine:");
        return b;
    }

}
car.name = prompt("Enter the mark of your car:");
car.mileage = prompt("Enter the mileage of the car");
car.number = prompt("Enter the gov. number of the car:", "4554-AA7");
car.engine = prompt("Turn on / Turn off:");
car.peredacha = prompt("Enter the number of peredacha or enter nothing if it is neitral:");
car.typeOfEngine = prompt("Enter the tipe of car's engine:");
console.log(car);