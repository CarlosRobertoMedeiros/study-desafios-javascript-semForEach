const { names, videos } = require('./mapData');

/*
    Trabalhando com Map
*/

//Usando For Forma Imperativa
console.log("Usando for");
for (var i = 0 ; i < names.length ; i ++){
    console.log(names[i]);
}

console.log("Usando forEach");
//Usando ForEach Forma mais amigável
names.forEach(nome =>{console.log(nome)});


console.log("Usando Map");
//Usando ForEach Forma mais amigável

//https://www.youtube.com/watch?v=DFy0T-pWwLo&list=PLhxF6V44XvXQzeZqn3Xd95RKm_Gr7JT7y&index=2
//Continuar de 02:49