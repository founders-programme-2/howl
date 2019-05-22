import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Footer from '../Common/Footer';

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

    const modifiedTags = tags ? tags.join(' ') : null;
    const image = imageUrl ? (
      <div>
        <img src={imageUrl} alt="post image" />
      </div>
    ) : null;
    const imgCap = imageCaption ? <p>{imageCaption}</p> : null;
    return (
      <Fragment>
        <Fragment>
          <h3>{title}</h3>
          {image}
          {imageCaption}
          <h4>Date of story:</h4>
          <p>
            {month} {year}
          </p>
          <h4>Category:</h4>
          <p>{category}</p>
          <h4>Tags:</h4>
          <p>{modifiedTags}</p>
          <h4>Details:</h4>
          <p>{details}</p>
        </Fragment>
        <Footer />
      </Fragment>
    );
  }
}

export default Story;
