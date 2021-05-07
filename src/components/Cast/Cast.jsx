import { Component } from 'react';
import CastApi from '../api/cast-api';
import Actor from './Actor';
import './Cast.scss';

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await CastApi.fetchCast(movieId);
    this.setState({ actors: response });
  }

  render() {
    return (
      <ul className="CastList">
        {this.state.actors.map(
          ({ id, name, gender, character, profile_path }) => {
            gender === 1 ? (gender = 'femail') : (gender = 'mail');
            return (
              <li key={id}>
                <Actor
                  name={name}
                  gender={gender}
                  character={character}
                  profile_path={`https://image.tmdb.org/t/p/w500${profile_path}`}
                />
              </li>
            );
          },
        )}
      </ul>
    );
  }
}

export default Cast;
