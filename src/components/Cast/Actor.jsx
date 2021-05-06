import PropTypes from 'prop-types';
import noPerson from '../assets/noPerson.jpg';
import './Cast.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

const Actor = ({ profile_path, name, gender, character }) => {
  if (profile_path === `${imageUrl}null`) {
    profile_path = noPerson;
  }

  return (
    <div className="Actor__card">
      <div className="Actor-thumb">
        <img src={profile_path} alt={name + 'photo'} />
      </div>
      <div className="Actor__card--body">
        <h3 className="Actor__title">Actor / Actress</h3>
        <p className="Actor__card--name">{name}</p>
        <p className="Actor__card--gender">{gender}</p>
        <p className="Actor__card--character">
          <b>Character:</b> {character}
        </p>
      </div>
    </div>
  );
};

Actor.defaultProps = {
  profile_path: noPerson,
  // avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
export default Actor;
