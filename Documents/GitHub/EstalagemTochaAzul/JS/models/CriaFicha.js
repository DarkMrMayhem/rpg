class CriaFicha {
    
    constructor(level, atributes, races, classes, origin, devotion, skill, generalPower, equipment, spell, distinction, disadvantage){
        this._level = level;
        this._atributes = atributes;
        this._races = races;
        this._classes = classes;
        this._origin = origin;
        this._devotion = devotion;
        this._skill = skill;
        this._generalPower = generalPower;
        this._equipment = equipment;
        this._spell = spell;
        this._distinction = distinction;
        this._disadvantage = disadvantage;
        
        Object.freeze(this);
    }
    
    get level() {
        return this._level;
    }
    
    // set level() {
    //     return this._level;
    // }
    
    get atributes() {
        return this._atributes;
    }
    
    // set atributes() {
    //     return this._atributes;
    // }
    
    get races() {
        return this._races;
    }
    
    // set races() {
    //     return this._races;
    // }
    
    get classes() {
        return this._classes;
    }
    
    // set classes() {
    //     return this._classes;
    // }
    
    get origin() {
        return this._origin;
    }
    
    // set origin() {
    //     return this._origin;
    // }
    
    get devotion() {
        return this._devotion;
    }
    
    // set devotion() {
    //     return this._devotion;
    // }
    
    get skill() {
        return this._skill;
    }
    
    // set skill() {
    //     return this._skill;
    // }
    
    get generalPower() {
        return this._generalPower;
    }
    
    // set generalPower() {
    //     return this._generalPower;
    // }
    
    get equipment() {
        return this._equipment;
    }
    
    // set equipment() {
    //     return this._equipment;
    // }
    
    get spell() {
        return this._spell;
    }
    
    // set spell() {
    //     return this._spell;
    // }
    
    get distinction() {
        return this._distinction;
    }
    
    // set distinction() {
    //     return this._distinction;
    // }
    
    get disadvantage() {
        return this._disadvantage;
    }
    
    // set disadvantage() {
    //     return this._disadvantage;
    // }
}

let campos = [
    document.querySelector('#level'),
    document.querySelector('#atributes'),
    document.querySelector('#races'),
    document.querySelector('#classes'),
    document.querySelector('#origin'),
    document.querySelector('#devotion'),
    document.querySelector('#skill'),
    document.querySelector('#generalPower'),
    document.querySelector('#equipment'),
    document.querySelector('#spell'),
    document.querySelector('#distinction'),
    document.querySelector('#disadvantage')
]

// Isso aqui é temporário, acredito que não vou trabalhar com tabela

var tbody = document.querySelector('table tbody');

document.querySelector('.menuSuspenso').addEventListener('submit', function(event){
    event.preventDefault();
    
    var tr = document.createElement('tr');
    
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
    
    campos[0].value = 1;
    campos[1].value = '';
    campos[2].value = '';
    campos[3].value = '';
    campos[4].value = '';
    campos[5].value = '';
    campos[6].value = '';
    campos[7].value = '';
    campos[8].value = '';
    campos[9].value = '';
    campos[10].value = '';
    campos[11].value = '';
    
    campos[0].focus();
});