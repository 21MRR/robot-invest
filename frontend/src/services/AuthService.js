import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function dLogin(email, password) {
  const loginUrl = `${API_URL}/login`;
  const response = await axios.post(loginUrl, {email, password});
  return response.data;
}

export async function dLogout() {
  const logoutUrl = `${API_URL}/logout`;
  const response = await axios.post(logoutUrl);
  return response.data;
}
