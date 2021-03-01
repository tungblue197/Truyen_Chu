import axios from 'axios';
import token from '../localStorage/token';
require('dotenv').config();

const http = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 8000,
    timeoutErrorMessage: 'Hết thời gian kết nối'
});
http.interceptors.request.use(config => {
    if(token.isHadToken) config.headers['Authorization'] = 'Bearer ' + token.getToken();
    return config;
});

export default http;