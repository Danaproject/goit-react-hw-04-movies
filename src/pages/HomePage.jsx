import { Component } from 'react';
// import Axios from 'axios';
import MovieList from '../components/MovieList';
import Button from '../components/Button';
import TrendingMoviesApi from '../components/api/trending-movies-api';

// const API_KEY = '12f4633a0c4c594f7f68f9ab5f50be1e';
// Axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
  };

  // async componentDidMount() {
  //   const response = await Axios.get(`trending/movie/day?page=1&api_key=${API_KEY}`);
  //   console.log(response.data.results);
  //   this.setState({ movies: response.data.results });
  // }

  async componentDidMount() {
    await this.fetchMovies();
  }
  async fetchMovies() {
    const { movies, page } = this.state;
    try {
      const response = await TrendingMoviesApi.fetchMovies({ page });
      await this.setState(prevState => ({
        movies: [...prevState.movies, ...response],
        page: prevState.page + 1,
      }));
    } catch (err) {
      console.log(err);
    } finally {
      page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div className="container-fluid">
        <MovieList movies={movies} />
        <Button onClick={this.fetchMovies.bind(this)} />
      </div>
    );
  }
}

export default HomePage;
