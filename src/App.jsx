import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from './components/BookList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container>
        <h1 className="my-4">EpiBooks</h1>
        <BookList />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
