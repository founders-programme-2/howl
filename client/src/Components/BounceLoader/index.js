import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

const override = css`
  margin: auto;
`;

const BounceLoaderComponent = ({ LoadingFlag }) => {
  return (
    <div className="sweet-loading">
      <BounceLoader
        css={override}
        sizeUnit="rem"
        size={20}
        color="#F6C25B"
        loading={LoadingFlag}
      />
    </div>
  );
};

export default BounceLoaderComponent;
