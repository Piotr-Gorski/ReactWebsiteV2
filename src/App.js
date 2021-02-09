import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/aboutUs' component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
