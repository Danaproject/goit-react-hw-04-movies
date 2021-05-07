import PropTypes from 'prop-types';
import noMoviePoster from '../assets/noMoviePoster.jpg';
import './MovieDetails.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = ({ poster_path, title, popularity, overview, genres }) => {
  genres = genres.map(genre => genre.name).join(', ');
  popularity = parseFloat(popularity).toFixed(1);

  if (poster_path === null) {
    poster_path = noMoviePoster;
  } else {
    poster_path = imageUrl + poster_path;
  }

  return (
    <div className="MovieDetails__card">
      <div className="MovieDetails-thumb">
        <img src={poster_path} alt={title + 'poster'} />
      </div>
      <div className="MovieDetails__card--body">
        <h2 className="MovieDetails__card--title">{title}</h2>
        <p>
          <b>Popularity: </b>
          {popularity}
        </p>
        <h3>About:</h3>
        <p>{overview}</p>
        <p>
          <b>Genres: </b>
          {genres}
        </p>
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  poster_path: noMoviePoster,
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieDetails;
