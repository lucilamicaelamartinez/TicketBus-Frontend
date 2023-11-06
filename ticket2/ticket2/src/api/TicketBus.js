import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.18.4:9000';

const TicketBusApi = axios.create({
    baseURL
})

// umbnbApi.interceptors.request.use(async (config) => {

    // const token = await AsyncStorage.getItem('token')

    // if (token) {
        // config.headers['Authorization'] = token
    // }

    // return config;

// })

export default TicketBusApi;