import React from 'react';
import {
  Article,
  HeaderFour,
  Para,
  DetailsHeader,
  DetailsPara,
} from './Entry.style';

const Entry = ({ id, title, year, category, details, tags, viewFullPost }) => {
  const shortenDetails = storyDetails => {
    if (storyDetails) {
      const shortenP = storyDetails.split(' ').slice(0, 29);
      let shortenedBody = shortenP.join(' ');
      shortenedBody += '...';
      return shortenedBody;
    }
    return null;
  };

  const renderTags = tags
    ? tags.map(tag => <Para key={tag}>{tag}</Para>)
    : null;

  return (
    <Article onClick={viewFullPost(id)}>
      <h3>{title || 'Untitled'}</h3>
      <div aria-label="[Date of Story]">
        <HeaderFour>Date of story:</HeaderFour>
        <Para>{year}</Para>
      </div>
      <div aria-label="Category">
        <HeaderFour>Category:</HeaderFour>
        <Para>{category}</Para>
      </div>
      <div aria-label="[Tags]">
        <HeaderFour>Tags:</HeaderFour>
        {renderTags}
      </div>
      <div aria-label="[Details]">
        <DetailsHeader>Details:</DetailsHeader>
        <DetailsPara>{shortenDetails(details)}</DetailsPara>
      </div>
    </Article>
  );
};

export default Entry;
