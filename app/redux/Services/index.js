import axios from 'axios';

const API_URL = 'https://covid19.mathdro.id/api/';

export const dataCovid = () => axios.get(API_URL);
