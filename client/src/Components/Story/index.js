import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Footer from '../Common/Footer';

import {
  Para,
  HeaderTwo,
  PostImg,
  ContentContainer,
  TextContainer,
  ImgFigure,
  DetailsHeader,
  FigCap,
  Title,
} from './Story.style';

class Story extends Component {
  state = {
    title: '',
    details: '',
    month: null,
    year: null,
    imageUrl: '',
    imageCaption: '',
    tags: null,
    category: '',
    body: null,
    message: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/posts/${id}`).then(res => {
      const { success } = res.data;
      if (success) {
        const { data } = res.data;
        data.body = true;
        Object.keys(data).forEach(ele => {
          this.setState({ [ele]: data[ele] });
        });
      } else {
        const { err } = res.data;
        this.setState({ message: err });
      }
    });
  }

  render() {
    const {
      title,
      details,
      month,
      year,
      imageUrl,
      imageCaption,
      tags,
      category,
      body,
      message,
    } = this.state;

    const modifiedTags = tags ? tags.join(', ') : null;
    const imgAndCaption =
      imageUrl && imageCaption ? (
        <ImgFigure>
          <PostImg src={imageUrl} alt={imageCaption} />
          <FigCap>{imageCaption}</FigCap>
        </ImgFigure>
      ) : null;

    const bodyVar = body ? (
      <Fragment>
        <TextContainer>
          <Title>{title}</Title>
          <div aria-label="[Date of Story]">
            <HeaderTwo>Date of story:</HeaderTwo>
            <Para>
              {month} {year}
            </Para>
          </div>
          <div aria-label="[Category]">
            <HeaderTwo>Category:</HeaderTwo>
            <Para>{category}</Para>
          </div>
          <div aria-label="[Tags]">
            <HeaderTwo>Tags:</HeaderTwo>
            <Para>{modifiedTags}</Para>
          </div>
          <div aria-label="[Details]">
            <DetailsHeader>Details:</DetailsHeader>
            <p>{details}</p>
          </div>
        </TextContainer>
        {imgAndCaption}
      </Fragment>
    ) : null;

    const messageVar = message ? <h1>{message}</h1> : null;

    return (
      <Fragment>
        <ContentContainer>
          {messageVar}
          {bodyVar}
        </ContentContainer>
        <Footer />
      </Fragment>
    );
  }
}

export default Story;
