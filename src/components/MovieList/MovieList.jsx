import { Link, withRouter } from 'react-router-dom';
import MovieListItem from './MovieListItem';
import Container from '../Container';
import routes from '../../routes';
import './MovieList.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieList = ({ movies, location }) => {
  return (
    <Container>
      <ul className="MovieList">
        {movies.map(({ id, poster_path, title }, index) => {
          return (
            <li key={id + index}>
              <Link
                to={{
                  pathname: `${routes.movies}/${id}`,
                  state: { from: location },
                }}
              >
                <MovieListItem poster={imageUrl + poster_path} title={title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default withRouter(MovieList);
