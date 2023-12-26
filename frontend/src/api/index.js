import axios from 'axios';

export const BASE_API_URL = 'http://localhost:3210';

const apis = {
    clinics: axios.get(`${BASE_API_URL}/clinics`),
};

export default apis;