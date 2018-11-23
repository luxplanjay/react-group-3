import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

const articlesMapper = articles => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title
  }));
};

export const getArticlesByQuery = (query = '') => {
  return axios.get(API_URL + query).then(response => {
    return articlesMapper(response.data.hits);
  });
};
