import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Tutorials } from './components/pages/Tutorials';
import { Contact } from './components/pages/Contact';
import { Todoes } from './components/pages/Todoes';
import { Vim } from './components/pages/Vim';
import { Header } from './components/Header/Header';
import { MyRepos } from './components/pages/MyRepos';

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
          <Route excat path='/tutorials'>
            <Tutorials />
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
           <Route exact path='/todoes'>
            <Todoes/>
          </Route>
          <Route exact path='/vim'>
            <Vim/>
          </Route>
          <Route exact path='/myRepos'>
            <MyRepos/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
