import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', 
});

export default api;

import axiosInstance from './api';

export const registerUser = (email, username, password) => {
  return axiosInstance.post('/access/register', { email, username, password });
};

export const loginUser = (username, password) => {
  return axiosInstance.post('/access/login', { params: { username, password } });
};

export const registerObjectives = (hashcode, dailySpendedHours, metaReduction) => {
  return axiosInstance.post(`/access/${hashcode}/objectives`, { objectives: { dailySpendedHours, metaReduction } });
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
