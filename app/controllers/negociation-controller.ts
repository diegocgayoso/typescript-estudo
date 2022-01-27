import { DiasSemana } from './../enums/dias-sem.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociation } from "../models/negociation.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MsgView } from '../views/msg-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuant: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MsgView('#msgView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuant = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociation.criaDe(
            this.inputData.value,
            this.inputQuant.value,
            this.inputValor.value
        );


        if (!this.diaUtil(negociacao.getData)) {
            this.mensagemView.update(
                'Apenas negociações em dias úteis são aceitas.'
            ); return;
        }
        this.negociacoes.add(negociacao);
        this.clearForm();
        this.atualizaView();
    }

    private diaUtil(getData: Date) {
        return getData.getDay() > DiasSemana.Dom 
            && getData.getDay() < DiasSemana.Sab;
    }

    private clearForm(): void {
        this.inputData.value = '';
        this.inputQuant.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Adicionada com sucesso!');
    }
}