import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Footer from '../Common/Footer';
import BounceLoaderComponent from '../BounceLoader';

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
  LoaderContainer,
} from './Story.style';

class Story extends Component {
  state = {
    name: '',
    title: '',
    details: '',
    month: null,
    year: null,
    imageUrl: '',
    imageCaption: '',
    tags: null,
    category: '',
    timeCreated: '',
    body: null,
    message: '',
    loadingFlag: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ loadingFlag: true }, () => {
      axios.get(`/posts/${id}`).then(res => {
        const { success } = res.data;
        if (success) {
          const { data } = res.data;
          data.body = true;
          Object.keys(data).forEach(ele => {
            this.setState({ [ele]: data[ele], loadingFlag: false });
          });
        } else {
          const { err } = res.data;
          this.setState({ message: err, loadingFlag: false });
        }
      });
    });
  }

  render() {
    const {
      name,
      title,
      details,
      month,
      year,
      imageUrl,
      imageCaption,
      tags,
      category,
      timeCreated,
      body,
      message,
      loadingFlag,
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
          <div aria-label="[Time Created]">
            <HeaderTwo>Submission date:</HeaderTwo>
            <Para>{timeCreated}</Para>
          </div>
          <div aria-label="[Author's name]">
            <HeaderTwo>Author&#39;s name:</HeaderTwo>
            <Para>{name}</Para>
          </div>
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

    const ContentOrLoader = loadingFlag ? (
      <LoaderContainer>
        <BounceLoaderComponent loadingFlag={loadingFlag} />
      </LoaderContainer>
    ) : (
      <Fragment>
        {messageVar}
        {bodyVar}
      </Fragment>
    );

    return (
      <Fragment>
        <ContentContainer>{ContentOrLoader}</ContentContainer>
        <Footer />
      </Fragment>
    );
  }
}

export default Story;
