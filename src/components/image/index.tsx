import { Image as PaletteImage } from '@artsy/palette';
import React from 'react';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import {
  Artwork,
  Image as GImage,
  Maybe,
  ResizedImageUrl,
} from '../../generated/graphql';

type Props = Pick<Artwork, 'image_title'> & {
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
  image_title,
  image,
  lazyLoad = false,
  placeholder,
}) => {
  const imageUrl = oc(image).resized.url();

  const Wrap = placeholder ? Placeholder : React.Fragment;

  return (
    (imageUrl && (
      <Wrap style={placeholder ? { paddingBottom: placeholder } : {}}>
        <PaletteImage
          style={{
            position: placeholder ? 'absolute' : 'relative',
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
          lazyLoad={lazyLoad}
          alt={image_title || ''}
          src={imageUrl}
        />
      </Wrap>
    )) ||
    null
  );
};
