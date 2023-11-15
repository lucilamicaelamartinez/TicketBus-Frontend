import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const baseURL = 'http://192.168.18.9:8000';

const TicketBusApi = axios.create({
   baseURL
});

const handlerLogin = async ({navigation}) => {
    navigation.navigate('Login');
}
TicketBusApi.interceptors.request.use(async (config) => {
   const token = await AsyncStorage.getItem('token');

   if (token) {
       console.log('TOKEN EN API', token);
       config.headers['Authorization'] = `Bearer ${token}`;
   }

   return config;
});

TicketBusApi.interceptors.response.use(
 response => response,
 error => {
  if (error.response.status === 403) {
    console.log('ANTES DE REMOVER EL TOKEN');
    AsyncStorage.removeItem('token')
      .then(() => {
        handlerLogin();
      });
  }
  console.log('ERROR EN API SI NO ENTRA AL REMOVE TOKEN', error);
  return Promise.reject(error);
 }
);

export default TicketBusApi;

