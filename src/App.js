import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';
import AppBar from './components/AppBar';

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

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetail} component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
