import { Button } from 'antd';
import styled from 'styled-components';

const headerFont = '20px';
const wrapperPadding = '30px';
export const DetailContainer = styled.div`
  /* min-height: 100vh; */
`;

export const ContentWrapper = styled.div`
  border-radius: 4px;
  /* word-wrap:break-word; */
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  border: 1px solid #eeee;
`;
export const CoinWrapper = styled.span`
  font-weight: 600;
  align-items: center;
  display: inline-flex;
  padding: 3px 5px;
  background-color: moccasin;
  p {
    display: inline;
    color: #eda200;
    margin: 0 5px;
    font-size: 14px;
  }
`;
export const ContentHeader = styled.header`
  /* background-color: #fbfbfb; */
  padding: ${wrapperPadding};
  border-bottom: 1px solid #ccc;
  position: relative;
  h1,
  h2,
  h3 {
    //제목
    display: inline;
    font-weight: 650;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  .detailInfo {
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const OnyUser = styled.div`
  position: absolute;
  right: 2px;
  bottom: 5px;
  font-size: 12px;
  button {
    border: none;
    padding: 3px 10px;
    margin: 0 5px;
  }
`;
export const ContentViewWrapper = styled.div`
  padding: 10px 20px;
  height: 100%;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: ${wrapperPadding};
  background-color: #fff;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const EditorWrapper = styled.div`
  position: relative;

  background-color: #fff;
  border-radius: 4px;
  margin: 25px 0;
  padding: 30px;
  h3 {
    color: #000;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const SubmitBtn = styled(Button)`
  cursor: pointer;
  display: block;
  width: 100px;

  margin: 5px auto;
  padding: 2px 10px 5px;
  background-color: #212121;
  color: #fff;
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.06em;
`;

export const Title = styled.h1`
  word-wrap: break-word;
`;

export const OutSourcingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #0001;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  align-items: center;
  padding: 5px;
  margin: 5px 30px;

  @media screen and (max-width: 768px) {
    margin: 5px 10px;
  }
`;
