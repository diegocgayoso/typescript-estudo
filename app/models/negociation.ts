export class Negociation {
    constructor(
        private _data: Date,
        public readonly _quants: number,
        public readonly _valor: number) {
    }

    get getData(): Date {
        const data = new Date(this._data.getTime())
        return this._data
    }

    get getVolume(): number {
        return this._quants * this._valor
    }

    public static criaDe(
        dateString: string, 
        quantsString: string, 
        valorString: string) : Negociation {
        
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const qtns = parseInt(quantsString);
        const valor = parseFloat(valorString);

        
        return new Negociation(date, qtns, valor)
    }
}