const funcaoSincrona = require('./callback_sincrono');
const funcaoAssincrona = require('./callback_assincrono');

console.log("Começando a Execução do Código");

funcaoSincrona(function(string,numero){
    console.log(string);
    numero+=20;
    console.log(numero);
});

console.log("Fim da Execução do Código");

console.log("Começando a Execução do Código Assíncrono");
funcaoAssincrona(function(string,numero){
    console.log(string);
    numero+=25;
    console.log(numero);
});
console.log("Fim da Execução do Código Assíncrono");

