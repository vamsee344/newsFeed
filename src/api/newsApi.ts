import axios from 'axios';

const API_KEY = '671ab601475d4e2281cc4bf47db61f73';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async () => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: { country: 'us', apiKey: API_KEY },
  });
  return response.data.articles;
};
