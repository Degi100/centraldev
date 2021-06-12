import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from './components/Header/Header';


import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
      	  <Route exact path='/'>
            <Home/>
          </Route>
          <Route excat path='/about'>
            <About/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
