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

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        {// matches every route so header always displays}
        <Route path="/" component={Header} />
        {// displays the Main component content as well at "/" route}
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
