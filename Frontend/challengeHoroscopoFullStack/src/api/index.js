import axios from 'axios';

const url = 'https://challengehoroscopofullstack.onrender.com/';

export const fetchHoroscope = (newUserData) => axios.post(url, newUserData);