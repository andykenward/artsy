import { Flex, Sans, Serif, Spinner } from '@artsy/palette';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { oc } from 'ts-optchain';
import { useArtworkQuery } from '../../generated/graphql';
import { Error } from '../error';
import { Page } from '../page';
import { ImageContainer, LinkStyle, Section } from './style';

interface Props extends RouteComponentProps {
  slug?: string;
}

const LinkCollect: React.FC = () => (
  <LinkStyle to="/collect">
    <Sans size="4">&#60; Collect</Sans>
  </LinkStyle>
);

const Container: React.FC = ({ children }) => (
  <Page>
    <Section>
      <LinkCollect />
      {children}
    </Section>
  </Page>
);

export const Artwork: React.FC<Props> = ({ slug }) => {
  const { loading, error, data } = useArtworkQuery({
    variables: { id: slug as string },
  });

  if (error) {
    return (
      <Container>
        <Error error={error} />
      </Container>
    );
  }
  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
  if (data) {
    const artwork = oc(data).viewer.artwork();

    if (!artwork) return null;

    const image = oc(artwork).image.resized();
    const imageRetina = oc(artwork).image.resizedRetina();

    return (
      <Container>
        <Flex flexDirection="column" alignItems="center">
          <ImageContainer>
            {image && (
              <img
                alt={oc(artwork).image_title('')}
                width={image.width as number}
                height={image.height as number}
                srcSet={`${oc(image).url('')}, ${oc(imageRetina).url('')} 1.5x`}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                }}
                src={oc(image).url('')}
              />
            )}
            <Flex mx="1rem" pt="1rem" flexDirection="column">
              <Serif size="4">
                <strong>{artwork.artist_names}</strong>
              </Serif>
              <Serif size="4">{artwork.image_title}</Serif>
            </Flex>
          </ImageContainer>
        </Flex>
      </Container>
    );
  }
  return (
    <Container>
      <Serif size="4">No matching Artwork</Serif>
    </Container>
  );
};
