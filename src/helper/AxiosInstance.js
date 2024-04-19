import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        // baseURL: 'http:/172.16.115.213:7777/'
        // baseURL: 'http:/172.16.99.50:7777/'
        baseURL: 'https://apis.tridinhne.click/cro102/'
        // lay so IPV4 address trong wf 26.222.36.158 // truong 172.16.67.247 //quan 192.168.29.6
        //https://cro101-b166e76cc76a.herokuapp.com/
    });

    // cau hinh cho request gui di
    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await AsyncStorage.getItem('token');
            const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    //cau hinh cho ket qua tra ve
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;