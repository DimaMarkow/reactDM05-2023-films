import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {
    api_key: '1798748ad7a054d7f6a9e9dee1e1d177',
  },
});

export const getTrendMovies = async () => {
  const { data } = await instance.get('', {});
  return data;
};

const instanceByID = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1798748ad7a054d7f6a9e9dee1e1d177',
  },
});

export const getMovieById = async id => {
  const { data } = await instanceByID.get(`/${id}`, {});
  return data;
};

export const getReviewsById = async id => {
  const { data } = await instanceByID.get(`/${id}/reviews`, {});
  return data;
};

export const getCastById = async id => {
  const { data } = await instanceByID.get(`/${id}/credits`, {});
  return data;
};

const instanceSearch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  params: {
    api_key: '1798748ad7a054d7f6a9e9dee1e1d177',
  },
});

export const getSearchedMovie = async filter => {
  const { data } = await instanceSearch.get(``, {
    params: { query: filter },
  });
  return data;
};
