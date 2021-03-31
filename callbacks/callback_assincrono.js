/*
    Função de Callback normalmente é uma função que é passada como parâmetro de outra função
    Pode ser uma 
        - Execução sincrona 
        - Execução assincrona
*/
module.exports = function (callback){
    console.log("Executando Função Assincrona");

    setTimeout(()=>{
        callback('Callback Executado', 123); 
    },5000);
}
