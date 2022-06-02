import httpClient from '../http-client';

const getAll = () => {
  return httpClient.get('/students');
};

export default { getAll };
