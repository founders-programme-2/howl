import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Components /Main';
import About from './Components /About';
import Resources from './Components /Resources';
import WLM from './Components /WLM';
import AddStory from './Components /AddStory';
import Archive from './Components /Archive';
import Footer from './Components /Footer';
import Header from './Components /Header';
import Help from './Components /Help';
import Results from './Components /Results';
import Story from './Components /Story';
import Timeline from './Components /Timeline';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/add" component={AddStory} />
        <Route path="/archive" component={Archive} />
        <Route path="/footer" component={Footer} />
        <Route path="/header" component={Header} />
        <Route path="/help" component={Help} />
        <Route path="/resources" component={Resources} />
        <Route path="/results" component={Results} />
        <Route path="/story" component={Story} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/wlm" component={WLM} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
