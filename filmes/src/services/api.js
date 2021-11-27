import axios from 'axios';

//url base
//https://api.themoviedb.org/3/

//url filmes em cartas
//movie/now_playing &language=pt-BR &page=1

export const key = '212dedf65e549a2b0b758b6e3093003c'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


export default api;