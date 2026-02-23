import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'https://api.sales-radar.com/v1';

/**
 * Global Axios Instance
 * Configured with base URL, timeout, and interceptors.
 */
export const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 * Automatically attaches the authorization token to every outgoing request.
 */
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('radar_token');
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Standardizes error handling and manages global auth failures.
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    // Handle 401 Unauthorized (e.g., token expired)
    if (error.response?.status === 401) {
      // Clear session
      Cookies.remove('radar_token');
      Cookies.remove('radar_role');
      
      // Redirect to login if window exists
      if (typeof window !== 'undefined') {
        window.location.href = '/login?session_expired=true';
      }
    }

    // Extract precise error message from API response
    const apiError = error.response?.data?.message || error.message || 'Đã có lỗi xảy ra trong quá trình xử lý.';
    
    return Promise.reject(new Error(apiError));
  }
);
