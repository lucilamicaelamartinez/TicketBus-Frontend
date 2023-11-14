import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.18.9:8000';

const TicketBusApi = axios.create({
    baseURL
})

// TicketBusApi.interceptors.request.use(async (config) => {

    // const token = await AsyncStorage.getItem('token')

    // if (token) {
        // config.headers['Authorization'] = token
    // }

    // return config;

// })

export default TicketBusApi;