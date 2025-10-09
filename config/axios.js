
const axios = require('axios');

// Create axios instance with redirect handling for YouTube and other platforms
const axiosInstance = axios.create({
  maxRedirects: 10,
  timeout: 30000,
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
  }
});

// Intercept requests to handle redirects properly
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 301 || error.response.status === 302)) {
      const redirectUrl = error.response.headers.location;
      if (redirectUrl) {
        return axiosInstance.get(redirectUrl);
      }
    }
    return Promise.reject(error);
  }
);

module.exports = axiosInstance;
