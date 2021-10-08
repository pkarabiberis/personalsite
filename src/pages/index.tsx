import React from 'react';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Projects } from '../components/Projects';
import { Work } from '../components/Work';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Index;
