import Container from '../components/Container';

const HomePage = () => {
  return (
    <Container>
      <div className="HomePage">
        <h1 className="HomePage-title">
          Welcome to the movie world!
          <span role="img" aria-label="face emoji">
            🤓
          </span>
        </h1>
      </div>
    </Container>
  );
};

export default HomePage;
