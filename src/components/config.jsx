let axios = require('axios');
let axiosInstance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:4000/admin' : '',
    timeout: 72000
});

module.exports = axiosInstance;
