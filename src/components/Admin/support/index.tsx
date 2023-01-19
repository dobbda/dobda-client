import React from 'react';
import { Flex, Link } from 'src/components/common';
import styled from 'styled-components';

type Props = {
  onlyPolicy?: boolean;
};

const Support = ({ onlyPolicy = false }: Props) => {
  return (
    <div css={{ marginTop: '40px' }}>
      {!onlyPolicy && (
        <Flex css={{ marginBottom: '5px' }}>
          <Link href="#">
            <Text>Discord</Text>
          </Link>
          <Link href="#">
            <Text $before>카카오 문의</Text>
          </Link>
        </Flex>
      )}

      <Flex>
        <span />
        <Link href={`/support/service-terms`}>
          <Text>서비스이용약관 </Text>
        </Link>
        <Link href={`/support/privacy-policy`}>
          <Text $before>개인정보처리방침</Text>
        </Link>
      </Flex>
    </div>
  );
};

export default Support;

const Text = styled.span<{ $before?: boolean }>`
  color: #777777;
  font-size: 12px;
  ::before {
    ${({ $before }) =>
      $before &&
      `
		content: "";
    display: inline-block;
    width: 1px;
    height: 11px;
    background-color: #e4e8eb;
    vertical-align: -1px;
    margin: 0 8px;`}
  }
`;
