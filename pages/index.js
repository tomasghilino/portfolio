import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMe />
        <Technologies />
      </Layout>
    </>
  );
}
