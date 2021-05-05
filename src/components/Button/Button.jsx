import PropTypes from 'prop-types';
import { Component } from 'react';
import './Button.scss';

const Button = ({ onClick }) => (
  <button type="button" onClick={onClick} className="Button">
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
