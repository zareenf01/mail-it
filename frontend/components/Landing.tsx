import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import CTA from './CTA';
import Footer from './Footer';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar onLogoClick={() => navigate('/')} />
      <Hero onGetStarted={() => navigate('/inbox')} />
      <Features />
      <HowItWorks />
      <CTA onTryNow={() => navigate('/inbox')} />
      <Footer />
    </>
  );
};

export default Landing;