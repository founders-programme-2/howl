import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import navigationUrls from './constants/navigationUrls';

import GlobalStyle from './globalStyle';
import {
  Landing,
  About,
  Resources,
  Wlm,
  Add,
  Form,
  Archive,
  Header,
  Help,
  Results,
  Story,
  Timeline,
  Error404,
} from './Components';

const {
  ABOUT_URL,
  ADD_URL,
  FORM_URL,
  ARCHIVE_URL,
  HELP_URL,
  RESOURCES_URL,
  RESULTS_URL,
  STORY_URL,
  TIMELINE_URL,
  WLM_URL,
} = navigationUrls;

class App extends Component {
  state = {
    results: [],
  };

  updateResults = newResults => {
    this.setState({ results: newResults });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Landing {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={ABOUT_URL}
            render={props => (
              <About {...props} footerProp={this.updateResults} />
            )}
          />
          <Route path={ADD_URL} component={Add} />
          <Route path={FORM_URL} component={Form} />
          <Route
            path={ARCHIVE_URL}
            render={props => (
              <Archive {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={HELP_URL}
            render={props => (
              <Help {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={RESOURCES_URL}
            render={props => (
              <Resources {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={RESULTS_URL}
            render={props => (
              <Results {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={STORY_URL}
            render={props => (
              <Story {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={TIMELINE_URL}
            render={props => (
              <Timeline {...props} footerProp={this.updateResults} />
            )}
          />
          <Route
            path={WLM_URL}
            render={props => <Wlm {...props} footerProp={this.updateResults} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
