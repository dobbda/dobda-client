import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Modal } from 'src/components/common/@share/Modal';
import { Fulli, Nexti, Previ, TagClosei } from 'src/icons';
import { Image as ImageType } from 'src/types';
import styled from 'styled-components';

type Props = {
  images: ImageType[];
};

const CarouselsImages = ({ images }: Props) => {
  const settings = {
    // className: 'center',
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 1,
    draggable: true,
  };

  const slicRef = useRef<CarouselRef | null>();

  const next = () => {
    slicRef.current.next();
  };
  const prev = () => {
    slicRef.current.prev();
  };
  const [zoom, setZoom] = useState(false);
  const [thisImage, setThisImage] = useState<ImageType>();
  const onClickZoom = (v: ImageType) => {
    setThisImage(v);
    setZoom(true);
  };
  return (
    <>
      <SlideContainer>
        <Arrow css={{ right: '10px' }} onClick={next} className="arrow">
          <Nexti />
        </Arrow>
        <Arrow css={{ left: '10px' }} onClick={prev} className="arrow">
          <Previ />
        </Arrow>
        <Carousel {...settings} ref={slicRef}>
          {images?.map((v) => {
            return (
              <div>
                <ImgWrap>
                  <FullIcon onClick={() => onClickZoom(v)}>
                    <Fulli />
                  </FullIcon>
                  <Image src={v.url} layout={'fill'} alt={v?.name} objectFit="cover" />
                </ImgWrap>
              </div>
            );
          })}
        </Carousel>
      </SlideContainer>
      <Modal visible={zoom} onClickHandler={() => setZoom(false)}>
        <ModalImage>
          <div>
            <Image src={thisImage?.url} layout={'fill'} objectFit="contain" alt={thisImage?.name} className="fullscreen" />
            <ModalCloase onClick={() => setZoom(false)}>
              <TagClosei />
            </ModalCloase>
          </div>
        </ModalImage>
      </Modal>
    </>
  );
};

const ImgWrap = styled.div`
  position: relative;
  min-height: 330px;
  overflow: hidden;
  box-shadow: 0px 0px 2px 3px #c4c8d0;
  margin: 5px 15px;
`;

const SlideContainer = styled.div`
  position: relative;
  padding: 8px;
  box-shadow: inset 0px 0px 3px 3px #c4c8d0;
  max-width: 910px;
`;
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

const ModalImage = styled.div`
  width: 90vh;
  height: 100%;
  position: relative;
`;

const ModalCloase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  /* width: 10px;
  height: 10px; */
  color: gray;
  font-size: 80px;
  cursor: pointer;
`;

const FullIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 1;
  font-weight: bold;
  font-size: 25px;
  color: #646464;
  cursor: zoom-in;
`;
export default CarouselsImages;
