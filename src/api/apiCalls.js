import axios from 'axios';


const server = 'http://localhost:8082'


export const postNovoLojista = (params) => {
    return axios.put(server + '/api/lojista',{
      params: params
    });
  }

  export const postNovoArtesao = (params) => {
    return axios.put(server + '/api/artesao',{
      params: params
    });
  }