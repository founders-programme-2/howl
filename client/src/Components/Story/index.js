import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Footer from '../Common/Footer';
import {
  Para,
  HeaderFour,
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
    id: 'recvgYjQco6Pi93oB',
    title: '',
    details: '',
    month: null,
    year: null,
    imageUrl: '',
    imageCaption: '',
    tags: null,
    category: '',
    status: null,
  };

  componentDidMount() {
    const { id } = this.state;
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
    } = this.state;

    const modifiedTags = tags ? tags.join(', ') : null;
    const imgAndCaption =
      imageUrl && imageCaption ? (
        <ImgFigure>
          <PostImg src={imageUrl} alt={imageCaption} />
          <FigCap>{imageCaption}</FigCap>
        </ImgFigure>
      ) : null;

    return (
      <Fragment>
        <ContentContainer>
          <TextContainer>
            <Title>{title}</Title>
            <section>
              <HeaderFour>Date of story:</HeaderFour>
              <Para>
                {month} {year}
              </Para>
            </section>
            <section>
              <HeaderFour>Category:</HeaderFour>
              <Para>{category}</Para>
            </section>
            <section>
              <HeaderFour>Tags:</HeaderFour>
              <Para>{modifiedTags}</Para>
            </section>
            <section>
              <DetailsHeader>Details:</DetailsHeader>
              <p>{details}</p>
            </section>
          </TextContainer>
          {imgAndCaption}
        </ContentContainer>
        <Footer />
      </Fragment>
    );
  }
}

export default Story;
