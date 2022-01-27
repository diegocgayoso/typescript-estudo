import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes>{
    
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${
                    model.list().map(negociacao =>{
                        return `
                            <tr>
                                <td>${this.formatarData(negociacao.getData)}</td>
                                <td>${negociacao._quants}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `
                    }).join('')
                }
            </tbody>
        </table>
        `;
    }

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}