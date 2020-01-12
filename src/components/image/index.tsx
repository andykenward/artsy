import { Image as PaletteImage } from '@artsy/palette';
import React from 'react';
import styled from 'styled-components';
import {
  Artwork,
  Image as GImage,
  Maybe,
  ResizedImageUrl,
} from '../../generated/graphql';

type Props = Pick<Artwork, 'imageTitle'> & {
  image: Maybe<
    { __typename?: 'Image' } & Pick<GImage, 'placeholder'> & {
        resized: Maybe<
          { __typename?: 'ResizedImageUrl' } & Pick<ResizedImageUrl, 'url'>
        >;
      }
  >;
} & {
  lazyLoad?: boolean;
  placeholder?: string;
};

const Placeholder = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Image: React.FC<Props> = ({
  imageTitle,
  image,
  lazyLoad = false,
  placeholder,
}) => {
  const imageUrl = image?.resized?.url;

  if (!imageUrl) return null;

  const Wrap = placeholder ? Placeholder : React.Fragment;

  return (
    <Wrap style={placeholder ? { paddingBottom: placeholder } : {}}>
      <PaletteImage
        style={{
          position: placeholder ? 'absolute' : 'relative',
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        }}
        lazyLoad={lazyLoad}
        alt={imageTitle || ''}
        src={imageUrl}
      />
    </Wrap>
  );
};
