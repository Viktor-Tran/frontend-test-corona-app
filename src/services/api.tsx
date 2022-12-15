import axios from 'axios'

export const api = {
    call(URL: string | undefined) {
        return axios.create({
            baseURL: URL,
        });
    }
}