import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://app.tablecrm.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})