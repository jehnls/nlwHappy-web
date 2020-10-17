import axios from 'axios'// Connect server with frond-end

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;