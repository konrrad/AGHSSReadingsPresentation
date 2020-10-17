export class Sensor {

    a:number;
    b:number;
    
    constructor(public id:number,public name:string)
    {

    }

    set_a(a:number)
    {
        this.a=a;
    }

    set_b(b:number)
    {
        this.b=b;
    }

    getName():string
    {
        return this.name;
    }

    getId():number
    {
        return this.id;
    }


}
