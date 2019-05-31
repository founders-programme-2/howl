import React, { Fragment, Component } from 'react';
import Footer from '../Common/Footer';
import Entry from '../Archive/Entry';
import { Link } from 'react-router-dom';

class Results extends Component {
  state = {
    selectedPostId: '',
  };

  viewFullPost = id => () => {
    this.setState({ selectedPostId: id }, () => {
      const { history } = this.props;
      const { selectedPostId } = this.state;
      history.push(`/story/${selectedPostId}`);
    });
  };

  renderResults = res => {
    // Axios request should be here, this is a stupid initial render.

    const fakeResults = [
      {
        fields: {
          category: 'Campaigns',
          details:
            "A group of Women set up an East Anglia University Womens Liberation Group in Sep 1973↵This had a series of successful meetings discussing issues, which related to the 6 Demands of the WLM↵However all the content and approach was very female heterosexual orientated↵At the end of that academic year around June 1974 we organised a women only party on Campus↵It was like a revelation We felt like we had never non judgmentally enjoyed each other's company as women↵The start of the new academic year in Oct 1974 came under the English and American Studies exchange program↵a very out American lesbian came to the Women's Liberation Group↵Everything opened up for all of us She had a relationship for the year she was in England with a woman who I was ↵sharing my flat in Norwich with I had my first lesbian relationship Although at the time I thought I was bi-sexual↵Still I came out as a lesbian in 1981 when I had my last relationship with a man and I have never looked back.",
          id: 139,
          tags: (8)[
            ('Asian',
            'Black',
            'Books',
            'Childcare',
            'Conferences',
            'Conflicts',
            'Demonstrations',
            'Education')
          ],
          title: 'Womens march',
          year: 1964,
        },
        id: 'recU70hBSi0rAFhGo',
      },
      {
        fields: {
          category: 'Culture',
          details:
            "A group of Women set up an East Anglia University Womens Liberation Group in Sep 1973↵This had a series of successful meetings discussing issues, which related to the 6 Demands of the WLM↵However all the content and approach was very female heterosexual orientated↵At the end of that academic year around June 1974 we organised a women only party on Campus↵It was like a revelation We felt like we had never non judgmentally enjoyed each other's company as women↵The start of the new academic year in Oct 1974 came under the English and American Studies exchange program↵a very out American lesbian came to the Women's Liberation Group↵Everything opened up for all of us She had a relationship for the year she was in England with a woman who I was ↵sharing my flat in Norwich with I had my first lesbian relationship Although at the time I thought I was bi-sexual↵Still I came out as a lesbian in 1981 when I had my last relationship with a man and I have never looked back.",
          id: 136,
          tags: ['Books'],
          title: 'This is a test',
          year: 1975,
        },
        id: 'recujmyVLDfADsJyf',
      },
    ];

    // When axios response data this function should return/change state:
    return fakeResults.map(story => (
      <Entry
        key={story.id}
        id={story.id}
        title={story.fields.title}
        year={story.fields.year}
        category={story.fields.category}
        details={story.fields.details}
        tags={story.fields.tags}
        viewFullPost={this.viewFullPost}
      />
    ));
  };

  render() {
    const { filters, setFilters } = this.props;
    return (
      <Fragment>
        <main>
          <header>
            <h1>Search Results</h1>
          </header>
          {this.renderResults(filters)}
        </main>
        <Footer setFilters={setFilters} />
      </Fragment>
    );
  }
}

export default Results;
