export class Reading {

    public a;
    public b;
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
        this.a=a;
        this.b=b;
        this.processing_result=a*this.result+b;
    }
}
