import React from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  margin-left: 250px;
  padding: 20px;
  text-align: center;
`;

const GameTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SlotMachine = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 5px solid #ff9900;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  font-size: 1.5rem;
`;

const SpinButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #ff9900;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e68a00;
  }
`;

const Game = ({ match }) => {
  const gameId = match.params.id;

  const handleSpin = () => {
    alert("Spinning the reels!");
  };

  return (
    <GameContainer>
      <GameTitle>Playing Game ID: {gameId}</GameTitle>
      <SlotMachine>Slot Machine Interface</SlotMachine>
      <SpinButton onClick={handleSpin}>Spin</SpinButton>
    </GameContainer>
  );
};

export default Game;
