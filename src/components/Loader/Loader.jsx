import { Component } from 'react';
import Spinner from 'react-loader-spinner';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <Spinner
        type="ThreeDots"
        color="#f3bda1"
        height={80}
        width={80}
        timeout={3000}
        className="Loader"
      />
    );
  }
}
