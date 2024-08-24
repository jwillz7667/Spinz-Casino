import React from 'react';
import styled from 'styled-components';

const GameCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const GameTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0;
`;

const GamePreview = ({ game }) => {
  return (
    <GameCard>
      <GameImage src={game.image} alt={game.title} />
      <GameTitle>{game.title}</GameTitle>
    </GameCard>
  );
};

export default GamePreview;
