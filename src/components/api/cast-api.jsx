import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '12f4633a0c4c594f7f68f9ab5f50be1e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchCast = movieId => {
  return axios
    .get(`movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
};

fetchCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default { fetchCast };
