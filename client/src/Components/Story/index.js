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
      const { data } = res.data;
      Object.keys(data).forEach(ele => {
        this.setState({ [ele]: data[ele] });
      });
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
          <section>
            <HeaderTwo>Date of story:</HeaderTwo>
            <Para>
              {month} {year}
            </Para>
          </section>
          <section>
            <HeaderTwo>Category:</HeaderTwo>
            <Para>{category}</Para>
          </section>
          <section>
            <HeaderTwo>Tags:</HeaderTwo>
            <Para>{modifiedTags}</Para>
          </section>
          <section>
            <DetailsHeader>Details:</DetailsHeader>
            <p>{details}</p>
          </section>
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
