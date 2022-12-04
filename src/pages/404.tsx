import { NextPage } from 'next';
import styled from 'styled-components';
// pages/404.js
const style = {
  height: '60px',
  // background: '#fcfcfc',
  width: '100%',
  display: 'flex',
  padding: '15px 0 15px 10px',
  borderBottom: 'solid 1px #dbdbdb',
};
const Error404: NextPage = () => {
  return (
    <Wrap>
      <div style={{ ...style }}>
        <a href="/">
          <img src="/svg/dobda1.svg" alt="logo" />
        </a>
      </div>
      <div className="error">404</div>
      <br />
      <br />
      <span className="info">Page not found</span>
      <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="static" />
    </Wrap>
  );
};

export default Error404;

const Wrap = styled.div`
  overflow: hidden;
  user-select: none;

  .static {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    top: -100px;
    opacity: 0.05;
    z-index: 230;
    user-select: none;
    user-select: none;
  }

  .error {
    text-align: center;
    font-family: 'Gilda Display', serif;
    font-size: 95px;
    font-style: italic;
    text-align: center;
    width: 100px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -60px;
    right: 0;
    animation: noise 2s linear infinite;
    overflow: default;
  }

  .error:after {
    content: '404';
    font-family: 'Gilda Display', serif;
    font-size: 100px;
    font-style: italic;
    text-align: center;
    width: 150px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    color: blue;
    animation: noise-1 0.2s linear infinite;
  }

  .info {
    text-align: center;
    font-family: 'Gilda Display', serif;
    font-size: 16px;
    font-style: italic;
    text-align: center;
    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 140px;
    bottom: 0;
    left: 0;
    right: 0;
    animation: noise-3 1s linear infinite;
  }

  .error:before {
    content: '404';
    font-family: 'Gilda Display', serif;
    font-size: 100px;
    font-style: italic;
    text-align: center;
    width: 100px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    color: red;
    animation: noise-2 0.2s linear infinite;
  }

  @keyframes noise-1 {
    0%,
    20%,
    40%,
    60%,
    70%,
    90% {
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.5;
      left: -6px;
    }
    80% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
      left: 2px;
    }
  }

  @keyframes noise-2 {
    0%,
    20%,
    40%,
    60%,
    70%,
    90% {
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.5;
      left: 6px;
    }
    80% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
      left: -2px;
    }
  }

  @keyframes noise {
    0%,
    3%,
    5%,
    42%,
    44%,
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
    4.3% {
      opacity: 1;
      transform: scaleY(1.7);
    }
    43% {
      opacity: 1;
      transform: scaleX(1.5);
    }
  }

  @keyframes noise-3 {
    0%,
    3%,
    5%,
    42%,
    44%,
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
    4.3% {
      opacity: 1;
      transform: scaleY(4);
    }
    43% {
      opacity: 1;
      transform: scaleX(10) rotate(60deg);
    }
  }
`;
