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
  constructor(props) {
    super(props);
  }

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
    // eslint-disable-next-line react/destructuring-assignment
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
          const { error } = res.data;
          this.setState({ message: error, loadingFlag: false });
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
    const { setFilters } = this.props;
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
            <HeaderTwo>Submission date:</HeaderTwo>
            <Para>{timeCreated}</Para>
          </section>
          <section>
            <HeaderTwo>Author&#39;s name:</HeaderTwo>
            <Para>{name}</Para>
          </section>
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
        <Footer setFilters={setFilters} />
      </Fragment>
    );
  }
}

export default Story;
