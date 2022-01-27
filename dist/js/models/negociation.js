export class Negociation {
    constructor(_data, _quants, _valor) {
        this._data = _data;
        this._quants = _quants;
        this._valor = _valor;
    }
    get getData() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    get getVolume() {
        return this._quants * this._valor;
    }
    static criaDe(dateString, quantsString, valorString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const qtns = parseInt(quantsString);
        const valor = parseFloat(valorString);
        return new Negociation(date, qtns, valor);
    }
}
