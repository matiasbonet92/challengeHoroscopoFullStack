import axios from 'axios';

const url = 'http://localhost:3000/';

export const fetchHoroscope = (newUserData) => axios.post(url, newUserData);