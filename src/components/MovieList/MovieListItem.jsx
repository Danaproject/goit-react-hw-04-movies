import './MovieList.scss';

const MovieListItem = ({ poster, title }) => (
  <div className="card">
    <div className="MovieListItem-thumb">
      <img src={poster} className="card-img-top" alt={title} />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default MovieListItem;
