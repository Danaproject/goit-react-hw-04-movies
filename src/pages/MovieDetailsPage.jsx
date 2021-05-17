import { Component } from 'react';
import movieDetailsApi from '../components/api/movie-details-api';
import Button from '../components/Button/Button';
import MovieDetails from '../components/MovieDetails';
import AdditionalInfo from '../components/AdditionalInfo';
import routes from '../routes';
import Loader from '../components/Loader';
import NotFoundPage from './NotFoundPage';

class MovieDetailsPage extends Component {
  state = {
    id: '',
    title: '',
    popularity: 0,
    overview: '',
    genres: [],
    poster_path: '',
    isLoading: false,
    err: false,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    try {
      const response = await movieDetailsApi.fetchMovieDetails(movieId);
      this.setState({ ...response });
    } catch (err) {
      console.log(err);
      this.setState({ err: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.movies);
  };

  render() {
    const {
      title,
      overview,
      popularity,
      genres,
      poster_path,
      isLoading,
      err,
    } = this.state;
    const displayGoBackButton = !isLoading;

    if (err) {
      return <NotFoundPage />;
    }
    return (
      <>
        {displayGoBackButton && (
          <Button onClick={this.handleGoBack} text={'<< Go back'} />
        )}
        {isLoading && <Loader />}
        <MovieDetails
          poster_path={poster_path}
          title={title}
          popularity={popularity}
          overview={overview}
          genres={genres}
        />
        <AdditionalInfo match={this.props.match} />
      </>
    );
  }
}

export default MovieDetailsPage;
