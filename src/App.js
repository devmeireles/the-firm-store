import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/ui/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="fluid-container mb-5">
          <Header />
        </div>
        <div className="fluid-container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contato" exact component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
