import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: `https://ft-anywherefitness-7.herokuapp.com/api/`,
        headers: {
            authorization: token
        }        
    });    
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth