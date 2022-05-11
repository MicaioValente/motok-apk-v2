import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apimotok.workdb.com.br/api/'
    // baseURL: 'https://motok-api.herokuapp.com/api/'
});

export default api;
