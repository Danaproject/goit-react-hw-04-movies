import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '12f4633a0c4c594f7f68f9ab5f50be1e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchMovieDetails = movieId => {
  return axios
    .get(`movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.data);
};

fetchMovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default { fetchMovieDetails };
