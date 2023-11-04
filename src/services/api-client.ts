import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd139899e5269464084c6b4e087c1bd1e'
    }
})