import { Carousel, CarouselProps } from 'antd';

import React, { useRef } from 'react';
import BnCard from './BnCard';
import 'antd/dist/antd.css';
import { GoArrow, BackArrow } from 'src/icons/Icon';
import { CarouselRef } from 'antd/lib/carousel';
import styled from 'styled-components';
import { bn } from './data';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
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
      <Arrow css={{ right: '10px' }} onClick={next} className="right-arrow">
        <GoArrow />
      </Arrow>
      <Arrow css={{ left: '10px' }} onClick={prev} className="left-arrow">
        <BackArrow />
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
  bottom: 5%;
  z-index: 1;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  opacity: 0.1;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const S = styled.div`
  position: relative;
  :hover {
    .right-arrow {
      opacity: 0.9;
      padding: 5px 5px 5px 7px;
      border-radius: 1rem;
      background-color: #9f1ab996;
      bottom: 3%;
    }
    .left-arrow {
      opacity: 0.9;
      padding: 5px 7px 5px 5px;
      border-radius: 1rem;
      background-color: #9f1ab996;
      bottom: 3%;
    }
  }
`;
