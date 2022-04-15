import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMe />
        <Technologies />
        <Projects />
      </Layout>
    </>
  );
}
