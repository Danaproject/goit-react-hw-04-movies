import './MovieList.scss';
import noMoviePoster from '../assets/noMoviePoster.jpg';
import PropTypes from 'prop-types';

const MovieListItem = ({ poster, title }) => {
  if (poster === 'https://image.tmdb.org/t/p/w500/null') {
    poster = noMoviePoster;
  }
  if (title.length > 48) {
    title = title.slice(0, 48) + '...';
  }
  return (
    <div className="MovieListItem__card">
      <div className="MovieListItem-thumb">
        <img src={poster} className="card-img-top" alt={title} />
      </div>
      <div className="MovieListItem__card--body">
        <h5 className="MovieListItem__card--title">{title}</h5>
      </div>
    </div>
  );
};

MovieListItem.defaultProps = {
  poster: noMoviePoster,
};

MovieListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieListItem;
