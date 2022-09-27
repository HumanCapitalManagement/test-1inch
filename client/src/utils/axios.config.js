import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
});

export default instance;
