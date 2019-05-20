import React from 'react';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

const override = css``;

const Loader = ({ uploadFlag }) => {
  return (
    <div className="sweet-loading">
      <CircleLoader
        css={override}
        sizeUnit="px"
        size={15}
        color=" #c02700"
        loading={uploadFlag}
      />
    </div>
  );
};

export default Loader;
