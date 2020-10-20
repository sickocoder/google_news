import React, { FC } from 'react';

import {
  Container,
  Header,
  FooterMenu,
  ContentWrapper,
  ContentCards,
  ContentLists,
} from './home.styles';
import { Text } from '../../elements';

const Home: FC = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <ContentCards />
        <ContentLists />
      </ContentWrapper>
      <FooterMenu />
    </Container>
  );
};

export default Home;
