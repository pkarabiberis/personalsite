import React from 'react';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  );
};

export default Index;
