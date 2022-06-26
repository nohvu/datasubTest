import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5455',
});

export default instance;
