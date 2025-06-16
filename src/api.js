// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export async function loginUser(email, password) {
  // Query users with matching email & password
  const res = await axios.get(`${API_URL}/users`, {
    params: { email, password }
  });
  // returns array of matched users
  if (res.data.length === 1) {
    return res.data[0]; // success, return user
  }
  throw new Error('Invalid email or password');
}

export async function registerUser(userData) {
  // Check if email already exists
  const check = await axios.get(`${API_URL}/users`, {
    params: { email: userData.email }
  });
  if (check.data.length > 0) {
    throw new Error('Email already registered');
  }
  // Create user
  const res = await axios.post(`${API_URL}/users`, userData);
  return res.data;
}
