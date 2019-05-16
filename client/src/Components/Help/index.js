import React from 'react';
import {
  H2Sml,
  ImgExample,
  SectionCntr,
  Highlight,
  CallToAction,
} from './Help.style';
import timeline from '../../assets/helpTimeline.svg';
import dropdowns from '../../assets/helpDropdowns.svg';
import searchInput from '../../assets/helpSearchInput.svg';
import searchBtn from '../../assets/helpSearchBtn.svg';

const Help = () => {
  return (
    <main>
      <header>
        <h1>How to Search</h1>
      </header>

      <SectionCntr>
        <H2Sml>Where to Start</H2Sml>
        <p>
          You have the option to search our archive by{' '}
          <Highlight>
            section of time, category, location, tags, year, and your own search
            queries
          </Highlight>
          . These options can be viewed one at a time, or in conjunction with
          others. Please be sure to make all of your selections before pressing
          <Highlight>"Search"</Highlight>
        </p>
      </SectionCntr>

      <SectionCntr>
        <H2Sml>Searching by Section of Time</H2Sml>
        <p>
          Clicking on any of the sections of time on the timeline will return
          only the results for that period (e.g. 1960 - 1965). Select one and
          then press <Highlight>"Search"</Highlight>, or continue to select
          other parameters first.
        </p>
        <ImgExample src={timeline} alt="Example of clickable timeline" />
      </SectionCntr>

      <SectionCntr>
        <H2Sml>Searching by Category, Location, Tags, or Year</H2Sml>
        <p>
          Clicking on the small arrow on the edge any of these fields will give
          you a list of options to choose from for filtering your search
          results. Click on one to select it. Select one and then press
          <Highlight>"Search"</Highlight>, or continue to select other
          parameters first.
        </p>
        <ImgExample src={dropdowns} alt="Dropdown selector example" />
      </SectionCntr>

      <SectionCntr>
        <H2Sml>Searching with your own search Queries</H2Sml>
        <p>
          By clicking on the empty input field with the text “search ...” you
          will be able to type in your own search queries. DO so, and then press
          <Highlight>"Search"</Highlight>, or continue to select other
          parameters first.
        </p>
        <ImgExample src={searchInput} alt="Search input example" />
      </SectionCntr>

      <SectionCntr>
        <H2Sml>Submitting your search</H2Sml>
        <p>
          Once you have made all of your selections, simply click{' '}
          <Highlight>"Search"</Highlight>!
        </p>
        <ImgExample src={searchBtn} alt="Search button example" />
      </SectionCntr>

      <CallToAction>Now give it a try yourself!</CallToAction>
    </main>
  );
};

export default Help;
