
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './components/Home';
import RestaurantsDetails from './components/RestaurantsDetails';


function App() {
  return (
      <Router>
        <Header/>
        <Container>
          <Route exact path='/' component={Home}/>
          <Route path='/restaurants/:id' component={RestaurantsDetails}/>
        </Container>
      </Router>
  );
}

export default App;
