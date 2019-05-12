import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Main,
  About,
  Resources,
  Wlm,
  AddStory,
  Archive,
  Footer,
  Header,
  Help,
  Results,
  Story,
  Timeline,
} from './Components ';

const App = () => {
  return (
    <BrowserRouter>
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
      <Route path="/wlm" component={Wlm} />
    </BrowserRouter>
  );
};

export default App;
