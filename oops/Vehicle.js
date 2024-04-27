//js object example

class Vehicle{
    constructor(type,year,maker){
        this.type = type;
        this.year = year;
        this.maker = maker;
    }

    getDetails(){
        return (`The maker of the vehicle is ${this.maker} made in ${this.year} type is ${this.type}`)
    }

}