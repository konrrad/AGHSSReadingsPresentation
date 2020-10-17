export class Reading {

    public processing_result:number;
    constructor(public sensor_id:number,public timestamp:number,public result:number)
    {
    }

    get_id():number
    {
        return this.sensor_id;
    }

    process_data(a:number,b:number):void
    {
        this.processing_result=a*this.result+b;
        console.log(a*this.result+b)
    }
}
