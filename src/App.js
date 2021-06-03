import React from 'react';
import {contact} from './data/Contact';
import Header from './component/Header';
import Main from './component/Main';
import Image from './data/photochourouktv.jpg';
import Footer from './component/Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './page/Home';
import Projets from './page/Projects';
import Resume from './page/Resume';

function App() {
  return (


<Router>

  <Switch>
    <Route path="/home" component = {Home}></Route>
    <Route path="/Projects" component = {Projets}></Route>
    <Route path="/Resume" component = {Resume}></Route>

  </Switch>

 </Router>
    
      
    
  )
}

export default App;
