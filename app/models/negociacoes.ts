import { Negociation } from "./negociation.js";

export class Negociacoes {
    private negociacoes: Negociation[] = [];

    // new Metod - Add
    public add(negociacao: Negociation){
        this.negociacoes.push(negociacao)
    }
    public list(): readonly Negociation[] {
        return this.negociacoes
    }
}

 