import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ABOUT_URL,
  ADD_URL,
  ARCHIVE_URL,
  HELP_URL,
  RESOURCES_URL,
  RESULTS_URL,
  STORY_URL,
  TIMELINE_URL,
  WLM_URL,
} from './constants/navigationUrls';
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
} from './Components';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
      <Route path={ABOUT_URL} component={About} />
      <Route path={ADD_URL} component={AddStory} />
      <Route path={ARCHIVE_URL} component={Archive} />
      <Route path="/footer" component={Footer} />
      <Route path="/header" component={Header} />
      <Route path={HELP_URL} component={Help} />
      <Route path={RESOURCES_URL} component={Resources} />
      <Route path={RESULTS_URL} component={Results} />
      <Route path={STORY_URL} component={Story} />
      <Route path={TIMELINE_URL} component={Timeline} />
      <Route path={WLM_URL} component={Wlm} />
    </BrowserRouter>
  );
};

export default App;
