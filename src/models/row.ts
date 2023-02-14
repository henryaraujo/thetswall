import { Square } from "./square";

export class Row{
    public type: any;
    public row: number;
    public squares: Array<Square> = new Array<Square>();

    constructor(t:any, r:number, c: number){
        this.type = t;
        this.row = r;
        for(let i = 0; i <= c; ++i){
            this.squares.push(new Square(this.row, i));
        }
    }
}