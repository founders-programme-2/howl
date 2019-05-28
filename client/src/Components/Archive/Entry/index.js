import React from 'react';
import {
  Article,
  HeaderFour,
  Para,
  DetailsHeader,
  DetailsPara,
  TagsPara,
  Section,
  Title,
} from './Entry.style';

const Entry = ({ id, title, year, category, details, tags, viewFullPost }) => {
  const shortenDetails = storyDetails => {
    if (details) {
      if (details.length > 200) {
        const shortenP = storyDetails.split(' ').slice(0, 30);
        let shortenedBody = shortenP.join(' ');
        shortenedBody += '...';
        return shortenedBody;
      }
      return details;
    }
    return 'No description';
  };

  const renderTags = tags ? <TagsPara>{tags.join(', ')}</TagsPara> : null;

  return (
    <Article onClick={viewFullPost(id)}>
      <Title>{title}</Title>
      <Section>
        <HeaderFour>Date of story:</HeaderFour>
        <Para>{year}</Para>
      </Section>
      <Section>
        <HeaderFour>Category:</HeaderFour>
        <Para>{category}</Para>
      </Section>
      <Section>
        <HeaderFour>Tags:</HeaderFour>
        {renderTags}
      </Section>
      <Section>
        <DetailsHeader>Details:</DetailsHeader>
        <DetailsPara>{shortenDetails(details)}</DetailsPara>
      </Section>
    </Article>
  );
};

export default Entry;
