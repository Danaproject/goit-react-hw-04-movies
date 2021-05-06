import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick} className="Button">
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
