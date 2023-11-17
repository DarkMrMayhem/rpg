var cotacaoBitcoin = 179039.65;
var valorReal = 5;
var nome = "Guillaume";
var anoLuz = 9460536207068016;
var anoLuz_metro = anoLuz * 8.57;
var conversao = cotacaoBitcoin * valorReal;

alert("Olá, " + nome + "! Sua conversão de Real para Bitcoin:\nR$" + valorReal + " ⇒ B$" + conversao.toFixed(2) + "\n\nCuriosidade do Dia:\nA distância entre a Terra e Sirius A em metros é:\n" + anoLuz_metro + "m");