import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import ProgramsSection from '../components/Programs/ProgramsSection';
import CommunityStory from '../components/CommunityStory/CommunityStory';
import VolunteerCTA from '../components/VolunteerCTA/VolunteerCTA';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ImpactStats />
        <ProgramsSection />
        <CommunityStory />
        <VolunteerCTA />
      </main>
      <Footer />
    </>
  );
}
