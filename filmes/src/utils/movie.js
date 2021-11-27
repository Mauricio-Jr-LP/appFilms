//gerar lista de filmes personalizadas
export function getListMovies(size, movies){
    let popularMovies = [];

    for(let i = 0, l = size; i<l; i++){
        popularMovies.push(movies[i])
    }

    return popularMovies;
}


//Gerar numero aleatorio com base com o tamenho da lista do filmes que for passada
export function randomBanner(movies){
    return Math.floor(Math.random() * movies.length)
}