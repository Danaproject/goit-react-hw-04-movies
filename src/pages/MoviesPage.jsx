import { Component } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import SearchMoviesApi from '../components/api/search-movies-api';
import Button from '../components/Button';
import Loader from '../components/Loader';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    const storedMovies = JSON.parse(sessionStorage.getItem('moviesQuery'));
    if (storedMovies && storedMovies.length) {
      this.setState({
        searchQuery: storedMovies,
      });
    }
  }

  // componentDidMount() {
  //   this.state.searchQuery = new URLSearchParams(this.props.location.search).get('query') ?? '';
  //   if (this.state.searchQuery) {
  //     this.fetchMovies();
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.fetchMovies();
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
      sessionStorage.setItem(
        'moviesQuery',
        JSON.stringify(this.state.searchQuery),
      );
    }
  }

  async fetchMovies() {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await SearchMoviesApi.fetchMovies({ searchQuery, page });
      await this.setState(prevState => ({
        movies: [...prevState.movies, ...response],
        page: prevState.page + 1,
      }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });

      // this.props.history.push({
      //   // ...this.props.location,
      //   search: `query=${searchQuery}`,
      // });
      // console.log(this.props);

      page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      movies: [],
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    const displayLoadMoreButton = movies.length > 0 && !isLoading;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        {isLoading && <Loader />}
        <MovieList movies={movies} />
        {displayLoadMoreButton && (
          <Button onClick={this.fetchMovies.bind(this)} text={'Load more'} />
        )}
      </>
    );
  }
}

export default MoviesPage;
