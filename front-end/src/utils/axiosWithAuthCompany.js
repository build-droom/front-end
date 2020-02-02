import axios from 'axios';

export const getToken = () => {
  localStorage.getItem("token")
}

export const axiosWithAuthCompany = () => {
  return axios.create({
    // config object
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: localStorage.getItem('companytoken')
    }
  });
};
