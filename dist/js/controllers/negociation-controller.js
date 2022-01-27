import { DiasSemana } from './../enums/dias-sem.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociation } from "../models/negociation.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MsgView } from '../views/msg-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MsgView('#msgView');
        this.inputData = document.querySelector('#data');
        this.inputQuant = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociation.criaDe(this.inputData.value, this.inputQuant.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.getData)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this.negociacoes.add(negociacao);
        this.clearForm();
        this.atualizaView();
    }
    diaUtil(getData) {
        return getData.getDay() > DiasSemana.Dom
            && getData.getDay() < DiasSemana.Sab;
    }
    clearForm() {
        this.inputData.value = '';
        this.inputQuant.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Adicionada com sucesso!');
    }
}
