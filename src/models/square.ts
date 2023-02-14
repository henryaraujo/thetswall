export class Square{
    public row: number;
    public col: number;
    public isFree: boolean = false;

    constructor(r:number,c:number){
        this.row = r;
        this.col = c;
    }
}