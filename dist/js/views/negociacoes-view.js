import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
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
                ${model.list().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formatarData(negociacao.getData)}</td>
                                <td>${negociacao._quants}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
