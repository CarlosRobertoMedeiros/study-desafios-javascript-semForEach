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

//PROBLEMA APONTADO: Pegar o array do mapData.js e gerar uma nova projeção mostrando objetos
//apenas com id e titulo

let videosComIdETitulo = [];
//Usando o forEach para Solução
console.log("Usando forEach para Projeção de videos e títulos");
videos.forEach(video =>{
    videosComIdETitulo.push({id : video.id, title : video.title})
});
console.log(videosComIdETitulo);

//Usando código mais declarativo com Map
console.log("Usando Map Como código mais declarativo");
videosComIdETitulo = [];
videosComIdETitulo = videos.map(video =>({id : video.id, title: video.title}));

console.log(videosComIdETitulo);






