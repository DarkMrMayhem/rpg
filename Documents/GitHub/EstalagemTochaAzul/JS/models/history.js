function carregar() {
    let byID = document.getElementById.bind(document);
    let getItem = localStorage.getItem.bind(localStorage);
    
    byID("nomePersonagem").value = getItem("nomePersonagem");
    // Form de Criação
    byID("level").value = getItem("level");
    byID("atributes").value = getItem("atributes");
    byID("races").value = getItem("races");
    byID("classes").value = getItem("classes");
    byID("origin").value = getItem("origin");
    byID("devotion").value = getItem("devotion");
    byID("skill").value = getItem("skill");
    byID("generalPower").value = getItem("generalPower");
    byID("equipment").value = getItem("equipment");
    byID("spell").value = getItem("spell");
    byID("distinction").value = getItem("distinction");
    byID("disadvantage").value = getItem("disadvantage");
}

function submeter() {
    let byID = document.getElementById.bind(document);
    let setItem = localStorage.setItem.bind(localStorage);

    setItem("nomePersonagem", byID("nomePersonagem").value);
    // Form de Criação
    setItem("level", byID("level").value);
    setItem("atributes", byID("atributes").value);
    setItem("races", byID("races").value);
    setItem("classes", byID("classes").value);
    setItem("origin", byID("origin").value);
    setItem("devotion", byID("devotion").value);
    setItem("skill", byID("skill").value);
    setItem("generalPower", byID("generalPower").value);
    setItem("equipment", byID("equipment").value);
    setItem("spell", byID("spell").value);
    setItem("distinction", byID("distinction").value);
    setItem("disadvantage", byID("disadvantage").value);
}

function atualizaMod(atribute, inputValue){
    const innerHTML = +document.getElementById('modAtribute' + atribute).innerHTML;
    document.getElementById('modAtribute' + atribute).innerHTML = innerHTML + +inputValue;
}