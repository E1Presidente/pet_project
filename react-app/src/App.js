import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
// import Note from './components/Note';
// import Error from './components/Error';
// import InputGroup from 'react-bootstrap/InputGroup';

// import Container from 'react-bootstrap/Container';
// import FormControl from 'react-bootstrap/FormControl';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          {/* <Route path="/create" component={Create}/>
          <Route exact path="/note/" component={Note}/>
          <Route exact path="/note/:noteURL" component={Note}/>
          <Route component={Error}/> */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
