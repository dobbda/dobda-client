import React, { useCallback } from 'react';
import styled from 'styled-components';
import { theme } from 'src/styles/Theme';
import { Searchi } from 'src/icons';
import { useRouter } from 'next/router';
import { useInput } from 'src/hooks';
type Props = {};

export const SearchBox = (props: Props) => {
  const router = useRouter();
  const [value, onChange] = useInput('');
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push({ pathname: '/', query: { ...router.query, keyword: value } }, undefined, { scroll: false });
    },
    [value, router],
  );
  return (
    <Form className="search-box" onSubmit={onSubmit}>
      <input type="text" placeholder="키워드 검색" value={value} onChange={onChange} />
      <button type="submit">
        <Shearch />
      </button>
    </Form>
  );
};

const Shearch = styled(Searchi)`
  height: 18px;
  width: 18px;
  color: ${theme.color.primary};
`;

const Form = styled.form`
  height: 30px;
  background-color: #fff;
  border: 1px solid ${theme.color.border2};
  max-width: 600px;
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  /* border-radius: 2rem; */
  transition: all 0.2s ease-in-out 0s;

  :hover {
    border: 1px solid ${theme.color.primary};
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0px 0px 3px;
  }

  input {
    width: 100%;
    font-size: 14px;
    border: none;
    background: none;
    outline: none;
    line-height: 20px;
    padding: 0 15px;
    ::placeholder {
      color: ${theme.color.text1(0.5)};
      font-weight: 500;
    }
    :hover {
      ::placeholder {
        color: ${theme.color.primary};
      }
    }
  }
  :focus-within {
    border: 1px solid ${theme.color.primary};
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0px 0px 3px;
  }

  button {
    text-decoration: none;
    float: right;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    background-color: none;
  }
`;
