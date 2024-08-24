import React from 'react';
import styled from 'styled-components';
import SlidableTiles from './SlidableTiles';
import PromotionalBanner from './PromotionalBanner';

const HomeContainer = styled.div`
  margin-left: 250px;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <PromotionalBanner />
      <SectionTitle>Featured Games</SectionTitle>
      <SlidableTiles />
      {/* Additional sections can be added here */}
    </HomeContainer>
  );
};

export default Home;
