import Link from 'next/link';
import React from 'react';
import { Modal } from 'src/components/common';
import { SocialLogin } from 'src/components/SocialLogin';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
import { useWriteModalhandler } from 'src/hooks';
import { GoArrowi, OutSourcei, Questioni } from 'src/icons';

export function WirteHandlerModal() {
  const { writeModal, setWriteModal } = useWriteModalhandler();
  return (
    <>
      <Modal visible={writeModal} onClickHandler={setWriteModal}>
        <WriteModalContent>
          <h2>도움이 필요하신가요?</h2>
          <Link href="/questions/write">
            <a>
              <Btn onClick={() => setWriteModal(false)}>
                <Questioni color={theme.color.primary} size="20px" />
                질문 등록
                <GoArrowi color="rgb(199, 199, 199)" />
              </Btn>
            </a>
          </Link>
          <Link href="/custom-project/write">
            <a>
              <Btn outSource onClick={() => setWriteModal(false)}>
                <OutSourcei color={theme.color.secondary} size="20px" />
                소싱 등록
                <GoArrowi color="rgb(199, 199, 199)" />
              </Btn>
            </a>
          </Link>
        </WriteModalContent>
      </Modal>
    </>
  );
}

const WriteModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 30px 16px;
  width: 100%;
  max-width: 550px;
  transition: max-width 0.2s ease-in-out 0s;
  background: #fff;
  border-radius: 1em;
  margin: 1px;
  a {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }
`;
const Btn = styled.div<{ outSource?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  background-color: rgb(246, 246, 248);
  border: 1px solid rgb(245, 245, 247);
  border-radius: 0.8em;
  box-sizing: border-box;
  font-size: 15px;
  color: rgb(112, 112, 112);
  box-shadow: border-box;
  transition: all 0.2s ease-in-out 0.1s;
  cursor: pointer;

  :hover {
    box-shadow: ${theme.color.prRgb(0.4)} 0px 0px 0px 3px;
    box-shadow: ${({ outSource }) => outSource && `${theme.color.seRgb(0.4)} 0px 0px 0px 3px;`};
  }
`;
