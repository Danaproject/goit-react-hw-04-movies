import Navigation from '../Navigation';
import Container from '../Container';
import './AppBar.scss';

const AppBar = () => {
  return (
    <header className="AppBar">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
