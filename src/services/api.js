import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

export default api;

import axiosInstance from './api';

export const registerUser = (email, username, password) => {
  return axiosInstance.post('/auth/register', { email, username, password });
};

export const loginUser = (email, password) => {
  return axiosInstance.post('/auth/login', { email, password });
};

// export const loginUser = (username, password) => {
//   return axiosInstance.post('/access/login', { username, password });
// };

export const registerObjectives = (hashcode, dailySpendedHours, metaReduction) => {
  return axiosInstance.post(`/access/${hashcode}/objectives`, { dailySpendedHours, metaReduction });
};

export const registerHabits = (hashcode, habits) => {
  return axiosInstance.post(`/access/${hashcode}/habits`, habits);
};

export const findUserTasks = (hashcode) => {
  return axiosInstance.get(`/${hashcode}/tasks`);
};

export const findAllHabits = () => {
  return axiosInstance.get('/habits');
};