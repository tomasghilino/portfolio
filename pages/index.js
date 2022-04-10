import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMe />
      </Layout>
    </>
  );
}
