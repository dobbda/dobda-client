import Upload from 'antd/lib/upload/Upload';
import styled from 'styled-components';

export const UploadS = styled(Upload)`
  background-color: #fff;
  padding: 8px 8px 0 8px;
  border-radius: 4px;
  overflow-y: hidden;
  margin-top: 10px;
`;

export const ShowBtn = styled.div`
  padding: 5px;
  background-color: #fff;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  span {
    color: #929292;
    font-weight: bold;
  }
`;

interface StypeProps {
  bgColor?: string;
  titleColor?: string;
  bgImg?: string;
  isImg?: boolean;
}
export const BackgroundImg = styled.div<StypeProps>`
  position: relative;
  height: 400px;
  background-image: url(${({ bgImg, isImg }) => isImg && bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#bd339a')};
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  .title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: ${({ titleColor }) => (titleColor ? titleColor : '#fff')};
    }
  }
  .card_content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    gap: 10px;

    .bg_upload {
      background-color: #f0f8ff94;
      border: solid 1px #6366691f;
      padding: 2px 10px;
      border-radius: 0.3rem;
    }

    .bg_upload {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    input::placeholder {
      color: #5c1263ce;
    }
    button {
      border: 0;
      background-color: #0000;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const Color = styled.span`
  display: flex;
  align-items: center;
  background-color: #f0f8ff94;
  gap: 10px;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 0.3rem;
  min-width: fit-content;
  cursor: default;
  div {
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  input {
    background-color: #f0f8ff94;
    border: solid 1px #6366691f;
    padding: 5px 10px;
    border-radius: 0.3rem;
    width: 100%;
  }
`;
