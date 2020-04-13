import { Link, Sans, Serif, Spinner } from '@artsy/palette';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useArtworkQuery } from '../../generated/graphql';
import { Error } from '../error';
import { Page } from '../page';
import { Figure, Image, LinkStyle, Section } from './style';

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

export const Artwork: React.FC<Props> = ({ slug = '' }) => {
  const { loading, error, data } = useArtworkQuery({
    variables: { id: slug },
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
  if (data?.artwork) {
    const artwork = data.artwork;
    const image = artwork.image?.resized;
    const imageRetina = artwork.image?.resizedRetina;

    return (
      <Container>
        <Figure>
          <Image
            alt=""
            width={image?.width ?? undefined}
            height={image?.height ?? undefined}
            srcSet={`${image?.url ?? undefined}, ${imageRetina?.url ??
              undefined} 2x`}
            src={image?.url ?? undefined}
          />

          <figcaption style={{ maxWidth: `${image?.width}px` }}>
            <Serif size="4">
              <strong>{artwork.artistNames}</strong>
            </Serif>
            <Serif size="4">{artwork.imageTitle}</Serif>
            <Link
              href={`https://www.artsy.net${artwork.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Serif size="4">Source</Serif>
            </Link>
          </figcaption>
        </Figure>
      </Container>
    );
  }
  return (
    <Container>
      <Serif size="4">No matching Artwork</Serif>
    </Container>
  );
};
