import React from 'react';
import {HashRouter, Switch, Link, Route} from 'react-router-dom';
import Home from './pages/Home';
import Lorem from './pages/Lorem';

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Counter</Link>
        <Link to="/lorem-ipsum">Lorem ipsum</Link>
      </nav>

      <Switch>
        {/* 
          In switch cand punem rutele, trebuie sa le punem de la cele mai specifice, la cele mai nespecifice, pentru ca daca am avea "/" inaintea lui "/lorem-ipsum", din cauza "/" ar fi considerata acceasi pagina;
        */}

        <Route path="/lorem-ipsum" component={Lorem}></Route>
        <Route path="/" component={Home}></Route>
        
      </Switch>
    </HashRouter>
  );
}

export default App;
