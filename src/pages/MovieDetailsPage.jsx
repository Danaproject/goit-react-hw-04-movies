import { Component } from 'react';
import movieDetailsApi from '../components/api/movie-details-api';
import Button from '../components/Button/Button';
import MovieDetails from '../components/MovieDetails';
import AdditionalInfo from '../components/AdditionalInfo';
import routes from '../routes';

class MovieDetailsView extends Component {
  state = {
    id: null,
    title: null,
    popularity: null,
    overview: null,
    genres: [],
    poster_path: null,
    isLoading: false,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    try {
      const response = await movieDetailsApi.fetchMovieDetails(movieId);
      this.setState({ ...response });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.movies);

    // history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {
      title,
      overview,
      popularity,
      genres,
      poster_path,
      isLoading,
    } = this.state;
    const displayGoBackButton = !isLoading;
    return (
      <>
        {displayGoBackButton && (
          <Button onClick={this.handleGoBack} text={'<< Go back'} />
        )}
        {isLoading && <h1>Loading...</h1>}
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

export default MovieDetailsView;
