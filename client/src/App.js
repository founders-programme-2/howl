import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Main,
  About,
  Resources,
  Wlm,
  AddStory,
  Archive,
  Header,
  Help,
  Results,
  Story,
  Timeline,
} from './Components';
import GlobalStyle from './globalStyle';

// first "/" Route matches every Route to always display the header
// second "/" Route will display the Main component
// (commenting here because they weren't working inside the router)
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/add" component={AddStory} />
        <Route path="/archive" component={Archive} />
        <Route path="/help" component={Help} />
        <Route path="/resources" component={Resources} />
        <Route path="/results" component={Results} />
        <Route path="/story" component={Story} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/wlm" component={Wlm} />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
