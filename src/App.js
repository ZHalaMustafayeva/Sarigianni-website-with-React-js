import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Jumbo from './components/Jumbotron/Jumbo';
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Jumbo/>
          </Route>
          <Route path="/about">about</Route>
          <Route path="/shop">shop</Route>
          <Route path="/">home</Route>
          <Route path="/contact">contact</Route>
          <Route path="/store">store</Route>
        </Switch>
      </Router>
      <About/>
    </div>
  );
}

export default App;
