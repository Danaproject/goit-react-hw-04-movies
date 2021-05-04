import Container from '../components/Container';

const MoviesPage = () => {
  return (
    <Container>
      <div className="MoviesPage">
        <h1 className="MoviesPage-title">
          Search movies you'd like!
          <span role="img" aria-label="face emoji">
            🤓
          </span>
        </h1>
      </div>
    </Container>
  );
};

export default MoviesPage;
