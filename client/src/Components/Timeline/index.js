import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import navigationUrls from '../../constants/navigationUrls';
import { Picture, ImgFigure, FigCap, TimelineHeader } from './Timeline.style';
import TimelinePic from '../../assets/TimelinePic.svg';
import SelectTimeFrame from '../../assets/SelectTimeFrame.svg';
import CategorySelected from '../../assets/CategorySelected.svg';
import TagsSelected from '../../assets/TagsSelected.svg';
import SelectedMultipleFilters from '../../assets/SelectedMultipleFilters.svg';
import SearchFunctionality from '../../assets/SearchFunctionality.svg';
import StoriesHover from '../../assets/StoriesHover.svg';

const Timeline = () => {
  const { ARCHIVE_URL } = navigationUrls;
  return (
    <Fragment>
      <main>
        <header>
          <TimelineHeader>
            The HOWL Timeline -
            <br />
            Coming soon!
          </TimelineHeader>
          <ImgFigure>
            <Picture src={TimelinePic} alt="Coming soon interactive timeline" />
            <FigCap>Coming soon interactive timeline</FigCap>
          </ImgFigure>
        </header>
        <h2>How it works</h2>
        <p>
          Each hexagon represents a story/event. You can hover on each story to
          enlarge it and get a snippet of when the story took place, the title
          and a small link that you can click to read more.
        </p>
        <ImgFigure>
          <Picture
            src={StoriesHover}
            alt="A picture depicting a hovered enlarged story"
          />
          <FigCap>A picture depicting a hovered enlarged story</FigCap>
        </ImgFigure>
        <p>
          Browse the timeline by using the controls at the bottom of the page to
          filter your results by category, location, tags or year. Above the
          search controls, you&#39;ll find a yellow bar of dates. This allows
          you to view stories from between a time span of four to five years.
          For example, If you click on the first time frame (1960-1965) it will
          zoom in on that time frame only. Allowing you a clearer view of events
          and when they happened.
        </p>
        <ImgFigure>
          <Picture
            src={SelectTimeFrame}
            alt="A picture depicting the selected time frame (1960-1965) stories"
          />
          <FigCap>
            A picture depicting the selected time frame (1960-1965) stories
          </FigCap>
        </ImgFigure>
        <p>
          You can use the controls in the Footer of the page to filter the
          timeline and focus on events relevant to your chosen topic. For
          example, you can filter by single select dropdowns like category.
        </p>
        <ImgFigure>
          <Picture
            src={CategorySelected}
            alt="A picture depicting stories filtered by selected category 'major event'"
          />
          <FigCap>
            {
              "A picture depicting stories filtered by selected category 'major event'"
            }
          </FigCap>
        </ImgFigure>
        <p>{"You can also apply multiselect filters like 'Tags'."} </p>
        <ImgFigure>
          <Picture
            src={TagsSelected}
            alt="A picture depicting stories filtered by selected tags: abortion, reproductive rights, conferences & childcare."
          />
          <FigCap>
            A picture depicting stories filtered by selected Tags: abortion,
            reproductive rights, conferences & childcare.
          </FigCap>
        </ImgFigure>
        <p>
          The more filters you apply, the more you will be able to narrow down
          your search and customize stories displayed on the timeline.
        </p>
        <ImgFigure>
          <Picture
            src={SelectedMultipleFilters}
            alt="A picture depicting stories filtered by both selected category 'story' and selected tags: abortion, reproductive rights, conferences & childcare."
          />
          <FigCap>
            {
              "A picture depicting stories filtered by both selected category 'story' and selected tags: abortion, reproductive rights, conferences & childcare."
            }
          </FigCap>
        </ImgFigure>
        <p>
          Looking for very specific keywords? No worries! You can use the search
          functionality to filter through stories that either match or contain
          whatever word you enter in the search field.
        </p>
        <ImgFigure>
          <Picture
            src={SearchFunctionality}
            alt="A picture depicting stories filtered by searching for keyword 'abortion'"
          />
          <FigCap>
            {
              "A picture depicting stories filtered by searching for keyword 'abortion'"
            }
          </FigCap>
        </ImgFigure>

        <p>
          Prefer a simpler approach? Take a look at the{' '}
          <Link to={ARCHIVE_URL}>archive</Link> for a text-based experience.
        </p>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Timeline;
