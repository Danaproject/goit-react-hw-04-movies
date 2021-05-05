import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '12f4633a0c4c594f7f68f9ab5f50be1e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchMovies = ({ page = 1 }) => {
  return axios
    .get(`trending/movie/day?page=${page}&api_key=${API_KEY}`)
    .then(response => response.data.results);
};

fetchMovies.propTypes = {
  page: PropTypes.number.isRequired,
};

export default { fetchMovies };
