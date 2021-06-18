import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { News } from './components/pages/News';
import { Vim } from './components/pages/Vim';
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
           <Route exact path='/news'>
            <News/>
          </Route>
          <Route exact path='/vim'>
            <Vim/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
