import { Component } from 'react';
// import Axios from 'axios';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import SearchMoviesApi from '../components/api/search-movies-api';
import Button from '../components/Button';
import Loader from '../components/Loader';

// const API_KEY = '12f4633a0c4c594f7f68f9ab5f50be1e';
// Axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

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
      // const response = await Axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`)
      // this.setState({ movies: response.data.results });
      const response = await SearchMoviesApi.fetchMovies({ searchQuery, page });
      await this.setState(prevState => ({
        movies: [...prevState.movies, ...response],
        page: prevState.page + 1,
      }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
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

// fetchMovies = () => {
//   const { searchQuery, page } = this.state;
//   const options = { searchQuery, page };

//   this.setState({ isLoading: true });

//   SearchMoviesApi
//     .fetchMovies(options)
//     .then(movies => {
//       this.setState(prevState => ({
//         movies: [...prevState.movies, ...movies],
//         page: prevState.page + 1,
//       }));

//       // if (!movies.length) {
//       //   toast('Sorry, nothing to show!');
//       // }
//     })
//     .catch(error => {
//       console.log(error);
//       // toast.error('Oops, something went wrong!');
//     })
//     .finally(() => {
//       this.setState({ isLoading: false });
//       page > 1 &&
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//     });
// };
