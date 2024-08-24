import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #ff9900;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PromotionalBanner = () => {
  return (
    <BannerContainer>
      <p>Join Now and Get 1000 Sweeps Coins FREE!</p>
    </BannerContainer>
  );
};

export default PromotionalBanner;
