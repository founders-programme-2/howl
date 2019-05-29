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
    filters: [],
  };

  updateFilters = newResults => {
    this.setState({ results: newResults });
  };

  render() {
    const { filters } = this.state;

    return (
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Landing {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route
            path={ABOUT_URL}
            render={props => (
              <About {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route path={ADD_URL} component={Add} />
          <Route path={FORM_URL} component={Form} />
          <Route
            path={ARCHIVE_URL}
            render={props => (
              <Archive {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route
            path={HELP_URL}
            render={props => (
              <Help {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route
            path={RESOURCES_URL}
            render={props => (
              <Resources {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route
            path={RESULTS_URL}
            render={props => (
              <Results
                {...props}
                setFilters={this.updateFilters}
                filters={filters}
              />
            )}
          />
          <Route
            path={STORY_URL}
            render={props => (
              <Story {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route
            path={TIMELINE_URL}
            render={props => (
              <Timeline {...props} setFilters={this.updateFilters} />
            )}
          />
          <Route
            path={WLM_URL}
            render={props => <Wlm {...props} setFilters={this.updateFilters} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
