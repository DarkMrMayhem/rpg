var campos = [
    document.querySelector('#races'),
    document.querySelector('#class'),
    document.querySelector('#origin'),
    document.querySelector('#devotion')
];

console.log(campos);

var tbody = document.querySelector('table tbody');


document.querySelector('.menuSuspenso').addEventListener('submit', function(event){
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);


});






// Histórico

function carregar (){
    document.getElementById("nomePersonagem").value=localStorage.getItem("nomePersonagem");
    // Form de Criação
    document.getElementById("level").value=localStorage.getItem("level");
    document.getElementById("atributes").value=localStorage.getItem("atributes");
    document.getElementById("races").value=localStorage.getItem("races");
    document.getElementById("class").value=localStorage.getItem("class");
    document.getElementById("origin").value=localStorage.getItem("origin");
    document.getElementById("devotion").value=localStorage.getItem("devotion");
    document.getElementById("skill").value=localStorage.getItem("skill");
    document.getElementById("generalPower").value=localStorage.getItem("generalPower");
    document.getElementById("equipment").value=localStorage.getItem("equipment");
    document.getElementById("spell").value=localStorage.getItem("spell");
    document.getElementById("distinction").value=localStorage.getItem("distinction");
    document.getElementById("disadvantage").value=localStorage.getItem("disadvantage");
}

function submeter (){
    localStorage.setItem("nomePersonagem", document.getElementById("nomePersonagem").value);
    // Form de Criação
    localStorage.setItem("level", document.getElementById("level").value);
    localStorage.setItem("atributes", document.getElementById("atributes").value);
    localStorage.setItem("races", document.getElementById("races").value);
    localStorage.setItem("class", document.getElementById("class").value);
    localStorage.setItem("origin", document.getElementById("origin").value);
    localStorage.setItem("devotion", document.getElementById("devotion").value);
    localStorage.setItem("skill", document.getElementById("skill").value);
    localStorage.setItem("generalPower", document.getElementById("generalPower").value);
    localStorage.setItem("equipment", document.getElementById("equipment").value);
    localStorage.setItem("spell", document.getElementById("spell").value);
    localStorage.setItem("distinction", document.getElementById("distinction").value);
    localStorage.setItem("disadvantage", document.getElementById("disadvantage").value);
}