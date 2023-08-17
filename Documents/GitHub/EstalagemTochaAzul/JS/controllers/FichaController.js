class FichaController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputLevel = $('#level');
        this._inputAtributes = $('#atributes');
        this._inputRaces = $('#races');
        this._inputClasses = $('#classes');
        this._inputOrigin = $('#origin');
        this._inputDevotion = $('#devotion');
        this._inputSkill = $('#skill');
        this._inputGeneralPower = $('#generalPower');
        this._inputEquipment = $('#equipment');
        this._inputSpell = $('#spell');
        this._inputDistinction = $('#distinction');
        this._inputDisadvantage = $('#disadvantage');
    }
    
    adiciona(event){
        event.preventDefault();
        
        let criacaoFicha = new CriaFicha(
            this._inputLevel.value,
            this._inputAtributes.value,
            this._inputRaces.value,
            this._inputClasses.value,
            this._inputOrigin.value,
            this._inputDevotion.value,
            this._inputSkill.value,
            this._inputGeneralPower.value,
            this._inputEquipment.value,
            this._inputSpell.value,
            this._inputDistinction.value,
            this._inputDisadvantage.value
            );

            console.log(criacaoFicha);

            // adicionar a criacao em uma lista

        }
    }