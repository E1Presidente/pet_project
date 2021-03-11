import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/weather" component={Weather} />
          <Route component={Error}/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
