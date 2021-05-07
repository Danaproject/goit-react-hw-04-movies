import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage.jsx' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.jsx' /* webpackChunkName: "authors-view" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.jsx' /* webpackChunkName: "book-details-view" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetail} component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
          {/* <Redirect to="/NotFoundPage"/> */}
        </Switch>
      </Suspense>
    </Container>
  </>
);

export default App;
