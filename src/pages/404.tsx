import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

const Container = styled.div`
  margin: 50px auto;
`;

const NotFoundPage = () => {
  return (
    <>
      <title>404 | Pavlos Karabiberis</title>
      <Header />
      <Layout>
        <Container>
          <h1>Nothing to see here...</h1>
        </Container>
      </Layout>
    </>
  );
};

export default NotFoundPage;
