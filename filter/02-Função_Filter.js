const { videos } = require('./filterData');

/*
    Trabalhando com Filter
*/

//PROBLEMA APONTADO: Obter um array com os videos mais cotados, os que tem ratio = 5

let videosTopVisualizacoes = [];

console.log("Usando forEach de Forma Imperativa");
videos.forEach(video =>{
    if (video.rating === 5){
        videosTopVisualizacoes.push(video);
    }
});

console.log(videosTopVisualizacoes);


console.log("Usando Meu Filtro Personalizado");

Array.prototype.topRatingFilter = function(predicate){
    let result = [];
    
    this.forEach(item =>{
        if (predicate(item)){
            result.push(item);
        }
    })
    return result;
};

videosTopVisualizacoes = [];
videosTopVisualizacoes = videos.topRatingFilter(video => video.rating === 5);
console.log(videosTopVisualizacoes);











