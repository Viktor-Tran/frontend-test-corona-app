import axios from 'axios'

export const api = {
    call() {
        return axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
        });
    }
}