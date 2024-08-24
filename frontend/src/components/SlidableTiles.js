import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePreview from './GamePreview';

const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const games = [
  { id: 1, title: 'Slot Machine 1', image: '/images/slot1.jpg' },
  { id: 2, title: 'Slot Machine 2', image: '/images/slot2.jpg' },
  // Add more games here
];

const SlidableTiles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {games.map(game => (
          <div key={game.id}>
            <GamePreview game={game} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default SlidableTiles;
