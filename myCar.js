class car {
    
    constructor(body, brand, color, driveWheels, fuelType, year) {
        this._brand = brand;
        this._color = color;
        this._driveWheels = driveWheels;
        this._fuelType = fuelType;
        this._year = year;
        this._body = body;
    }
    get body(){return  this._body;}
    get year(){return this._year;}
    get brand(){return this._brand;}
    get color(){return this._color;}
    get driveWheels(){return this._driveWheels ;}
    get fuelType(){return this._fuelType;}
    get allInfo(){return (
        `\n
        brand - ${this._brand}
        body-type - ${this.body}
        manufacturing date - ${this._year}
        color - ${this._color}
        drive wheels -  ${this._driveWheels}
        fuel type - ${this._fuelType}
        \n`)
    }
    
    
    set body(val){this._body = val.toUpperCase();}
    set year(val){this._year = val;}
    set brand(val){this._brand = val.toUpperCase();}
    set color(val){this._color = val;}
    set driveWheels(val){this._driveWheels = val;}
    set fuelType(val){this._fuelType = val;}
    
}

const myCar = new car;
myCar.brand = 'mercedes-benz';
myCar.color = 'dark-blue';
myCar.driveWheels = 'rear';
myCar.fuelType = 'petrol';
myCar.body = 'w210';
myCar.year = 1997;

// console.log(myCar.brand);
// console.log(myCar.color);
// console.log(myCar.driveWheels);
// console.log(myCar.fuelType);
console.log(myCar.allInfo);

