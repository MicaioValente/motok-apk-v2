import axios from 'axios';
import {URL} from './url'

const api = axios.create({
    baseURL: URL
});

export default api;
