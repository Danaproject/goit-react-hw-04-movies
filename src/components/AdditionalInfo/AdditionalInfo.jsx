import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import './AdditionalInfo.scss';

const AdditionalInfo = ({ match }) => {
  return (
    <>
      <ul className="add-pills">
        <li>
          <NavLink
            exact
            to={`${match.url}/credits`}
            className="add-link"
            activeClassName="active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
            className="add-link"
            activeClassName="active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route exact path={`${match.path}/credits`} component={Cast} />
      <Route exact path={`${match.path}/reviews`} component={Reviews} />
    </>
  );
};

export default AdditionalInfo;
