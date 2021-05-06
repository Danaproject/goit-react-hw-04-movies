import { Component } from 'react';
// import { toast } from 'react-toastify';
import Container from '../Container';
import './SearchBar.scss';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    // if (this.state.query.trim() === '') {
    //   toast('Please enter somenthing!');
    //   return;
    // }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the movie title"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </Container>
    );
  }
}
export default SearchBar;
