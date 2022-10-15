import { Button } from 'antd';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

const headerFont = '20px';
const wrapperPadding = '30px';
export const DetailContainer = styled.div`
  max-width: 780px;
`;

export const ContentWrapper = styled.div`
  border-radius: 4px;
  /* word-wrap:break-word; */
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  border: 1px solid #eeee;
  /* margin-bottom: 40px; */
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

  .detailInfo {
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
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
  padding: ${wrapperPadding} 0;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const EditorWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  margin-top: 30px;
  h3 {
    padding-left: 10px;
    color: #383838;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 0;
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
  margin: 20px 0;
`;

export const ProjectProgress = styled.div`
  border: 1px solid ${theme.color.border(0.1)};
  /* border-bottom: none; */
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    margin: 5px 10px;
  }
`;
export const NodataWrapper = styled.div`
  padding: 20px 10px;
  margin: 5px;
  border: solid 1px ${theme.color.border2};
`;
