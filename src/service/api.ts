import axios from "axios";


export const api = axios.create({
    baseURL: 'https://dogbreed-api.q9.com.br'
})