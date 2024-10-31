import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backproyectoinvestigacion-production.up.railway.app/api',
  withCredentials: true,
});

export default api;