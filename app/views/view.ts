export abstract class View<T> {
    // propriedade privada de uma classe pai não pode ser acessada pelas classes filhas. já a protected permite-as herdar essa classes
    protected element : HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean){
        const element = document.querySelector(seletor);

        if(element) {
            this.element = element as HTMLElement;
        } else {
            throw Error (`Seletor ${seletor} não existe no DOM.`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T) : void{

        let template = this.template(model)
        if (this.escapar) {
            template =  template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}