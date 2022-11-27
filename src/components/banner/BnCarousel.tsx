import { Carousel, CarouselProps } from 'antd';

import React, { useRef } from 'react';
import BnCard from './BnCard';
import 'antd/dist/antd.css';
import { Nexti, Previ } from 'src/icons';
import { CarouselRef } from 'antd/lib/carousel';
import styled from 'styled-components';
import { bn } from './data';

const BnCarousel = () => {
  const slicRef = useRef<CarouselRef | null>();
  const next = () => {
    slicRef.current.next();
  };
  const prev = () => {
    slicRef.current.prev();
  };
  return (
    <S>
      <Arrow css={{ right: '10px' }} onClick={next} className="arrow">
        <Nexti />
      </Arrow>
      <Arrow css={{ left: '10px' }} onClick={prev} className="arrow">
        <Previ />
      </Arrow>
      <Carousel draggable ref={slicRef} autoplay autoplaySpeed={4000}>
        {/* autoplay autoplaySpeed={4000} */}
        <BnCard {...bn[0]} />
        <BnCard {...bn[1]} />
        <BnCard {...bn[2]} />
      </Carousel>
    </S>
  );
};

export default BnCarousel;

const Arrow = styled.div`
  position: absolute;
  bottom: 45%;
  z-index: 1;
  cursor: pointer;
  font-size: 50px;
  opacity: 0.6;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #fff !important;
  }
`;

const S = styled.div`
  position: relative;
  :hover {
    .arrow {
      opacity: 1;
      bottom: 45%;
    }
  }
`;
